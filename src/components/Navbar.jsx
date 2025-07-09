"use client";

import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navLinks = [
	{ href: "#", label: "Home" },
	{ href: "#why", label: "Why Us" },
	{ href: "#how", label: "How It Works" },
	{ href: "#schemes", label: "Schemes" },
	{ href: "#faq", label: "FAQ's" },
	{ href: "#contact", label: "Contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<nav className="w-full bg-white/90 backdrop-blur-lg px-4 sm:px-8 xl:px-24 py-4 flex items-center fixed top-0 z-50 border-b border-gray-100 shadow-sm">
			<a
				href="#"
				className="flex items-center gap-2 focus:outline-none flex-shrink-0"
			>
				<Image
					src="/Group 22.png"
					alt="Logo"
					width={180}
					height={50}
					className="h-12 w-auto object-contain"
					priority
				/>
			</a>
			<div className="flex-1 flex items-center justify-end lg:justify-center">
				<ul className="hidden lg:flex gap-8 text-gray-800 font-medium items-center">
					{navLinks.map((link) => (
						<li key={link.href} className="relative group">
							<a
								href={link.href}
								className="py-2 px-1 transition-all duration-200 hover:text-yellow-500 focus-visible:text-yellow-600 relative"
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full group-focus-visible:w-full" />
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="flex items-center gap-4 ml-4">
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<button type="button" className="lg:hidden bg-transparent border-0 p-2 rounded-full hover:bg-yellow-50 focus-visible:ring-2 focus-visible:ring-yellow-400 transition">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</SheetTrigger>
					<SheetContent
						side="right"
						className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-lg"
					>
						<nav className="flex flex-col gap-4 mt-8">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									onClick={() => setOpen(false)}
									className="px-4 py-3 text-gray-800 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors focus-visible:text-yellow-600 focus-visible:bg-yellow-100"
								>
									{link.label}
								</a>
							))}
						</nav>
					</SheetContent>
				</Sheet>
				<a
					href="#schemes"
					className="hidden lg:inline-flex items-center justify-center px-6 py-2 rounded-full bg-slate-700 text-white font-semibold shadow-lg hover:bg-slate-800 transition border border-slate-700"
					style={{ minWidth: 120 }}
				>
					Apply Now
				</a>
			</div>
		</nav>
	);
}