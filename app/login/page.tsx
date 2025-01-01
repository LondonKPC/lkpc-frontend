'use client'

import React, { useState } from 'react';
import churchBackground from '@/images/church.jpg';
import Image from 'next/image';
import user from '@/images/user.svg'
import eye from '@/images/eye.svg'
import eye_slash from '@/images/eye_slash.svg'

function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="flex justify-center items-center w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(61, 72, 104, 0.6), rgba(61, 72, 104, 255) 50%),
            url(${churchBackground.src})`,
        }}
      >
        {/* Login box */}
        <div className="w-4/6 text-white">
          <h1 className="mb-4 text-xl font-bold text-gray-400">Sign In</h1>
          <h1 className="mb-4 text-3xl font-bold">Welcome to LondonKPC EM</h1>
            {/* Email Input Box */}
            <div className="relative py-2 sm:w-96 h-20">
                <input
                type="text"
                placeholder="Username"
                className="bg-transparent shadow-xl rounded-xl w-full h-full p-4 flex justify-center items-center"
                />
                <div className="absolute inset-y-0 right-3 sm:left-80 w-8 flex items-center justify-center pointer-events-none">
                <Image className="" src={user} alt="" width={25} height={25} />
                </div>
            </div>

            {/* Password Input Box */}
            <div className="relative py-2 sm:w-96 h-20">
                <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent shadow-xl rounded-xl w-full h-full p-4 flex justify-center items-center"
                />
                <button
                className="absolute inset-y-0 right-3 sm:left-80 w-8 flex items-center justify-center"
                onClick={togglePasswordVisibility}
                >
                <Image className="" src={showPassword ? eye : eye_slash}  alt="" width={25} height={25} />
                </button>
            </div>

            {/* Create Account Button */}
            <div className="flex items-center justify-center bg-blue-400 w-full sm:w-96 h-16 rounded-xl my-4 cursor-pointer">
                <button className="w-full sm:w-auto">Log in</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
