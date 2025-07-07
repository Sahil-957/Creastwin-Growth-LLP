"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
	{
		q: "Is my gold safe with you?",
		a: "Absolutely! Your gold is stored in secure, insured vaults with 24/7 surveillance.",
		icon: "/lock.svg",
		color: "#3b82f6",
	},
	{
		q: "Why should I take a loan from your outlet?",
		a: "We offer the best rates, transparent process, and quick disbursement with no hidden charges.",
		icon: "/eye.svg",
		color: "#f59e42",
	},
	{
		q: "What are your outlet timings?",
		a: "Our outlets are open from 9am to 8pm, all weekdays.",
		icon: "/clock.svg",
		color: "#22c55e",
	},
	{
		q: "Is my gold insured?",
		a: "Yes, your gold is fully insured while in our custody.",
		icon: "/percent.svg",
		color: "#ef4444",
	},
];

export default function FAQ() {
	const [open, setOpen] = useState(null);
	return (
		<section id="faq" className="w-full max-w-7xl mx-auto py-16 px-4">
			<h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">
				Frequently Asked Questions
			</h2>
			<p className="text-center text-green-700 font-medium mb-12">
				Find answers to the most common questions about our gold loan process,
				safety, and benefits.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{faqs.map((faq, idx) => (
					<div
						key={faq.q}
						className={`bg-white rounded-2xl shadow-md flex flex-col items-center p-8 transition hover:shadow-lg border-b-4 ${
							open === idx ? "ring-2 ring-[#bfa14a]" : ""
						}`}
						style={{
							borderBottomColor: faq.color,
							boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)",
						}}
					>
						<div
							className="mb-6 flex items-center justify-center rounded-xl"
							style={{
								background: faq.color + "20",
								width: 64,
								height: 64,
							}}
						>
							<Image
								src={faq.icon}
								alt={faq.q}
								width={40}
								height={40}
							/>
						</div>
						<button
							className="font-semibold text-2xl text-gray-800 mb-2 text-center focus:outline-none"
							onClick={() => setOpen(open === idx ? null : idx)}
							aria-expanded={open === idx}
						>
							{faq.q}
						</button>
						{open === idx && (
							<p className="text-center text-gray-600 text-base leading-relaxed mt-2">
								{faq.a}
							</p>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
