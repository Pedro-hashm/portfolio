import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectSection() {
  return (
    <section>

        <div className="md:grid md:grid-cols-1 sm:py-16 grid place-items-center px-4 mt-2 mb-4"> 
          <h1 className="text-4xl mb-4 sm:text-3xl lg:text-4xl font-extrabold ">Meus Projetos</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <ProjectCard
            imageUrl="https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg"
            title="Projeto 1"
            description="Descrição do projeto 1"
            >
          </ProjectCard>
          <ProjectCard
            imageUrl="https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg"
            title="Projeto 1"
            description="Descrição do projeto 1"
            >
          </ProjectCard>
          <ProjectCard
            imageUrl="https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg"
            title="Projeto 1"
            description="Descrição do projeto 1"
            >
          </ProjectCard>
          <ProjectCard
            imageUrl="https://abovepromotions.com/wp-content/uploads/400x300-ph.jpg"
            title="Projeto 1"
            description="Descrição do projeto 1"
            >
          </ProjectCard>
          
  
        </div>

    </section>
  )
}

export default ProjectSection
