import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#232b3b] text-gray-100 pt-12 pb-6 px-4 sm:px-8 mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Left: Logo & About */}
        <div className="flex-1 min-w-[220px] flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/Group 22.png" alt="Logo" width={240} height={240} />
           
          </div>
          <p className="text-gray-300 text-sm max-w-xs text-center md:text-left mb-4">
            Trusted gold loan partner. Fast, secure, and transparent service with the best rates and complete peace of mind.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="https://wa.me/917745932004" aria-label="WhatsApp" className="hover:text-yellow-400 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.44.01 1.44 1.03 2.84 1.18 3.04.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
              </svg>
            </a>
            <a href="mailto:hello@goldloancompany.com" aria-label="Mail" className="hover:text-yellow-400 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm16 2.41l-7.29 7.3a1 1 0 0 1-1.42 0L4 6.41V20h16V6.41z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Center: Partners only, no navigation */}
        <div className="flex-1 min-w-[220px] flex flex-col md:items-start items-center justify-center">
          <div className="mb-4 w-full md:w-auto">
            <h3 className="font-bold text-lg mb-2 text-left text-white">Our Partners</h3>
            <div className="flex flex-wrap justify-start md:justify-start gap-4">
              <Image src="/bank1.svg" alt="Bank 1" width={60} height={32} />
              <Image src="/bank2.svg" alt="Bank 2" width={60} height={32} />
              <Image src="/bank3.svg" alt="Bank 3" width={60} height={32} />
            </div>
          </div>
        </div>
        {/* Right: Contact Info */}
        <div id="contact" className="flex-1 min-w-[220px] flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="font-bold text-lg mb-2 text-white">Contact Us</h3>
          <p className="text-base mb-1 text-gray-200">2nd Floor, The Senate Business Center,<br className="hidden sm:block" /> DP Road, Erandwane, Pune - 411038</p>
          <p className="text-base mb-1 text-gray-200">
            Phone: <a href="tel:+919686484086" className="text-yellow-400 underline">+91 9686484086</a>
          </p>
          <p className="text-base text-gray-200">
            Email: <a href="mailto:hello@goldloancompany.com" className="text-yellow-400 underline">hello@goldloancompany.com</a>
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Crestwin Growth LLP. All rights reserved.
      </div>
    </footer>
  );
}
