"use client";
import React from 'react'
import Image from 'next/image';
import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { EyeIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ imageUrl, imgTitle, title, description, projectLink }) => {

    return (
        <div className="flex flex-col p-2">

            <div className="relative group w-full sm:w-[280px] sm:h-[280px] lg:w-[400px] lg:w-[400px] overflow-hidden rounded-lg">
                <Image
                    src={imageUrl}
                    alt={imgTitle}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                >
                </Image>

                <div className="flex flex-row absolute inset-0 bg-black bg-opacity-0 gap-2 place-content-center hover:bg-opacity-70 transition duration-300 group/card">
                    <button>
                        <div 
                            className="group/btn p-3 border-2 border-[#c0c0c0] rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:border-white"
                            onClick={() => window.open(projectLink, "_blank")}
                            >
                            <CodeBracketIcon className="group/btn w-8 h-8 text-[#c0c0c0] group-hover/btn:text-white transition duration-300"/>
                        </div>
                    </button>
                    <button>
                        <div className="group/btn p-3 border-2 border-[#c0c0c0] rounded-full opacity-0 group-hover:opacity-100 transition duration-300 hover:border-white">
                            <EyeIcon className="group/btn w-8 h-8 text-[#c0c0c0] group-hover/btn:text-white transition duration-300"/>
                        </div>
                    </button>
                </div>

            </div>

            <div className="mt-2 ml-3">
                <h1 className="text-2xl font-bold text-white">
                    {title}
                </h1>
                <p className="text-[#5f5f5f] mt-2">
                    {description}
                </p>
            </div>

        </div>
    )
} 

export default ProjectCard
