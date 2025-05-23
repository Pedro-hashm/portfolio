"use client";
import React from "react";
import "../styles/HeroSection.css";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
        <motion.div 
        className="grid grid-cols-1 sm:grid-cols-12"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        >

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
                From cutting-edge e-commerce platforms to creative web and game development, I bring technical expertise and creative problem-solving to the table. Whether you need a high-performing online store or a custom digital solution, I’m here to transform your vision into reality—with speed, precision, and style.                </p>
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
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[450px] lg:h-[450px] mt-5 ml-4">
                    <Image
                        src="https://i.imgur.com/CpLWTp7.jpeg"
                        alt="Picture of the author"
                        className="absolute transform object-cover rounded-full border-4 border-[#181818]"
                        layout="fill" // Preenche o círculo
                    />
                </div>
            </div>

        </motion.div>
    </section>
  );
}

export default HeroSection;