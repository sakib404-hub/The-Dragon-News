import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-md text-center max-w-sm mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-5 border-b pb-2">
                Find Us On
            </h2>

            <div className="space-y-3">
                {/* Facebook */}
                <button className="flex items-center justify-start gap-3 w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-200 group hover:bg-[#1877F2] hover:text-white">
                    <FaFacebook className="text-2xl text-[#1877F2] group-hover:text-white transition-all duration-200" />
                    <span>Facebook</span>
                </button>

                {/* Twitter (X) */}
                <button className="flex items-center justify-start gap-3 w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-200 group hover:bg-black hover:text-white">
                    <FaXTwitter className="text-2xl text-black group-hover:text-white transition-all duration-200" />
                    <span>Twitter (X)</span>
                </button>

                {/* Instagram */}
                <button className="flex items-center justify-start gap-3 w-full py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-200 group hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:text-white">
                    <FaInstagram className="text-2xl text-pink-600 group-hover:text-white transition-all duration-200" />
                    <span>Instagram</span>
                </button>
            </div>
        </div>
    );
};

export default FindUs;
