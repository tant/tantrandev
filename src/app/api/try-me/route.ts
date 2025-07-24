import { NextResponse } from 'next/server';
import { callGemini } from '../_utils/gemini';

export async function POST(req: Request) {
  const { companyDesc, role } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing Gemini API key' }, { status: 500 });
  }

  // Build detailed prompt for Gemini
  const resumeSummary = [
    'An entrepreneurial executive leader with a 20-year track record of building and scaling technology businesses. Key achievements include:',
    '- **Founder & Scaler:** Grew a bootstrapped tech company from zero to 100+ employees and over $1M in profitable annual revenue.',
    '- **Global Expansion Expert:** Successfully launched and led market entry into the US, Australia, and the GCC, establishing international subsidiaries from the ground up.',
    '- **Full P&L Ownership:** Proven expertise in financial planning, cash flow management, and driving profitability as both a founder and director.',
    '- **Deep Tech Acumen:** Hands-on experience architecting complex solutions using modern cloud (AWS, Azure), AI/ML, and full-stack technologies.',
    '- **High-Stakes Industry Success:** Demonstrated ability to penetrate and deliver for high-barrier sectors including banking, insurance, and energy.'
  ].join('\n');

  const prompt = [
    '**Act as a world-class strategic advisor.**',
    '',
    'A potential partner has described their organization and is exploring a collaboration.',
    '',
    "**Partner's Organization:**",
    '"""',
    `${companyDesc}`,
    '"""',
    '',
    '**Your Task:**',
    `Based on the executive profile provided below, write a compelling analysis outlining the strategic value this executive would bring to the partner's organization in the specific role of a **'${role}'**.`,
    '',
    "Your analysis must be persuasive, insightful, and directly address the partner's context. The goal is to clearly demonstrate a powerful business case for collaboration or hiring.",
    '',
    '**Executive Profile:**',
    '---',
    `${resumeSummary}`,
    '---',
    '',
    '**Required Output Format (Markdown):**',
    '',
    '1.  Begin with a direct, impactful title, such as "**Strategic Value Analysis for Your Organization**".',
    '',
    `2.  Create a section titled "**Core Strategic Impacts as a ${role}**".`,
    '',
    '3.  Under this section, detail **three distinct, high-impact contributions** this executive would make. For each contribution:',
    '    * Use a bolded, numbered sub-heading (e.g., **1. Driving Market Expansion and Modernization.**).',
    "    * In a concise paragraph, explain *how* the executive's specific experience (from their profile) directly translates to solving the partner's described needs or unlocking new opportunities. Connect the dots clearly. Focus on tangible outcomes like revenue growth, operational efficiency, innovation, or risk mitigation.",
    '',
    '4.  Conclude with a decisive summary statement under the heading "**Recommendation:**".',
    '',
    '**Tone and Style:**',
    '- Professional, confident, and authoritative.',
    '- Use the language of a seasoned business leader.',
    '- Avoid generic statements; make every point specific and evidence-based.',
    '',
    'Please respond in the same language as used in the company description above, if possible.'
  ].join('\n');

  try {
    const resultText = await callGemini(prompt, apiKey as string);
    let formattedHtml = resultText
      .replace(/\*\s*/g, '<li class="mb-2">')
      .replace(/(\r\n|\n|\r)/gm, '</li>') + '</li>';
    formattedHtml = `<ul class="list-disc list-inside text-gray-900">${formattedHtml}</ul>`;
    return NextResponse.json({ result: resultText, html: formattedHtml });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch from Gemini.' }, { status: 500 });
  }
}
