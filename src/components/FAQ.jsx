"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
	{
		q: "Is my gold safe with you?",
		a: "Absolutely! Your gold is stored in secure, insured vaults with 24/7 surveillance.",
		icon: "/conversation.png",
		color: "#3b82f6",
	},
	{
		q: "Why should I take a loan from your outlet?",
		a: "We offer the best rates, transparent process, and quick disbursement with no hidden charges.",
		icon: "/conversation.png",
		color: "#f59e42",
	},
	{
		q: "What are your outlet timings?",
		a: "Our outlets are open from 9am to 8pm, all weekdays.",
		icon: "/conversation.png",
		color: "#22c55e",
	},
	{
		q: "Is my gold insured?",
		a: "Yes, your gold is fully insured while in our custody.",
		icon: "/conversation.png",
		color: "#ef4444",
	},
];

export default function FAQ() {
	const [open, setOpen] = useState(null);
	return (
		<section
			id="faq"
			className="w-full max-w-3xl mx-auto py-16 px-4 scroll-mt-24"
		>
			<div className="flex flex-col items-center mb-8">
				<span className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
					<svg
						className="w-8 h-8 text-yellow-500"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4v16m8-8H4"
						/>
					</svg>
				</span>
				<h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">
					Frequently Asked Questions
				</h2>
				<p className="text-center text-green-700 font-medium mb-2">
					Find answers to the most common questions about our gold loan process,
					safety, and benefits.
				</p>
				<p className="text-center text-gray-500 text-base max-w-xl">
					<span className="inline-flex items-center gap-1">
						<svg
							className="w-5 h-5 text-yellow-500"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						Trusted by thousands. Your security is our priority.
					</span>
				</p>
			</div>
			<div className="divide-y divide-gray-200 rounded-2xl bg-white/80 shadow-md overflow-hidden">
				{faqs
					.map((faq, idx) => (
						<button
							key={faq.q}
							className={`w-full flex items-center gap-4 py-6 px-4 text-left transition hover:bg-yellow-50 focus:outline-none ${
								open === idx ? "bg-yellow-50" : ""
							}`}
							onClick={() => setOpen(open === idx ? null : idx)}
							aria-expanded={open === idx}
						>
							<span
								className="flex items-center justify-center rounded-xl"
								style={{
									background: faq.color + "20",
									width: 48,
									height: 48,
								}}
							>
								<Image
									src={faq.icon}
									alt={faq.q}
									width={28}
									height={28}
								/>
							</span>
							<span className="flex-1 font-semibold text-lg text-gray-800">
								{faq.q}
							</span>
							<svg
								className={`w-5 h-5 ml-2 transition-transform ${
									open === idx ? "rotate-180" : ""
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					))
					.map((el, idx) => [
						el,
						open === idx && (
							<div
								key={faqs[idx].q + "-answer"}
								className="px-16 pb-6 text-gray-700 text-base bg-yellow-50 border-l-4 border-yellow-400 animate-fade-in"
							>
								{faqs[idx].a}
							</div>
						),
					])}
			</div>
		</section>
	);
}
