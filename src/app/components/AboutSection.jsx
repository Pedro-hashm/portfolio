"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';
import { motion } from 'framer-motion';

const AboutSection = () => {

    const [tab, setTab] = useState('skills');

    const handleTabChange = (id) => {
        setTab(id);
    }

    return (
        <section id='about'>
            <div className="md:grid md:grid-cols-2 gap-8 items-start py-2 px-4 xl:gap-16 sm:py-16">
                <div className="place-self-center md:place-self-start mb-4 mt-7">
                    <Image
                        src="/images/code.png"
                        alt="Codes and more codes"
                        width={900}
                        height={900}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col grid-col-2">
                    <h1 className="text-4xl mb-4 sm:text-5xl lg:text-6xl font-extrabold">About me</h1>
                    <p className="text-white text-base sm:text-lg lg:text-xl">I’m a passionate developer who loves turning ideas into functional and engaging digital experiences. With a strong foundation in full-stack development, I enjoy creating intuitive interfaces, optimizing performance, and tackling new challenges. Always learning, always building, let’s create something amazing!</p>
                       {/* Menu de Abas */}
                       <div className="flex mb-4">
                        <TabButton
                            active={tab === "skills"}
                            selectTab={() => handleTabChange("skills")}
                        >
                            Skills
                        </TabButton>
                        <TabButton
                            active={tab === "education"}
                            selectTab={() => handleTabChange("education")}
                        >
                            Education
                        </TabButton>
                        <TabButton
                            active={tab === "experience"}
                            selectTab={() => handleTabChange("experience")}
                        >
                            Experience
                        </TabButton>
                        </div>
                        <div className="mt-3 flex">
                            {tab === "skills" && (
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <ul className="list-disc ml-4">
                                        <li className="text-white">React</li>
                                        <li className="text-white">Next.js</li>
                                        <li className="text-[#ffffff]">Java</li>
                                        <li className="text-[#ffffff]">Python</li>
                                        <li className="text-[#ffffff]">MySQL</li>
                                    </ul>
                                </motion.div>
                            )}
                            {tab === "education" && (
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <ul className="list-disc ml-4">
                                        <li className="text-white">Undergraduate student in Systems Analysis and Development at IFPE, Brazil.</li>
                                    </ul>
                                </motion.div>
                            )}
                            {tab === "experience" && (
                                <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                >
                                    <ul className="list-disc ml-4">
                                    <li className="text-white">Shopify store developing and setting</li>
                                    <li className="text-white">Tiktok, Facebook and Google ads campaign/pixel setting</li>
                                    <li className="text-white">SEO Tags Optmization</li>
                                    </ul>
                                </motion.div>
                            )}
                        </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
