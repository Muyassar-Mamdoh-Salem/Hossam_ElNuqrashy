import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTiktok, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* القسم الأول - اللوجو والمقدمة */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Hossam Photography</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Capturing your most beautiful moments with creativity, love, and passion.  
            Your story deserves to be unforgettable.
          </p>
        </div>

        {/* القسم الثاني - روابط سريعة */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/aboutme" className="hover:text-white transition">About</Link>
            <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
            <Link to="/contactme" className="hover:text-white transition">Contact</Link>
          </nav>
        </div>

        {/* القسم الثالث - تواصل معنا */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="tel:+201234567890"
              className="flex items-center gap-2 hover:text-green-500 transition-colors"
            >
              <FaPhoneAlt /> 01141321315
            </a>
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fhossam.photograpy%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExZDZZZ1NtSm9qNnJPZHlHVgEeFppj3Wmduv9lSlvW-DdQoimy2YQf9n1qB_jJBHLzNpppn66obJrgsoOAQrQ_aem_7RA9v5Rat0YfdnldeVNHgA&h=AT1D8gLP1v63rHBaH-BqEMDYbq2BtOC9mk8wOgK1Z682X3NJcLKR42b5pJpgPrlC71kqs_vk892E_gdIvlm5StqzQcbq9dwEZ3Hg5yyLSsisVorQGvRUqPdKzxGt_RaEpM7HLA"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* النص السفلي */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
       
         <a className="text-white" href="https://www.facebook.com/MuyassarMamdoh">Eng:Muyassar Mamdoh</a> <span className="text-red-200">2025 جميع الحقوق محفوظة </span>

      </div>
    </footer>
  );
};

export default Footer;
