import Image from "next/image";
import HeroCTA from "./ui/HeroCTA";

export default function HeroSection() {
  return (
    <div className="relative isolate -z-10">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      >
        <div
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 hero-polygon-bg"
        />
      </div>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Technology Leader & Engineering Manager
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Building with Data. Engineering Growth.
              </p>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                I'm Tân, a Ho Chi Minh City-based technology leader specializing in transforming businesses with data-driven strategies and AI-powered solutions. My focus is on moving beyond traditional software to build intelligent systems that unlock new efficiencies and create measurable value. Whether it's architecting scalable data pipelines, implementing machine learning models, or guiding teams to make data-informed decisions, my goal is to deliver not just code, but quantifiable business outcomes.
                <br />This website showcases that unique blend of hands-on technical execution and strategic, data-first thinking.
              </p>
              <div className="mt-8">
                <HeroCTA />
              </div>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                <div className="relative">
                  <Image
                    alt="Tan Tran profile photo 1"
                    src="/page-home/t2.jpg"
                    width={176}
                    height={528}
                    style={{ aspectRatio: '2/3' }}
                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    alt="Tan Tran profile photo 2"
                    src="/page-home/t0.jpg"
                    width={176}
                    height={528}
                    style={{ aspectRatio: '2/3' }}
                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="relative">
                  <Image
                    alt="Tan Tran profile photo 3"
                    src="/page-home/t1.jpg"
                    width={176}
                    height={528}
                    style={{ aspectRatio: '2/3' }}
                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image
                    alt="Tan Tran profile photo 4"
                    src="/page-home/t3.jpg"
                    width={176}
                    height={528}
                    style={{ aspectRatio: '2/3' }}
                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div className="relative">
                  <Image
                    alt="Tan Tran profile photo 5"
                    src="/page-home/t4.jpg"
                    width={176}
                    height={528}
                    style={{ aspectRatio: '2/3' }}
                    className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
