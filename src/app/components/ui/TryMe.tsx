'use client'

import React, { useState } from 'react';
import { marked } from 'marked';

const roles = [
  'Executive Leader',
  'Technology Partner',
];

const TryMe: React.FC = () => {
  const [companyDesc, setCompanyDesc] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetch('/api/try-me', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyDesc, role }),
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
      } else if (data.error) {
        setResult(data.error);
      } else {
        setResult('No response from Gemini.');
      }
    } catch (err) {
      setResult('Error connecting to Gemini API.');
    }
    setLoading(false);
  };

  return (
    <div id="tryme-anchor" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore My Strategic Fit</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Discover how my expertise can align with your business goals. Powered by Gemini AI ✨
          </p>
        </div>
        <div className="mt-16 rounded-xl bg-white p-8 shadow-2xl ring-1 ring-gray-900/10">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-900">Describe your business</h3>
              <div className="mt-6 flex flex-col gap-y-4">
                <textarea
                  rows={5}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="e.g., We are a fast-growing SaaS startup in fintech, serving 500+ enterprise clients in Southeast Asia. Our main challenge is scaling our cloud infrastructure..."
                  value={companyDesc}
                  onChange={(e) => setCompanyDesc(e.target.value)}
                />
                <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-4">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {roles.map((r) => <option key={r}>{r}</option>)}
                  </select>
                  <button
                    onClick={handleGenerate}
                    disabled={loading || !companyDesc}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                  >
                    {loading ? 'Analyzing...' : 'Analyze Fit'}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-7 text-gray-900">Analysis Result</h3>
              <div className="mt-6 min-h-[240px] rounded-lg bg-gray-50 p-6 ring-1 ring-inset ring-gray-200">
                {loading ? (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-indigo-600 border-t-transparent"></div>
                      <p className="text-gray-500">Generating analysis...</p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="prose prose-sm max-w-none text-gray-600"
                    dangerouslySetInnerHTML={{ __html: marked(result) }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryMe;
