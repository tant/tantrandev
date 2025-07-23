import React from 'react'
import LogoCloud from './ui/LogoCloud'
import TryMe from './ui/TryMe'

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
      <h2 className="text-center text-lg/8 font-semibold text-gray-900">
        Trusted Partnerships, Proven Results
      </h2>
      <p className="mt-4 text-center text-base text-gray-600 max-w-2xl mx-auto">
        My work is validated by industry leaders and recognized for delivering tangible outcomes. Explore my potential strategic value below.
      </p>

      <LogoCloud />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* FeaturedIn Card */}
        <div className="rounded-xl bg-white shadow p-6 flex flex-col items-start">
          <h3 className="text-base font-semibold text-gray-800 mb-2 text-left">Featured In</h3>
          <p className="text-sm text-gray-600 mb-4 text-left">
            "Mr. Tan is proud that his company quickly applies new technologies and adapts to meet demanding client needs, earning trust from major partners." 
            <br/><a href="https://phumyhungngaynay.com/en/residents/find-the-balance-between-work-living-environment-family/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">Read full article</a>
          </p>
        </div>
        {/* Achievement Highlight Card */}
        <div className="rounded-xl bg-white shadow p-6 flex flex-col items-start">
          <h3 className="text-base font-semibold text-gray-800 mb-2 text-left">Achievement Highlight</h3>
          <p className="text-sm text-gray-600 mb-4 text-left">Received for revitalizing a critical project 30% behind schedule and delivering with zero post-launch bugs.</p>
        </div>
      </div>

      {/* TryMe call-to-action */}
      <TryMe />
    </div>
  </div>
)

export default SocialProofSection
