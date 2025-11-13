import React from 'react';
import Link from 'next/link';

export interface ValueContent {
  p: string;
  ul: string[];
}

export interface ValueCardProps {
  title: string;
  role?: string;
  content: ValueContent;
  cta?: string;
  ctaLink?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, role, content, cta, ctaLink }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col h-full">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    {role && (
      <div className="text-sm font-semibold text-indigo-600 mb-3">{role}</div>
    )}
    <div className="text-gray-700 flex-1 mb-4">
      <p className="text-base md:text-lg mb-4">{content.p}</p>
      <ul className="text-base md:text-lg mt-2 mb-0 space-y-2 list-disc list-inside">
        {content.ul.map((item, idx) => (
          <li key={idx} className="marker:text-indigo-500">{item}</li>
        ))}
      </ul>
    </div>
    {cta && cta.trim() && (
      ctaLink ? (
        <Link href={ctaLink} className="mt-auto inline-block rounded bg-indigo-600 px-4 py-2 text-center text-white font-semibold hover:bg-indigo-700 transition">
          {cta}
        </Link>
      ) : (
        <button className="mt-auto inline-block rounded bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 transition">
          {cta}
        </button>
      )
    )}
  </div>
);

export default ValueCard;
