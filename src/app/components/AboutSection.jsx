"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";

const AboutSection = () => {

    const [showTab, setTab] = useState('skills');

    return (
        <section>
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
                <div className="place-self-center mb-4">
                    <Image
                        src="/images/about.png"
                        alt="About the author"
                        width={300}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col grid-col-2">
                    <h1 className="text-4xl mb-4 sm:text-5xl lg:text-6xl font-extrabold">Sobre nos</h1>
                    <p className="text-white text-base sm:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="mt-8">
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b hover:border-b-4 p-1 border-purple-500">Skills</span>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b hover:border-b-4 p-1 border-purple-500">Education</span>
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b hover:border-b-4 p-1 border-purple-500">Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
