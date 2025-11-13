import React from 'react'

const highlights = [
  {
    title: 'Founded and scaled a profitable company',
    description: 'From the ground up, built and scaled a technology company to 100+ employees and over $1M in profitable annual revenue, using a data-driven approach to market entry and growth.',
  },
  {
    title: 'Led hyper-growth team expansion',
    description: 'To meet surging client demand, quadrupled the technical delivery team from 20 to 80 engineers in just six months, establishing a data-informed culture to maintain quality at scale.',
  },
  {
    title: 'Launched a new international subsidiary',
    description: 'Established a fully operational company in the UAE from scratch in under a year, navigating all legal, financial, and operational complexities with a focus on data-driven decision making.',
  },
  {
    title: 'Architected data-centric platforms',
    description: 'Led the re-architecting of critical products, transforming them into data-centric platforms that enabled real-time analytics and machine learning capabilities.',
  },
]

const SocialProofSection: React.FC = () => (
  <div className="relative isolate -z-10 mt-32 sm:mt-48">
    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden mask-[radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
      <svg aria-hidden="true" className="h-160 w-7xl flex-none stroke-gray-200">
        <defs>
          <pattern
            x="50%"
            y="50%"
            id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
            patternTransform="translate(-100 0)"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
          <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
      </svg>
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Highlights from my career
      </h2>
      <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
        Here are a few highlights from my career that demonstrate my commitment to building, leading, and delivering results.
      </p>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8">
        {highlights.map((highlight) => (
          <div key={highlight.title} className="flex flex-col rounded-2xl bg-white p-8 shadow-xl">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">{highlight.title}</h3>
            <p className="mt-4 flex-auto text-base leading-7 text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default SocialProofSection
