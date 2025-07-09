"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const schemes = [
	{
		color: "#3b82f6",
		title: "Sam Vriddhi",
		rate: 12,
		features: [
			"6-months tenure",
			"High per gram rate",
			"Monthly interest payment",
		],
		titleColor: "text-blue-500",
	},
	{
		color: "#22c55e",
		title: "Maha Vriddhi",
		rate: 15,
		features: [
			"6-months tenure",
			"High per gram rate",
			"Flexible interest payment",
		],
		titleColor: "text-green-500",
		popular: true,
	},
	{
		color: "#f59e42",
		title: "Vriddhi Super",
		rate: 18,
		features: [
			"6-months tenure",
			"Highest per gram rate",
			"Flexible interest payment",
		],
		titleColor: "text-orange-500",
	},
];

export default function Schemes() {
	const [current, setCurrent] = useState(0);
	const scrollRef = useRef(null);
	const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

	const handlePrev = () => {
		setCurrent((prev) => (prev === 0 ? schemes.length - 1 : prev - 1));
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				left:
					(current - 1 < 0
						? schemes.length - 1
						: current - 1) *
						scrollRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	};
	const handleNext = () => {
		setCurrent((prev) => (prev === schemes.length - 1 ? 0 : prev + 1));
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				left:
					(current + 1 === schemes.length
						? 0
						: current + 1) *
						scrollRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	};

	return (
		<section
			id="schemes"
			className="w-full max-w-7xl mx-auto py-16 px-4 scroll-mt-24 bg-gradient-to-br from-gray-50 to-gray-100"
		>
			<h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">
				Loan Schemes
			</h2>
			<p className="text-center text-orange-600 font-medium mb-12">
				Loan Schemes that suit your needs
			</p>
			{/* Mobile Carousel */}
			<div className="block lg:hidden relative">
				<div className="flex overflow-x-hidden transition-all duration-500 w-full" ref={scrollRef}>
					{schemes.map((scheme, idx) => (
						<div
							key={scheme.title}
							className={`min-w-full flex-shrink-0 flex flex-col items-center px-4 py-10 transition-all duration-500 ${current === idx ? "opacity-100 scale-100" : "opacity-60 scale-95"}`}
							style={{ display: current === idx ? "flex" : "none" }}
						>
							<div className="relative w-full flex flex-col items-center">
								<div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-8 w-full max-w-xs mx-auto" style={{ minHeight: 420 }}>
									{scheme.popular && (
										<span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-tr-2xl rounded-bl-2xl" style={{ transform: "translateY(-50%)" }}>
											Popular
										</span>
									)}
									<span className={`block mb-2 font-semibold ${scheme.titleColor} text-lg text-center`}>
										{scheme.title}
									</span>
									<div className="flex items-end justify-center mb-2">
										<span className="text-5xl font-bold text-gray-800 mr-1">{scheme.rate}</span>
										<span className="text-2xl text-gray-400 font-bold" style={{ lineHeight: 1 }}>%</span>
									</div>
									<div className="flex flex-col items-center justify-center">
										<span className="text-gray-400 text-base mb-4 -mt-2 text-center">interest rate</span>
										{/* Modern SVG design instead of image */}
										<div className="flex justify-center mb-4">
											<Image src="/file.png" alt="Gold icon" width={40} height={40} className="mx-auto" />
										</div>
										<ul className="text-gray-600 text-base mb-6 text-center space-y-1">
											{scheme.features.map((f) => (
												<li key={f}>{f}</li>
											))}
										</ul>
										<div className="flex justify-center w-full">
											<a href="#contact" className="border border-orange-500 text-orange-500 font-bold py-2 px-8 rounded-full transition hover:bg-orange-50 text-center" style={{ boxShadow: "0 2px 8px 0 rgba(245,158,66,0.08)" }}>
												Get Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Arrows */}
				<button onClick={handlePrev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 rounded-full p-2 shadow hover:bg-yellow-100">
					<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
				</button>
				<button onClick={handleNext} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 rounded-full p-2 shadow hover:bg-yellow-100">
					<svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
				</button>
				{/* Dots */}
				<div className="flex justify-center gap-2 mt-4">
					{schemes.map((_, idx) => (
						<button key={idx} onClick={() => setCurrent(idx)} className={`w-3 h-3 rounded-full ${current === idx ? "bg-orange-500" : "bg-gray-300"} transition`} aria-label={`Go to slide ${idx + 1}`}></button>
					))}
				</div>
			</div>
			{/* Desktop Grid */}
			<div className="hidden lg:flex flex-row items-center justify-center gap-8">
				{schemes.map((scheme, idx) => (
					<div
						key={scheme.title}
						className={`relative bg-white rounded-2xl shadow-lg flex flex-col items-center px-10 py-10 transition hover:shadow-2xl border border-transparent ${scheme.popular ? "z-10 scale-105" : ""}`}
						style={{ minWidth: 340, maxWidth: 370 }}
					>
						{scheme.popular && (
							<span className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-tr-2xl rounded-bl-2xl" style={{ transform: "translateY(-50%)" }}>
								Popular
							</span>
						)}
						<span className={`block mb-2 font-semibold ${scheme.titleColor} text-lg text-center`}>
							{scheme.title}
						</span>
						<div className="flex items-end justify-center mb-2">
							<span className="text-5xl font-bold text-gray-800 mr-1">
								{scheme.rate}
							</span>
							<span
								className="text-2xl text-gray-400 font-bold"
								style={{ lineHeight: 1 }}
							>
								%
							</span>
						</div>
						<div className="flex flex-col items-center justify-center">
							<span className="text-gray-400 text-base mb-4 -mt-2 text-center">
								interest rate
							</span>
							{/* Modern SVG design instead of image */}
							<div className="flex justify-center mb-4">
								<Image src="/file.png" alt="Gold icon" width={40} height={40} className="mx-auto" />
							</div>
							<ul className="text-gray-600 text-base mb-6 text-center space-y-1">
								{scheme.features.map((f) => (
									<li key={f}>{f}</li>
								))}
							</ul>
							<a
								href="#contact"
								className="border border-orange-500 text-orange-500 font-bold py-2 px-8 rounded-full transition hover:bg-orange-50"
								style={{
									boxShadow: "0 2px 8px 0 rgba(245,158,66,0.08)",
								}}
							>
								Get Now
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
