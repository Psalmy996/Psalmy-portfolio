import React from "react";
import Project1Image from "../assets/project1.png";
import Project2Image from "../assets/project2.png";
import Project3Image from "../assets/project3.png";

const projects = [
  {
    id: 1,
    name: "E-commerce Website",
    technologies: "React, JavaScript, CSS",
    image: Project1Image,
    github: "https://github.com/Psalmy996",
  },
  {
    id: 2,
    name: "Place-order App",
    technologies: "React, JavaScript, CSS",
    image: Project2Image,
    github: "https://github.com/Psalmy996",
  },
  {
    id: 3,
    name: "Contact App with Form Validation",
    technologies: "React, JavaScript, CSS",
    image: Project3Image,
    github: "https://github.com/Psalmy996",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-purple-500 text-white py-2 px-4 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
