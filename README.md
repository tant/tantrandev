# Personal Brand Platform – tantrandev

A modern, professional personal profile website built with Next.js 15, TypeScript, and Tailwind CSS 4. The platform is designed to unify your online presence, showcase your expertise in three key roles (leader, tech partner, investor), and create effective channels for new career, freelance, and partnership opportunities.

## 🚀 Project Goals
- Build a reputable online personal brand to attract senior job opportunities.
- Create an effective channel for finding freelance tech projects.
- Establish a digital headquarters for strategic partnerships and investments.

## ✨ Key Features
- **Home Page:**
  - Hero section: Personal introduction, philosophy, and profile image.
  - Values section: Three role cards (“I Build”, “I Lead”, “I Invest”) with detailed descriptions and CTAs.
  - Social proof: Partner logos, press quotes, achievement highlights, and call-to-action.
  - Blog section: Displays 3 latest posts from [blog.tantran.dev](https://blog.tantran.dev) with image, title, excerpt, author, and date.
  - Decorative image: Large, beautiful illustration at the bottom of the page.
- **About Page:**
  - Hero section: Personal story and leadership philosophy.
  - My Journey Timeline: Visual timeline of career milestones (Builder, Leader, Global Strategist).
  - Philosophy: Leadership and growth mindset, building sustainable value.
  - Personal side: Images and story about Ironman/triathlon as a metaphor for business.
  - Gemini AI (MyDigitalTwin): AI-powered Q&A about the profile and journey.
- **Blog:** Blog link in the main navigation leads directly to [blog.tantran.dev](https://blog.tantran.dev) (hosted on Hashnode).
- **Reach Me:**
  - Contact form with message, email/phone options, and preferred contact method.
  - Instantly schedule a meeting via integrated Calendly widget.
- **Playbooks:** (TBD) – This section is planned for future development.
- **Spam Protection:** Basic anti-spam/bot mechanism for all public forms.
- **Google Analytics:** Integrated for traffic and behavior tracking.
- **Responsive UI:** Fully responsive, accessible, and optimized for Core Web Vitals.

## 🛠️ Tech Stack
- [Next.js 15](https://nextjs.org/) (App Router, API Routes)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (hosting & serverless functions)
- [Brevo](https://www.brevo.com/) (email service)
- [Hashnode API](https://hashnode.com/) (blog integration)
- Google Analytics

## 👤 Target Users
- **Senior Recruiters/Headhunters**: Quickly validate leadership and impact.
- **Potential Clients**: Assess technical breadth and reliability for projects.
- **Partners/Investors**: Evaluate strategic fit and business-technical mindset.

## 📝 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or yarn install / pnpm install / bun install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```
3. **Open** [http://localhost:3000](http://localhost:3000) to view the app.

4. **Environment variables:**
   - Sao chép file `.env.sample` thành `.env`:
     ```bash
     cp .env.sample .env
     ```
   - Sau đó, mở file `.env` và nhập các giá trị phù hợp cho từng biến môi trường theo hướng dẫn trong file.

5. **Deploy:**
   - Deploy instantly on [Vercel](https://vercel.com/new).

## 🗺️ Roadmap (MVP)
- [x] Project setup: Next.js 15, TypeScript, Tailwind CSS 4
- [x] Common layout & navigation (Home, Blog, About, Reach Me, Playbooks)
- [x] Static Home structure with all sections
- [x] About page: timeline, philosophy, AI Q&A
- [x] Reach Me contact form (Brevo integration) and Calendly widget
- [x] Latest blog posts from Hashnode
- [x] Blog navigation link
- [x] Playbooks section (TBD)
- [x] Google Analytics integration
- [x] Responsive, accessible, and optimized UI

## 📈 Success Metrics
- Number of successful "Reach Me" form submissions
- Click-through rates on "3 Roles" CTAs
- Bounce rate on homepage

## 🤝 Contributing
Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📬 Contact
For questions, feedback, or partnership opportunities, use the "Reach Me" form on the homepage or email: [me@tantran.dev](mailto:me@tantran.dev)

---

> Built with ❤️ using Next.js, TypeScript, and Tailwind CSS. Hosted on Vercel.
