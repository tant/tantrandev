'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeroSection from './components/HeroSection'
import ValuesSection from './components/ValuesSection'
import SocialProofSection from './components/SocialProofSection'
import BlogSection from './components/BlogSection'
import Header from './components/Header'

export const revalidate = 3600

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <Header />
      <main className="isolate">
        {/* Hero section */}
        <HeroSection />

        {/* Values section */}
        <ValuesSection />

        {/* Social proof section */}
        <SocialProofSection />

        {/* Blog section */}
        <BlogSection />
        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="aspect-5/2 w-full object-cover xl:rounded-3xl"
          />
        </div>
      </main>
    </div>
  )
}
