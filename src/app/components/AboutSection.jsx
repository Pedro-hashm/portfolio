"use client";
import React, { useTransition, useState } from 'react';
import Image from "next/image";
import TabButton from './TabButton';

const AboutSection = () => {

    const [tab, setTab] = useState('skills');

    const handleTabChange = (id) => {
        setTab(id);
    }

    return (
        <section>
            <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16">
                <div className="place-self-center md:place-self-start mb-4">
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
                       {/* Menu de Abas */}
                       <div className="flex mb-4 mt-4">
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
                            active={tab === "certifications"}
                            selectTab={() => handleTabChange("certifications")}
                        >
                            Certifications
                        </TabButton>
                        </div>
                        <div className="mt-3 flex">
                            {tab === "skills" && (
                                <div>
                                    <ul className="list-disc ml-4">
                                        <li className="text-white">React</li>
                                        <li className="text-white">Next.js</li>
                                        <li className="text-[#ffffff]">Tailwind CSS</li>
                                        <li className="text-[#ffffff]">Java</li>
                                        <li className="text-[#ffffff]">Python</li>
                                        <li className="text-[#ffffff]">MySQL</li>
                                    </ul>
                                </div>
                            )}
                            {tab === "education" && (
                                <div>
                                    <ul className="list-disc ml-4">
                                        <li className="text-white">Graduando em Analise e Desenvolvimento de Sistema no Instituto Federal de Pernambuco</li>
                                        <li className="text-[#ffffff] mt-2">FrontEnd em JavaScript pelo FAPS na Softex</li>
                                    </ul>
                                </div>
                            )}
                            {tab === "certifications" && (
                                <div>
                                    <ul className="list-disc ml-4">
                                        <li className="text-white">AWS Cloud Practitioner</li>
                                        <li className="text-[#ffffff] mt-2">Curso em Video</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
