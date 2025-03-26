"use client";
import React from 'react'
import ProjectCard from './ProjectCard'
import { useState } from 'react';

/* Dados dos Projetos (Pra adicionar um projeto é só modificar aqui) */
const projects = [
  {
    imageUrl: "https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg",
    title: "Projeto 1 (Feito)",
    description: "Descrição do projeto 1",
    alt: "Imagem do projeto 1",
    projectLink: "https://github.com/Pedro-hashm",
    tags: ["Completed"]
  },
  {
    imageUrl: "https://i.imgur.com/gtPdIEr.png",
    title: "Pagliacci",
    description: "A cloth store website",
    alt: "Pagliacci",
    projectLink: "https://pagliacci.com.br",
    tags: ["Active"]
  },
  {
    imageUrl: "https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg",
    title: "Projeto 3 (Ativo)",
    description: "Descrição do projeto 3",
    alt: "Imagem do projeto 3",
    projectLink: "https://github.com/Pedro-hashm",
    tags: ["Active"]
  },
  {
    imageUrl: "https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg",
    title: "Projeto 4 (Feito)",
    description: "Descrição do projeto 4",
    alt: "Imagem do projeto 4",
    projectLink: "https://github.com/Pedro-hashm",
    tags: ["Completed"]
  }
];

const ProjectSection = () => {

  const [activeTag, setActiveTag] = useState("All");
  
  const handleTabChange = (tag) => {
    setActiveTag(tag);
  }

  const filteredProjects = activeTag === "All"
    ? projects
    : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section>

      <div className="md:grid md:grid-cols-1 grid place-items-center px-4 mt-2"> 
        <h1 className="text-4xl mb-4 sm:text-3xl lg:text-4xl font-extrabold ">Meus Projetos</h1>
      </div>
      
      <div className="flex flex-row justify-center gap-3 px-4 mt-6 mb-4">
        {["All", "Active", "Completed"].map(tag => (
          <button 
            key={tag}
            className={`border-2 pt-2 pb-2 pr-5 pl-5 border-[#4e5568] rounded-full hover:border-white ${
              activeTag === tag ? "border-purple-500 text-white" : "text-[#c0c0c0]"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            imgTitle={project.alt}
            projectLink={project.projectLink}
          />
        ))}
      </div>

    </section>
  );
}

export default ProjectSection
