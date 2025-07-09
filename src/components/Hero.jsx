import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-8 md:pl-32 md:pr-20 pt-32 pb-8 bg-white">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
          <span className="text-gray-900">Simple,
Fast & Secure</span>{" "}
          <span className="text-yellow-500">Gold Loans </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-7 max-w-xl">
          Gold loans in <span className="text-blue-500">15 minutes.</span>{" "} Secure storage. No hidden fees.
        </p>
        <a
          href="#schemes"
          className="inline-block px-8 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold shadow hover:bg-yellow-500 transition mb-4 md:mb-0 border border-yellow-300"
        >
          Go to Schemes
        </a>
      </div>
      <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
        <Image
          src="/vector.png"
          alt="Gold Loan Vector"
          width={420}
          height={420}
          className="w-80 h-80 md:w-[28rem] md:h-[28rem] object-contain drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
