import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-10 bg-white border-t border-gray-200 text-[#2d2d2d] text-center mt-8 shadow-inner">
      <div className="mb-6">
        <h3 className="font-bold text-2xl mb-4">Our Partners</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/bank1.svg" alt="Bank 1" width={70} height={36} />
          <Image src="/bank2.svg" alt="Bank 2" width={70} height={36} />
          <Image src="/bank3.svg" alt="Bank 3" width={70} height={36} />
        </div>
      </div>
      <div id="contact" className="mt-8">
        <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
        <p className="text-lg">2nd Floor, The Senate Business Center, DP Road, Erandwane, Pune - 411038</p>
        <p className="text-lg">
          Phone: +91 9686484086 | Email: <a href="mailto:hello@goldloancompany.com" className="text-[#bfa14a] underline">hello@goldloancompany.com</a>
        </p>
      </div>
      <div className="mt-6 text-base">
        &copy; {new Date().getFullYear()} Gold Loan Company. All rights reserved.
      </div>
    </footer>
  );
}
