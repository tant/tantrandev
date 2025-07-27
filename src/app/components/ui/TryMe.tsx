'use client'

import React, { useState } from 'react';
import { marked } from 'marked';

const roles = [
  'Executive Leader',
  'Technology Partner',
  'Strategic Investor',
];

const TryMe: React.FC = () => {
  const [companyDesc, setCompanyDesc] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [result, setResult] = useState('');
  const [resultHtml, setResultHtml] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult('');
    setResultHtml('');
    try {
      const res = await fetch('/api/try-me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyDesc, role }),
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
        setResultHtml(data.html || '');
      } else if (data.error) {
        setResult('');
        setResultHtml(data.error);
      } else {
        setResult('');
        setResultHtml('No response from Gemini.');
      }
    } catch (err) {
      setResult('');
      setResultHtml('Error connecting to Gemini API.');
    }
    setLoading(false);
  };

  return (
    <div id="tryme-anchor" className="tryme-section">
      <div className="mt-10 flex justify-center">
        <div className="bg-white rounded-xl shadow p-8 w-full max-w-md lg:max-w-3xl flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">Explore my strategic fit</h3>
          <p className="text-xs text-gray-500 mb-6 text-center">Powered by Gemini AI ✨</p>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            rows={3}
            placeholder="Describe your company, business goals, challenges, and expectations. E.g. We are a fast-growing SaaS startup in fintech, serving 500+ enterprise clients in Southeast Asia. Our main challenge is scaling our cloud infrastructure and expanding into new markets like Australia. We value innovation, reliability, and strategic partnerships."
            value={companyDesc}
            onChange={e => setCompanyDesc(e.target.value)}
          />
          <div className="w-full flex flex-col md:flex-row gap-3 mb-4">
            <label htmlFor="role-select" className="sr-only">Select your role</label>
            <select
              id="role-select"
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={role}
              onChange={e => setRole(e.target.value)}
            >
              {roles.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            <button
              className="flex-1 min-w-[120px] bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              onClick={handleGenerate}
              disabled={loading || !companyDesc}
            >
              {loading ? 'Analyzing...' : 'Analyze fit'}
            </button>
          </div>
          <div className="w-full min-h-[120px] max-h-48 overflow-auto text-sm text-gray-700 bg-gray-50 rounded p-3 border border-gray-100" aria-live="polite">
            {loading && (
              <div className="flex justify-center items-center h-full">
                <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600 mr-2"></span>
                <span>Generating...</span>
              </div>
            )}
            {!loading && result && (
              <div
                className="prose prose-sm w-full"
                dangerouslySetInnerHTML={{ __html: marked(result) }}
              />
            )}
            {!loading && !result && resultHtml && (
              <span className="text-red-500">{resultHtml}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryMe;
