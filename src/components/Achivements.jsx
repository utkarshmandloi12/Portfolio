'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
	{
		title: 'Collaborative Editing',
		description:
			'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center'>
				Collaborative Editing
			</div>
		),
	},
	{
		title: 'Real time changes',
		description:
			'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
		content: (
			<div className='h-full w-full  flex items-center justify-center '>
				<Image
					src='/linear.webp'
					width={300}
					height={300}
					className='h-full w-full object-cover'
					alt='linear board demo'
				/>
			</div>
		),
	},
	{
		title: 'Version control',
		description:
			"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center '>
				Version control
			</div>
		),
	},
	{
		title: 'Running out of content',
		description:
			"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
		content: (
			<div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center '>
				Running out of content
			</div>
		),
	},
];
export default function Achivements() {
	return (
		<div className='max-w-7xl mx-auto' id='Achivements'>
			<h1 className='text-4xl font-bold mb-12 mt-16 '>
				Highlights From my Journey
			</h1>
			<StickyScroll content={content} />
		</div>
	);
}
