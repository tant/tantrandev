import React, { useState } from 'react';

const roles = [
  'Executive Leader',
  'Technology Partner',
  'Strategic Investor',
];

const TryMe: React.FC = () => {
  const [companyDesc, setCompanyDesc] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResult('');
    // Placeholder for AI integration
    setTimeout(() => {
      setResult(
        `As a ${role}, I can help your company (${companyDesc || '...'}) achieve its goals with tailored strategies and expertise. [AI-generated response here]`
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white rounded-xl shadow p-8 w-3/4 max-w-md lg:max-w-3xl flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 text-center">Explore my strategic fit</h3>
        <p className="text-xs text-gray-500 mb-6 text-center">Powered by Gemini AI ✨</p>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          rows={3}
          placeholder="Describe your company..."
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
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="w-full min-h-[120px] max-h-48 overflow-auto text-sm text-gray-700 bg-gray-50 rounded p-3 border border-gray-100">
          {result && <span>{result}</span>}
        </div>
      </div>
    </div>
  );
};

export default TryMe;
