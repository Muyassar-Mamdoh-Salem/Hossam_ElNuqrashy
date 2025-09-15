import React from "react";
import { FaFacebookF, FaTiktok, FaPhoneAlt } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">تواصل مع حسام</h2>
        <p className="text-gray-600 mb-8">
          يمكنك التواصل مع حسام من خلال وسائل التواصل الاجتماعي أو الهاتف
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/v/1FxbC1LkVt/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center bg-blue-50 p-6 rounded-xl hover:shadow-md hover:bg-blue-100 transition"
          >
            <FaFacebookF className="text-blue-600 text-4xl mb-3" />
            <span className="font-medium text-gray-700">Facebook</span>
          </a>

          {/* TikTok */}
          <a
            href="https://vt.tiktok.com/ZSDr8VReW/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center bg-gray-50 p-6 rounded-xl hover:shadow-md hover:bg-gray-100 transition"
          >
            <FaTiktok className="text-black text-4xl mb-3" />
            <span className="font-medium text-gray-700">TikTok</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+201141321315"
            className="flex flex-col items-center bg-green-50 p-6 rounded-xl hover:shadow-md hover:bg-green-100 transition"
          >
            <FaPhoneAlt className="text-green-600 text-4xl mb-3" />
            <span className="font-medium text-gray-700">+20 123 456 7890</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
