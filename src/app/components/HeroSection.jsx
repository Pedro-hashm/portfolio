"use client";
import React from "react";
import "../styles/HeroSection.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">

            <div className="col-span-7 place-self-center text-center sm:text-left mb-4 mr-4">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-400 to-purple-600 ">
                        Hello, i'm{" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                        'Pedro',
                        3000, 
                        'Full Stack Developer',
                        3000,
                        'Web Developer',
                        3000,
                        'UI/UX Designer',
                        3000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-slate-400 text-base sm:text-lg lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                </p>
                <div>
                    <button className="text-white font-bold rounded-full w-full sm:fit bg-gradient-to-br from-yellow-500 via-pink-400 to-purple-600 px-4 py-4 mr-2 mt-4">
                        Hire me
                    </button>
                    <button className="text-white font-bold rounded-full w-full sm:fit bg-gradient-to-br from-yellow-500 via-pink-400 to-purple-600 px-1 py-1 mr-2 mt-4">
                       <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-4"> Download CV </span>
                    </button>
                </div>
            </div>

            <div className="col-span-5 place-self-center">
                <div className="rounded-full bg-[#181818] w-[400px] h-[400px] relative lg:w-[500px] lg:h-[500px] mt-5 ml-4">
                    <Image
                        src="/images/cat.png"
                        alt="Picture of the author"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </div>
    </section>
  );
}

export default HeroSection;