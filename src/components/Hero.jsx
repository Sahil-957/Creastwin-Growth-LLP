import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 pt-24 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
          <span className="bg-yellow-400 text-transparent bg-clip-text">
          Gold{" "}
          </span>
          Loans 
           {" "}Made Simple,<br className="hidden md:inline" /> Fast & Secure
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Gold loans in 
          <span className="bg-blue-600 text-transparent bg-clip-text">
            {" "}15 minutes.
            </span> Secure storage. No hidden fees.
        </p>
        <a
          href="#schemes"
          className="inline-block px-10 py-4 rounded-full bg-slate-700 text-white font-semibold shadow-lg hover:bg-slate-800 transition mb-4 md:mb-0"
        >
          Go to Schemes
        </a>
      </div>
      <div className="flex-1 flex items-center justify-center mb-10 md:mb-0">
        <Image
          src="/globe.svg"
          alt="Banking Vector"
          width={400}
          height={400}
          className="w-72 h-72 md:w-[26rem] md:h-[26rem] object-contain drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
}
