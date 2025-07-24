import React, { useState } from 'react';

const MyDigitalTwin: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setResult('');
    setError('');
    try {
      const res = await fetch('/api/digital-twin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (data.result) {
        setResult(data.result);
      } else if (data.error) {
        setError(data.error);
      } else {
        setError('No response from Gemini.');
      }
    } catch (err) {
      setError('Error connecting to Gemini API.');
    }
    setLoading(false);
  };

  return (
    <section id="ai-chat" className="py-20 sm:py-24 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <h2 className="text-4xl font-bold text-white">Chat with my digital twin ✨</h2>
          <p className="mt-4 text-lg text-gray-200">Powered by Gemini AI</p>
          <p className="mt-2 max-w-2xl mx-auto text-gray-300">
            Have questions about my experience, leadership philosophy, or how I approach a problem? Ask my AI-powered digital twin directly.
          </p>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                id="user-question"
                placeholder="E.g. What is your leadership philosophy?"
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleAsk(); }}
                disabled={loading}
              />
              <button
                id="ask-ai-btn"
                className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 w-full sm:w-[125%] sm:max-w-[220px]"
                onClick={handleAsk}
                disabled={loading || !question.trim()}
              >
                {loading ? 'Thinking...' : 'Ask AI'}
              </button>
            </div>
          </div>
          {/* Result Area */}
          <div id="ai-answer" className="mt-8 text-left bg-gray-800/90 p-6 rounded-lg shadow-md min-h-[100px] text-gray-100 leading-relaxed">
            {loading && (
              <div className="flex items-center"><span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-indigo-400 mr-2"></span> <span>Generating...</span></div>
            )}
            {!loading && result && (
              <div className="whitespace-pre-line">{result}</div>
            )}
            {!loading && error && <span className="text-red-400">{error}</span>}
            {!loading && !result && !error && <p className="text-gray-400">The answer will appear here...</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDigitalTwin;
