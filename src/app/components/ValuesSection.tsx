import React from 'react'
import ValueCard, { ValueContent } from './ui/ValueCard'

const values = [
	{
		title: 'I Build',
		role: 'A hands-on technology partner',
		content: {
			p: `I specialize in architecting intelligent, data-driven solutions. My focus is on moving beyond standard applications to build systems that leverage data and AI for tangible business impact. I don't just manage projects; I build the foundational data infrastructure and machine learning models that power them.`,
			ul: [
				'architected data-centric products for long-term scalability and real-time insights.',
				'led the implementation of machine learning models for predictive analytics and personalization.',
				'developed and deployed scalable data pipelines on cloud platforms like AWS, Azure, and GCP.',
				'proficient in modern data stacks including Python, SQL, and big data technologies.',
			],
		},
		cta: `Let's Build Together`,
	},
	{
		title: 'I Lead',
		role: 'An executive leader',
		content: {
			p: `I have a 20-year history of scaling teams and businesses by fostering a data-driven culture. My leadership philosophy is centered on empowering teams with the data and tools they need to make smarter decisions, experiment rapidly, and drive growth through clear, measurable KPIs.`,
			ul: [
				'scaled a company to 100+ employees by focusing on data-driven growth metrics.',
				'grew a technical delivery team from 20 to 80 engineers, instilling a culture of data-informed decision-making.',
				'implemented and evangelized the use of data analytics and business intelligence tools across the organization.',
				'directed all business functions with a focus on data-driven financial planning and operational efficiency.',
			],
		},
		cta: 'Explore My Career',
	},
]

const ValuesSection: React.FC = () => (
	<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div className="mx-auto max-w-2xl lg:mx-0">
			<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
				I Build. I Lead.
			</h2>
		</div>
		<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			{values.map((value, idx) => (
				<ValueCard key={idx} {...value} />
			))}
		</div>
	</div>
)

export default ValuesSection
