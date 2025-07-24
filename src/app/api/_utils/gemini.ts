// src/app/api/_utils/gemini.ts
import { NextResponse } from 'next/server';

export async function callGemini(prompt: string, apiKey: string) {
  if (!prompt || prompt.trim().length < 20) {
    throw new Error('Prompt is too short or empty. Not processing request.');
  }
  if (!apiKey) {
    throw new Error('Missing Gemini API key');
  }
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });
    const data = await response.json();
    let resultText = 'No response from Gemini.';
    if (
      data.candidates &&
      data.candidates.length > 0 &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts.length > 0
    ) {
      resultText = data.candidates[0].content.parts[0].text;
    }
    return resultText;
  } catch (error) {
    throw new Error('Failed to fetch from Gemini.');
  }
}
