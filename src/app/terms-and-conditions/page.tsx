import React from "react";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PolicyPage() {
  return (
    <main className="isolate flex min-h-dvh flex-col pt-14">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
        <Breadcrumbs crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms and Conditions', href: '/terms-and-conditions' }]} />
      </div>
      <div className="grid flex-1 grid-rows-[1fr_auto] overflow-clip grid-cols-[1fr_var(--gutter-width)_minmax(0,var(--container-3xl))_var(--gutter-width)_1fr] [--gutter-width:--spacing(6)] lg:[--gutter-width:--spacing(10)]">
        <div className="col-start-2 row-span-full row-start-1 max-sm:hidden text-gray-950/5 border-x border-x-current bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
        <div className="col-start-4 row-span-full row-start-1 max-sm:hidden text-gray-950/5 border-x border-x-current bg-size-[10px_10px] bg-fixed bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]"></div>
        <div className="col-start-3 row-start-1 max-sm:col-span-full max-sm:col-start-1 px-4 pt-12 sm:px-2 sm:pt-24">
          <h1 className="line-y py-2 text-5xl tracking-tight sm:text-6xl text-pretty">Terms and Conditions</h1>
          <p className="line-y mt-6 max-w-2xl py-2 text-lg/7 font-medium text-pretty text-gray-600">Effective Date: July 1, 2025</p>
          <div className="max-w-2xl py-12 grid grid-cols-1 gap-6 text-sm/7 text-gray-600 [&_strong]:font-semibold [&_strong]:text-gray-950 [&_h2]:text-base/7 [&_h2]:font-semibold [&_h2]:text-gray-950 [&_h3]:font-semibold [&_h3]:text-gray-950 [&_a]:font-semibold [&_a]:text-gray-950 [&_a]:underline [&_a]:decoration-sky-400 [&_a]:underline-offset-4 [&_a]:hover:text-sky-500 [&_li]:relative [&_li]:before:absolute [&_li]:before:-top-0.5 [&_li]:before:-left-6 [&_li]:before:text-gray-300 [&_li]:before:content-[&quot;▪&quot;] [&_ul]:pl-9 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border-4 [&_pre]:border-gray-950 [&_pre]:bg-gray-900 [&_pre]:p-4 [&_pre]:text-white [&_pre]:outline-1 [&_pre]:-outline-offset-5 [&_pre]:outline-white/10 [&_pre_code]:bg-gray-900 [&_code]:not-in-[pre]:font-medium [&_code]:not-in-[pre]:text-gray-950 [&_code]:not-in-[pre]:before:content-[&quot;\`&quot;] [&_code]:not-in-[pre]:after:content-[&quot;\`&quot;]">
            <h2 className="line-y py-2">1. Agreement to Terms</h2>
            <p>Welcome to my personal website. These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Tan Tran ("I", "me", "my"), concerning your access to and use of this website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).</p>
            <p>You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.</p>
            <h2 className="line-y py-2">2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is my proprietary property. All source code, databases, functionality, software, website designs, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by me or licensed to me, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of Vietnam, foreign jurisdictions, and international conventions.</p>
            <p>The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without my express prior written permission.</p>
            <h2 className="line-y py-2">3. User-Generated Contributions</h2>
            <p>The Site provides you with the opportunity to submit or post content, including but not limited to text for the "Reach Me" form, questions for the "Ask Me" feature, and business descriptions for the "Explore My Strategic Fit" feature (collectively, "Contributions").</p>
            <p>By submitting Contributions, you represent and warrant that:</p>
            <ul>
              <li>Your Contributions are not false, inaccurate, or misleading.</li>
              <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
              <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
              <li>Any Contribution you transmit may be treated as non-confidential and non-proprietary. By submitting Contributions, you grant me an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, display, and distribute such Contributions for the purposes of operating and promoting the Site.</li>
            </ul>
            <p>I have the right, in my sole and absolute discretion, to remove or edit any Contributions at any time and for any reason, without notice.</p>
            <h2 className="line-y py-2">4. Prohibited Activities</h2>
            <p>You may not access or use the Site for any purpose other than that for which I make the Site available. As a user of the Site, you agree not to:</p>
            <ul>
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from me.</li>
              <li>Use the Site to advertise or offer to sell goods and services.</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
              <li>Use the Site as part of any effort to compete with me or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            </ul>
            <h2 className="line-y py-2">5. Third-Party Websites and Content</h2>
            <p>The Site may contain links to other websites ("Third-Party Websites") as well as articles, text, and other content originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by me, and I am not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site.</p>
            <h2 className="line-y py-2">6. Disclaimers and Limitation of Liability</h2>
            <h3 className="line-y py-2">A. General Disclaimer</h3>
            <p>The Site is provided on an "as-is" and "as-available" basis. You agree that your use of the site and my services will be at your sole risk. To the fullest extent permitted by law, I disclaim all warranties, express or implied, in connection with the site and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
            <h3 className="line-y py-2">B. Disclaimer for AI-Generated Content</h3>
            <p>The "Explore My Strategic Fit" feature utilizes generative artificial intelligence (AI) to provide strategic analysis based on user input. The content generated by this feature ("AI Content") is for informational and illustrative purposes only.</p>
            <p>I make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the AI Content. The AI Content is not intended to constitute professional, financial, or strategic advice. Any reliance you place on such information is therefore strictly at your own risk.</p>
            <p>You should not act or refrain from acting on the basis of any AI Content without seeking independent professional advice.</p>
            <h3 className="line-y py-2">C. Limitation of Liability</h3>
            <p>In no event will I or my agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if I have been advised of the possibility of such damages.</p>
            <h2 className="line-y py-2">7. Governing Law</h2>
            <p>These Terms shall be governed by and defined following the laws of Vietnam. Tan Tran and yourself irrevocably consent that the courts of Vietnam shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            <h2 className="line-y py-2">8. Modifications and Interruptions</h2>
            <p>I reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at my sole discretion without notice. I also reserve the right to modify or discontinue all or part of the Site without notice at any time.</p>
            <p>I cannot guarantee the Site will be available at all times. I may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors.</p>
            <h2 className="line-y py-2">9. Contact Us</h2>
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact me at: <a href="mailto:me@tantran.dev">me@tantran.dev</a></p>
          </div>
        </div>
        
      </div>
    </main>
  );
}
