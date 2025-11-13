import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PolicyPage() {
  return (
    <main className="isolate flex min-h-dvh flex-col pt-14">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
        <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Policy', href: '/policy' }]} />
      </div>
      <div className="grid flex-1 grid-rows-[1fr_auto] overflow-clip grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--container-3xl))_var(--gutter-width)_1fr] [--gutter-width:--spacing(6)] lg:[--gutter-width:--spacing(10)]">
        <div className="col-start-2 row-span-full row-start-1 max-sm:hidden text-gray-950/5 border-x border-x-current bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
        <div className="col-start-4 row-span-full row-start-1 max-sm:hidden text-gray-950/5 border-x border-x-current bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
        <div className="col-start-3 row-start-1 max-sm:col-span-full max-sm:col-start-1 px-4 pt-12 sm:px-2 sm:pt-24">
          <h1 className="line-y py-2 text-5xl tracking-tight sm:text-6xl text-pretty">Privacy Policy</h1>
          <p className="line-y mt-6 max-w-2xl py-2 text-lg/7 font-medium text-pretty text-gray-600">Effective Date: July 1, 2025</p>
          <div className="max-w-2xl py-12 grid grid-cols-1 gap-6 text-sm/7 text-gray-600 [&_strong]:font-semibold [&_strong]:text-gray-950 [&_h2]:text-base/7 [&_h2]:font-semibold [&_h2]:text-gray-950 [&_h3]:font-semibold [&_h3]:text-gray-950 [&_a]:font-semibold [&_a]:text-gray-950 [&_a]:underline [&_a]:decoration-sky-400 [&_a]:underline-offset-4 [&_a]:hover:text-sky-500 [&_li]:relative [&_li]:before:absolute [&_li]:before:-top-0.5 [&_li]:before:-left-6 [&_li]:before:text-gray-300 [&_li]:before:content-[&quot;▪&quot;] [&_ul]:pl-9 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border-4 [&_pre]:border-gray-950 [&_pre]:bg-gray-900 [&_pre]:p-4 [&_pre]:text-white [&_pre]:outline-1 [&_pre]:-outline-offset-5 [&_pre]:outline-white/10 [&_pre_code]:bg-gray-900 [&_code]:not-in-[pre]:font-medium [&_code]:not-in-[pre]:text-gray-950 [&_code]:not-in-[pre]:before:content-[&quot;\`&quot;] [&_code]:not-in-[pre]:after:content-[&quot;\`&quot;]">
            <h2 className="line-y py-2">1. Introduction</h2>
            <p>Welcome to my personal website. I am Tan Tran ("I", "me", "my"), an executive leader and technology professional based in Ho Chi Minh City, Vietnam. I am committed to protecting your privacy and handling your data in an open and transparent manner.</p>
            <p>This Privacy Policy explains how I collect, use, process, and safeguard your information when you visit my website. This policy is designed to comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
            <p>Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
            <h2 className="line-y py-2">2. Information I Collect</h2>
            <p>I may collect information about you in a variety of ways. The information I may collect on the Site includes:</p>
            <h3 className="line-y py-2">A. Personal Data You Provide to Me</h3>
            <p>I collect personally identifiable information (PII) that you voluntarily provide to me when you use contact forms or interactive features on the site. This includes:</p>
            <ul>
              <li><strong>Contact Information:</strong> Your name and email address when you use the "Reach Me" form.</li>
              <li><strong>User-Generated Content:</strong> Questions you submit through the "Ask Me" form or business descriptions you provide to the "Explore My Strategic Fit" feature.</li>
            </ul>
            <h3 className="line-y py-2">B. Data Collected Automatically</h3>
            <p>When you access the Site, I may automatically collect certain information about your device and browsing activity. This information is primarily needed to maintain the security and operation of our Site, and for my internal analytics and reporting purposes. This includes:</p>
            <ul>
              <li><strong>Log and Usage Data:</strong> IP address, browser type, operating system, pages visited, and timestamps.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> I use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. I use Google Analytics to help analyze how users use the Site.</li>
            </ul>
            <h2 className="line-y py-2">3. How I Use Your Information</h2>
            <ul>
              <li>To Respond to Your Inquiries: To respond to your questions and comments submitted via the "Reach Me" and "Ask Me" forms.</li>
              <li>To Provide Interactive Features: To process the business descriptions you provide to the "Explore My Strategic Fit" feature and generate a strategic analysis via the Google Gemini API.</li>
              <li>To Improve My Website: To understand how users interact with the Site, to monitor and analyze usage and trends, and to improve the user experience.</li>
              <li>To Maintain Security: To protect the Site from spam, abuse, and other malicious activity.</li>
            </ul>
            <h2 className="line-y py-2">4. Legal Basis for Processing (for GDPR)</h2>
            <p>If you are from the European Economic Area (EEA), my legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which I collect it.</p>
            <ul>
              <li><strong>Consent:</strong> I rely on your consent to process information submitted through contact forms and to use non-essential cookies. You have the right to withdraw your consent at any time.</li>
              <li><strong>Legitimate Interests:</strong> I process data for analytics and security based on my legitimate interest in understanding how my Site is used and keeping it secure, provided that such interests are not overridden by your data protection interests.</li>
            </ul>
            <h2 className="line-y py-2">5. Data Retention</h2>
            <p>I will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. I will retain and use your data to the extent necessary to comply with my legal obligations (for example, if I am required to retain your data to comply with applicable laws), resolve disputes, and enforce my legal agreements and policies. Data collected for analytics purposes via Google Analytics is retained according to Google's policies.</p>
            <h2 className="line-y py-2">6. Sharing Your Information with Third Parties</h2>
            <p>I do not sell your personal information. I may share your information with third-party service providers that perform services for me or on my behalf. These include:</p>
            <ul>
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior.</li>
              <li><strong>Google (Gemini API):</strong> To process the business descriptions you submit and generate strategic analysis. The content you submit is sent to Google's API for this purpose.</li>
              <li><strong>Brevo:</strong> To process and deliver emails from the "Reach Me" and "Ask Me" forms.</li>
              <li><strong>Vercel:</strong> My website is hosted on Vercel, which may collect log data as part of its hosting services.</li>
            </ul>
            <h2 className="line-y py-2">7. International Data Transfers</h2>
            <p>Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. My service providers (Google, Brevo, Vercel) are primarily based in the United States. I will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.</p>
            <h2 className="line-y py-2">8. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <h3 className="line-y py-2">A. Rights under GDPR (for EEA residents)</h3>
            <ul>
              <li>The right to access, update or delete the information I have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object to processing.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
              <li>The right to lodge a complaint with a Data Protection Authority.</li>
            </ul>
            <h3 className="line-y py-2">B. Rights under CCPA (for California residents)</h3>
            <ul>
              <li>The right to know what personal information is being collected about you.</li>
              <li>The right to request deletion of your personal information.</li>
              <li>The right to opt-out of the sale of personal information. I do not sell personal information.</li>
              <li>The right to non-discrimination for exercising your consumer privacy rights.</li>
            </ul>
            <p>To exercise any of these rights, please contact me using the details provided in the "Contact Me" section below.</p>
            <h2 className="line-y py-2">9. "Do Not Sell My Personal Information" Notice for California Consumers</h2>
            <p>Under the CCPA, California consumers have the right to opt-out of the "sale" of their personal information. I do not sell your personal information.</p>
            <h2 className="line-y py-2">10. Children's Privacy</h2>
            <p>This website is not intended for use by children under the age of 13, and I do not knowingly collect personal information from children under 13. If I become aware that I have collected personal information from a child under 13, I will take steps to delete such information.</p>
            <h2 className="line-y py-2">11. Changes to This Privacy Policy</h2>
            <p>I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.</p>
            <h2 className="line-y py-2">12. Contact Me</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact me at: <a href="mailto:me@tantran.dev">me@tantran.dev</a></p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
