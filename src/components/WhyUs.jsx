import Image from "next/image";

const cards = [
	{
		icon: "/guarantee.png",
		color: "#3b82f6",
		title: "Safe & Secure",
		desc: "Your gold is stored in world-class vaults with 24/7 surveillance and full insurance coverage.",
	},
	{
		icon: "/transparency.png",
		color: "#f59e42",
		title: "Transparent",
		desc: "No hidden charges, no surprises. Clear terms and honest rates.",
	},
	{
		icon: "/15.png",
		color: "#22c55e",
		title: "15-Minute Process",
		desc: "Walk in with your gold and walk out with cash in just 15 minutes.",
	},
	{
		icon: "/chart.png",
		color: "#ef4444",
		title: "Low Interest",
		desc: "Enjoy competitive interest rates and flexible repayment options.",
	},
];

export default function WhyUs() {
	return (
		<section
			id="why"
			className="w-full max-w-7xl mx-auto py-16 px-4 scroll-mt-24"
		>
			<h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">
				Why Choose Us?
			</h2>
			<p className="text-center text-green-700 font-medium mb-12">
				Trusted, transparent, and secure gold loan services for your peace of
				mind.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{cards.map((card) => (
					<div
						key={card.title}
						className="bg-white rounded-2xl shadow-md flex flex-col items-center p-8 transition hover:shadow-lg border-b-4"
						style={{
							borderBottomColor: card.color,
							boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)",
						}}
					>
						<div
							className="mb-6 flex items-center justify-center rounded-xl"
							style={{
								background: card.color + "20",
								width: 64,
								height: 64,
							}}
						>
							<Image
								src={card.icon}
								alt={card.title}
								width={40}
								height={40}
							/>
						</div>
						<h3 className="font-semibold text-2xl text-gray-800 mb-2 text-center">
							{card.title}
						</h3>
						<p className="text-center text-gray-600 text-base leading-relaxed">
							{card.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
