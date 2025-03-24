import React from 'react'
import Image from 'next/image';

const ProjectCard = ({ imageUrl, title, description }) => {
    return (
        <div className="flex flex-col p-2">

            <div>
                <Image
                    src={imageUrl}
                    width={400}
                    height={300}
                >
                </Image>
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
