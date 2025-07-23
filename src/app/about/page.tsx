'use client'

import React from 'react'
import Header from '../components/Header'

const AboutPage: React.FC = () => (
  <>
    <Header />
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700">Nội dung giới thiệu sẽ được cập nhật sau.</p>
    </main>
  </>
)

export default AboutPage
