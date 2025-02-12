import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "To-Do List",
      description:
        "A To-Do List application built using Python's Tkinter module, allowing users to add and delete tasks.",
      link: "https://github.com/Tsahu874/To_Do_List",
    },
    {
      title: "Number Tracker",
      description:
        "A Phone Number Tracer that lets users input a phone number to retrieve its timezone, carrier, and registered region.",
      link: "https://github.com/Tsahu874/Number-Tracker",
    },
    {
      title: "Student Management System",
      description:
        "An Education Management System enabling faculty to add, delete, and update student details efficiently.",
      link: "https://github.com/Tsahu874/student_management",
    },
    {
      title: "Weather App",
      description:
        "Provides real-time weather updates. Users can input a city name to receive temperature, weather conditions, wind speed, and humidity.",
      link: "https://github.com/Tsahu874/Weather_App",
    },
    {
      title: "Guess the Number",
      description:
        "A web-based number guessing game where players try to guess a secret number between 1 and 20, with feedback and high score tracking.",
      link: "https://github.com/Tsahu874/Guess_My_Number",
    },
    {
      title: "Theme Clock",
      description:
        "A stylish clock app with dark and light modes, displaying the current time and date with rotating hands.",
      link: "https://github.com/Tsahu874/Theme_clock",
    },
    {
      title: "Drum Kit",
      description:
        "An interactive web drum kit allowing users to play sounds by clicking buttons or pressing keys.",
      link: "https://github.com/Tsahu874/Drum_Kit-",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website featuring product listings, a shopping cart, and checkout functionality.",
      link: "https://github.com/Tsahu874/E_commerce",
    },
  ];

  return (
    <section className="projects-container">
      <h2>Portfolio</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
