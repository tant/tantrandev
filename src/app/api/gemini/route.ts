import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { companyDesc, role } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing Gemini API key' }, { status: 500 });
  }

  // Build detailed prompt for Gemini
  const resumeSummary = `An executive with 20 years of experience who has:\n- Scaled a tech company from 0 to 100+ employees and over $1M in profitable revenue.\n- Led global market expansion into the US, Australia, and GCC.\n- Full P&L ownership and experience as a founder and angel investor.\n- Deep technical expertise in cloud architecture, AI/ML, and full software development lifecycle.\n- Proven success in high-barrier sectors like finance, insurance, and energy.`;

  const prompt = `Based on this professional's summary:\n---\n${resumeSummary}\n---\nAs a potential client from ${companyDesc}, what are 3 key strategic values this person could bring in the role of a \"${role}\"? Frame the answer as if you are advising the client. Be concise, insightful, and professional. Use bullet points.`;

  // Call Gemini API
  try {
    // Trước khi gọi Gemini, lấy danh sách model và log ra console
    // const modelRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + process.env.GEMINI_API_KEY);
    // const modelData = await modelRes.json();
    // console.log('Available Gemini models:', modelData);
  } catch (err) {
    // console.log('Error fetching Gemini models:', err);
  }

  // Gọi Gemini với model đã chọn
  try {
    // console.log('Gemini API endpoint:', 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey);
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });
    // console.log('Gemini API status:', response.status, response.statusText);
    const data = await response.json();
    // console.log('Gemini API response:', data);
    // Kiểm tra cấu trúc response kỹ hơn
    let resultText = 'No response from Gemini.';
    if (
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts.length > 0
    ) {
      resultText = data.candidates[0].content.parts[0].text;
    } else {
      // console.error('Unexpected response structure:', data);
    }

    // Chuyển markdown bullet points sang HTML
    let formattedHtml = resultText
      .replace(/\*\s*/g, '<li class="mb-2">')
      .replace(/(\r\n|\n|\r)/gm, '</li>') + '</li>';
    formattedHtml = `<ul class="list-disc list-inside text-gray-900">${formattedHtml}</ul>`;

    return NextResponse.json({ result: resultText, html: formattedHtml });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch from Gemini.' }, { status: 500 });
  }
}
