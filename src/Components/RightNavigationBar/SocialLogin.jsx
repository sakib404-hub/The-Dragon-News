import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-md text-center max-w-sm mx-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">Login With</h2>
            <div className="space-y-3">
                {/* Google Button */}
                <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-200 hover:bg-[#DB4437] hover:text-white">
                    <FaGoogle className="text-lg" />
                    Login with Google
                </button>

                {/* Github Button */}
                <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-200 hover:bg-[#24292e] hover:text-white">
                    <FaGithub className="text-lg" />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
