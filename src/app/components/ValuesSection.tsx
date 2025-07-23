import React from 'react'
import ValueCard, { ValueContent } from './ui/ValueCard'

const values = [
	{
		title: 'I Build',
		role: 'The Hands-On Technology Partner',
		content: {
			p: `I specialize in architecting and delivering robust, scalable technology solutions from the ground up. With deep, hands-on experience across the full software development lifecycle, my focus is on turning complex business requirements into high-impact products. I don't just manage projects; I build them.`,
			ul: [
				'Architected and rebuilt core products for long-term scalability and security.',
				'Led critical technology migrations to modern frameworks like .NET.',
				'Co-developed and launched new enterprise hardware products with client R&D teams.',
				'Proficient in modern stacks including Next.js, Python, TypeScript, and cloud platforms like AWS, Azure, and GCP.',
			],
		},
		cta: `Let's Build Together`,
	},
	{
		title: 'I Lead',
		role: 'The Executive Leader',
		content: {
			p: `I have a 20-year history of building and scaling teams and businesses. My leadership philosophy is centered on creating high-performance environments and driving growth through clear strategy and P&L ownership. I thrive on taking organizations to the next level.`,
			ul: [
				'Scaled a company from zero to over 100 employees and $1M+ in profitable annual revenue.',
				'Grew a technical delivery team from 20 to 80 engineers in just 6 months.',
				'Launched and established a new international subsidiary in the UAE, building a fully operational company from scratch in under a year.',
				'Directed all business functions including financial planning, operations, and talent acquisition.',
			],
		},
		cta: 'Explore My Career',
	},
	{
		title: 'I Invest',
		role: 'The Strategic Partner & Investor',
		content: {
			p: `Beyond technology, I partner with founders and businesses to devise and execute winning strategies. As a founder myself, I understand what it takes to navigate the journey from an idea to a profitable venture, from authoring the business plan to expanding into global markets.`,
			ul: [
				'Founded a technology company and scaled it into a multi-million dollar enterprise with a self-funded model.',
				'Devised the go-to-market strategy that penetrated the high-barrier financial services sector.',
				'Forged strategic partnerships with industry giants like ARAMCO and ADNOC, and key government entities in Dubai.',
				'Successfully expanded business operations into international markets including the USA, Australia, and the GCC.',
			],
		},
		cta: 'Propose a Partnership',
	},
]

const ValuesSection: React.FC = () => (
	<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div className="mx-auto max-w-2xl lg:mx-0">
			<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
				I Build. I Lead. I Invest.
			</h2>
		</div>
		<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
			{values.map((value, idx) => (
				<ValueCard key={idx} {...value} />
			))}
		</div>
	</div>
)

export default ValuesSection
