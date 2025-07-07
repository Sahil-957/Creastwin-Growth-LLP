import Image from "next/image";

const steps = [
	{
		icon: "/store.svg",
		color: "#3b82f6", // blue
		title: "Visit Jewellery Outlet",
		desc: "Walk into any of the many Vriddhi jewellery outlets in your town to avail Gold loan between 9am to 8pm on all weekdays.",
	},
	{
		icon: "/id-card.svg",
		color: "#f59e42", // orange
		title: "KYC, Documentation",
		desc: "Understand the available loan schemes and complete a quick Aadhar based KYC and documentation process.",
	},
	{
		icon: "/gold-bar.png",
		color: "#22c55e", // green
		title: "Gold Assessment",
		desc: "We will assess the gold ornaments and provide you with the loan amount on the spot in 10-minutes.",
	},
	{
		icon: "/bank.svg",
		color: "#ef4444", // red
		title: "Quick Disbursement",
		desc: "Loan disbursed in Bank account/cash on the spot with the help of Banking partner and available on Vriddhi app.",
	},
];

export default function HowItWorks() {
	return (
		<section id="how" className="w-full max-w-7xl mx-auto py-16 px-4">
			<h2 className="text-4xl font-bold text-[#2d2d2d] text-center mb-2">
				Simple 15-minute Loan Process
			</h2>
			<p className="text-center text-green-700 font-medium mb-12">
				Easy documentation, flexibility of digital and physical repayment options!
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{steps.map((step) => (
					<div key={step.title} className="flex flex-col items-center px-2">
						<div
							className="mb-6 flex items-center justify-center rounded-xl"
							style={{
								background: step.color + "20",
								width: 64,
								height: 64,
							}}
						>
							<Image
								src={step.icon}
								alt={step.title}
								width={40}
								height={40}
							/>
						</div>
						<h3 className="font-semibold text-xl text-gray-800 mb-2 text-center">
							{step.title}
						</h3>
						<p className="text-center text-gray-600 text-base leading-relaxed">
							{step.desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
