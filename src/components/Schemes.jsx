import Image from "next/image";

const schemes = [
	{
		icon: "/scheme1.svg",
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
		icon: "/scheme2.svg",
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
		icon: "/scheme3.svg",
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
			<div className="flex flex-col lg:flex-row items-center justify-center gap-8">
				{schemes.map((scheme, idx) => (
					<div
						key={scheme.title}
						className={`relative bg-white rounded-2xl shadow-lg flex flex-col items-center px-10 py-10 transition hover:shadow-2xl border border-transparent ${
							scheme.popular ? "z-10 scale-105" : ""
						}`}
						style={{ minWidth: 340, maxWidth: 370 }}
					>
						{scheme.popular && (
							<span
								className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-tr-2xl rounded-bl-2xl"
								style={{ transform: "translateY(-50%)" }}
							>
								Popular
							</span>
						)}
						<span
							className={`block mb-2 font-semibold ${scheme.titleColor} text-lg text-center`}
						>
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
						<span className="text-gray-400 text-base mb-4 -mt-2">
							interest rate
						</span>
						<Image
							src={scheme.icon}
							alt={scheme.title}
							width={180}
							height={100}
							className="mb-4"
						/>
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
				))}
			</div>
		</section>
	);
}
