import { NextRequest, NextResponse } from 'next/server';

// Webhook nhận sự kiện từ Brevo
export async function POST(req: NextRequest) {
  try {
    // Kiểm tra biến môi trường ENABLE_WEBHOOK
    if (process.env.ENABLE_WEBHOOK !== 'true') {
      return NextResponse.json({ disabled: true });
    }

    const event = await req.json();

    // Chỉ xử lý các sự kiện có tag là 'ttdcontactmail' và là bounce hoặc blocked
    if (
      event.tag === 'ttdcontactmail' &&
      (event.event === 'bounce' || event.event === 'blocked') &&
      event.email
    ) {
      // Gửi email thông báo cho admin
      const brevoApiKey = process.env.BREVO_API_KEY;
      const notifyHtml = `
        <html><body style="font-family:Arial,sans-serif;background:#f9f9f9;padding:32px;">
          <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;box-shadow:0 2px 8px #eee;padding:32px;">
            <h2 style="color:#dc2626;">Email gửi không thành công!</h2>
            <p>Email <b>${event.email}</b> không nhận được mail do: <b>${event.reason || event.event}</b></p>
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
            email: 'txntan@gmail.com',
            name: 'Tan Tran',
          },
        ],
        subject: `Email gửi không thành công: ${event.email}`,
        htmlContent: notifyHtml,
        tag: 'ttdcontactmail',
      };
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'api-key': brevoApiKey!,
          'content-type': 'application/json',
        },
        body: JSON.stringify(notifyPayload),
      });
    }

    // Trả về 200 OK cho Brevo
    return NextResponse.json({ received: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Webhook error' }, { status: 500 });
  }
}
