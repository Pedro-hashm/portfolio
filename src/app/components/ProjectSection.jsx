"use client";
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


/* Dados dos Projetos (Pra adicionar um projeto é só modificar aqui) */
const projects = [
  {
    imageUrl: "https://i.imgur.com/6JNdGHw.png",
    title: "WhatPy",
    description: "WhatPy is a Python-based automation tool for sending WhatsApp messages using customtkinter, making it easy to interact with contacts programmatically. 🚀",
    alt: "Imagem do projeto 4",
    projectLink: "https://labpei-ifpe-paulista.github.io/jogo-confederacao-equador/",
    tags: ["Completed"]
  },
  {
    imageUrl: "https://i.imgur.com/gtPdIEr.png",
    title: "Pagliacci",
    description: "Pagliacci is an online fashion store specializing in high-quality men's clothing and accessories, inspired by Italian elegance and style. 👔✨",
    alt: "Pagliacci Home",
    projectLink: "https://pagliacci.com.br",
    tags: ["Active"]
  },
  {
    imageUrl: "https://i.imgur.com/iGeXT8R.png",
    title: "Naturagro ERP (Desktop Java Application)",
    description: "Marktplace is a Java-based desktop ERP application designed to manage and streamline business operations, focusing on inventory, sales, and financial processes for agricultural businesses.",
    alt: "Login Screen Naturagro",
    projectLink: "https://github.com/Naturagro/marktplace",
    tags: ["Completed"]
  },
  {
    imageUrl: "https://i.imgur.com/wfBBbnw.png",
    title: "Revolution of 1824 - A Digital Journey Through the Confederation of Ecuador",
    description: "A game that immerses players in the historical events of the Confederation of Ecuador, allowing them to explore this pivotal moment in Brazilian history in a fun and engaging way.",
    alt: "Imagem do projeto 4",
    projectLink: "https://labpei-ifpe-paulista.github.io/jogo-confederacao-equador/",
    tags: ["Active"]
  },
  {
    imageUrl: "https://i.imgur.com/ByqcY7Z.png",
    title: "React Portfolio Website",
    description: "A personal portfolio website built with React, showcasing projects, skills, and experiences. It features a modern design and responsive layout for an optimal user experience.",
    alt: "Imagem do projeto 4",
    projectLink: "https://github.com/Pedro-hashm/portfolio",
    tags: ["Active"]
  },
  {
    imageUrl: "https://i.imgur.com/xkddUrA.png",
    title: "Jhonny Jazz",
    description: "Jhonny Jazz is an e-commerce platform offering a variety of products, from home goods to electronics. It focuses on providing high-quality, practical items designed to enhance everyday life, featuring easy navigation, promotions, and customer satisfaction guarantees.",
    alt: "JhonnyJazz Home",
    projectLink: "https://jhonnyjazz.com.br",
    tags: ["Completed"]
  },
];

const ProjectSection = () => {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const [activeTag, setActiveTag] = useState("All");
  
  const handleTabChange = (tag) => {
    setActiveTag(tag);
  }

  const filteredProjects = activeTag === "All"
    ? projects
    : projects.filter(project => project.tags.includes(activeTag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>

      <div className="md:grid md:grid-cols-1 grid place-items-center px-4 mt-2"> 
        <h1 className="text-4xl mb-4 sm:text-2xl lg:text-3xl font-extrabold ">My Projects</h1>
      </div>
      
      <div className="flex flex-row justify-center gap-3 px-4 mt-6 mb-4">
        {["All", "Active", "Completed"].map(tag => (
          <button 
            key={tag}
            className={`border-2 pt-2 pb-2 pr-5 pl-5 border-[#4e5568] text-1xl rounded-full hover:border-white ${
              activeTag === tag ? "border-purple-500 text-white" : "text-[#c0c0c0]"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 px-4" >
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            className="flex flex-wrap justify-center gap-6"
            key={`${activeTag}-${index}`}
            transition={{ duration: 0.5, delay: index * 0.4 }}
            >
              <ProjectCard
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                imgTitle={project.alt}
                projectLink={project.projectLink}
              />
          </motion.li>
        ))}
      </ul>

    </section>
  );
}

export default ProjectSection
