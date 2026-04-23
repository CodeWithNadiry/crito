import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navColumns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers"],
    },
    {
      title: "Support",
      links: ["Documentation", "Contact", "Status"],
    },
  ];

  const bottomLinks = ["Privacy Policy", "Terms of Service", "Imprint"];

  return (
    <footer className="bg-[#141920] text-white px-4 md:px-10 lg:px-16 xl:px-25 py-12 flex flex-col gap-10">
      {/* Top Section */}
      <div
        className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
        gap-10 md:gap-12
      "
      >
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
              C
            </div>
            <span className="text-xl font-semibold">Crito</span>
          </div>

          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Voice AI assistant platform for hotels and hospitality businesses
          </p>
        </div>

        {/* Links */}
        {navColumns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h4 className="text-base font-semibold">{col.title}</h4>

            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <hr className="border-white/10" />

      {/* Bottom Section */}
      <div
        className="
        flex flex-col md:flex-row
        gap-6 md:gap-0
        items-center md:justify-between
      "
      >
        {/* Left links */}
        <div
          className="
          flex flex-wrap
          items-center justify-center md:justify-start
          gap-4 md:gap-6
          text-sm text-white/50
        "
        >
          {bottomLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}

          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center text-[9px]">
              i
            </div>
            <span>GDPR Compliant</span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-white text-[13px]" />
          </a>

          <a
            href="#"
            className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            <FaXTwitter className="text-white text-[13px]" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-white/40">
        © 2026 Crito AI. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
