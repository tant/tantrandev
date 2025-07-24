import { NextResponse } from 'next/server'

const pages = [
  '/',
  '/about',
  '/playbooks',
  '/reach-me',
  '/terms-and-conditions',
  '/policy',
]

export async function GET() {
  const baseUrl = 'https://www.tantran.dev' // Change to your actual domain
  const urls = pages.map(
    (page) => `<url><loc>${baseUrl}${page}</loc></url>`
  ).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
