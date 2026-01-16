import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIP, rateLimitResponse } from '../_utils/rateLimit';

// Rate limit: 5 requests per minute per IP (stricter for email sending)
const RATE_LIMIT_CONFIG = { windowMs: 60 * 1000, maxRequests: 5 };


// Helper function to create or update a contact in Brevo
async function createOrUpdateBrevoContact({ email, attributes, listIds = [] }: {
  email: string;
  attributes?: Record<string, any>;
  listIds?: number[];
}) {
  const brevoApiKey = process.env.BREVO_API_KEY;
  const payload: any = {
    email,
    updateEnabled: true,
  };
  if (attributes) payload.attributes = attributes;
  if (listIds.length) payload.listIds = listIds;

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'api-key': brevoApiKey!,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch (e) {
    data = {};
  }
  if (!res.ok) throw new Error(data.message || 'Failed to create/update contact');
  return data;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const clientIP = getClientIP(req);
  const rateLimitResult = checkRateLimit(`brevo:${clientIP}`, RATE_LIMIT_CONFIG);
  if (!rateLimitResult.allowed) {
    return rateLimitResponse(rateLimitResult.resetTime);
  }

  try {
    const body = await req.json();
    const { firstName, lastName, message, contactMethod, email, phone } = body;

    // Validate required fields
    if (!firstName || !message || !contactMethod) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!brevoApiKey) {
      return NextResponse.json({ error: 'Missing Brevo API key' }, { status: 500 });
    }
    if (!adminEmail) {
      return NextResponse.json({ error: 'Missing admin email configuration' }, { status: 500 });
    }

    // Build beautiful thank you email for customer
    if (email && (contactMethod === 'email' || contactMethod === 'both')) {
      const thankYouHtml = `
        <html><body style="font-family:Arial,sans-serif;background:#f9f9f9;padding:32px;">
          <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;box-shadow:0 2px 8px #eee;padding:32px;">
            <h2 style="color:#2563eb;">Thank You, ${firstName}!</h2>
            <p>We appreciate your message:</p>
            <blockquote style="background:#f3f4f6;padding:16px;border-radius:4px;">${message}</blockquote>
            <p>We will get back to you soon.</p>
            <hr style="margin:32px 0;" />
            <p style="font-size:0.9em;color:#888;">Tan Tran | tantran.dev</p>
          </div>
        </body></html>
      `;
      const thankYouPayload = {
        sender: {
          name: 'TTD Mailer',
          email: 'no-reply@tantran.dev',
        },
        to: [
          {
            email,
            name: firstName,
          },
        ],
        subject: `Thank you for contacting Tan Tran`,
        htmlContent: thankYouHtml,
        tag: 'ttdcontactmail',
      };
      const thankYouRes = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': brevoApiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify(thankYouPayload),
      });
      const thankYouData = await thankYouRes.json();
      if (!thankYouRes.ok) {
        // Nếu gửi mail cảm ơn không thành công, gửi thông báo cho admin
        const failHtml = `
          <html><body style="font-family:Arial,sans-serif;background:#f9f9f9;padding:32px;">
            <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;box-shadow:0 2px 8px #eee;padding:32px;">
              <h2 style="color:#dc2626;">Email cảm ơn gửi không thành công!</h2>
              <p>Email <b>${email}</b> không nhận được mail cảm ơn.</p>
              <p>Chi tiết: ${JSON.stringify(thankYouData)}</p>
              <hr style="margin:32px 0;" />
              <p style="font-size:0.9em;color:#888;">Tan Tran | tantran.dev</p>
            </div>
          </body></html>
        `;
        const failPayload = {
          sender: {
            name: 'TTD Mailer',
            email: 'no-reply@tantran.dev',
          },
          to: [
            {
              email: adminEmail,
              name: 'Tan Tran',
            },
          ],
          subject: `New contact from website ${email}`,
          htmlContent: failHtml,
          tag: 'ttdcontactmail',
        };
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'api-key': brevoApiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify(failPayload),
        });
      }
    }

    // Create or update contact in Brevo
    if (email) {
      try {
        const contactPayload = {
          email,
          attributes: {
            SMS: phone || undefined,
            FNAME: firstName,
            LNAME: lastName || undefined,
          },
          listIds: [8],
        };
        const contactRes = await createOrUpdateBrevoContact(contactPayload);
      } catch (contactErr: any) {
        return NextResponse.json({ error: contactErr.message || 'Failed to sync contact' }, { status: 500 });
      }
    }

    // Build beautiful notification email for you
    const notifyHtml = `
      <html><body style="font-family:Arial,sans-serif;background:#f9f9f9;padding:32px;">
        <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;box-shadow:0 2px 8px #eee;padding:32px;">
          <h2 style="color:#2563eb;">New Contact Submission</h2>
          <table style="width:100%;margin-bottom:24px;">
            <tr><td style="font-weight:bold;">First Name:</td><td>${firstName}</td></tr>
            <tr><td style="font-weight:bold;">Last Name:</td><td>${lastName || ''}</td></tr>
            <tr><td style="font-weight:bold;">Email:</td><td>${email || ''}</td></tr>
            <tr><td style="font-weight:bold;">Phone:</td><td>${phone || ''}</td></tr>
            <tr><td style="font-weight:bold;">Contact Method:</td><td>${contactMethod}</td></tr>
          </table>
          <p style="font-weight:bold;">Message:</p>
          <blockquote style="background:#f3f4f6;padding:16px;border-radius:4px;">${message}</blockquote>
          <hr style="margin:32px 0;" />
          <p style="font-size:0.9em;color:#888;">Tan Tran | tantran.dev</p>
        </div>
      </body></html>
    `;
    const notifyPayload = {
      sender: {
        name: 'TTD Mailer',
        email: 'no-reply@tantran.dev',
      },
      to: [
        {
          email: adminEmail,
          name: 'Tan Tran',
        },
      ],
      subject: `New contact from website ${email}`,
      htmlContent: notifyHtml,
      tag: 'ttdcontactmail',
    };
    const notifyRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify(notifyPayload),
    });
    const notifyData = await notifyRes.json();
    if (!notifyRes.ok) {
      // Handle error silently
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}
