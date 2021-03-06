import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import "../css/Page.css";

function Projects() {
  const [value, setValue] = useState(0);
  const { title, date, descr, techStack, images } = projects[value];

  return (
    <section className="projects content">
      <h2 className="content-title">
        <Translate>Projects</Translate>
      </h2>
      <div className="underline"></div>
      <div className="content-center">
        <div className="btn-container">
          {projects.map((item, index) => {
            return (
              <button 
                key={index}
                onClick={() => setValue(index)}
                className={`content-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <article className="content-info">
          <h3>{title}</h3>
          <p className="content-date">{date}</p>
          {Object.keys(descr).map((key, index) => {
            return (
              <div key={index} className="content-descr">
                <FontAwesomeIcon className="content-icon" icon={faAngleDoubleRight} />
                <p>{descr[key]}</p>
              </div>
            );
          })}
          <p>
            <Translate>Tech Stack: </Translate>
            <div className="content-tech-stack">
              {Object.values(techStack).map((item, index) => <span key={index}>{item}</span>)}
            </div>
          </p>
          <div className="content-images">
            {Object.values(images).map((url) => <img src={useBaseUrl(url)} className="content-image" />)}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;

const projects = [
  {
    title: "Hacksmith Industries - VR",
    date: "August 2021 - April 2022",
    descr: {
      1: "In collaboration with Hacksmith Industries, we were tasked with creating a Virtual Reality replica of their workshop studio. Through this project, they hoped to increase and enhance their relationship and interactions with their millions of fans and followers by giving them insight and sneak peeks on how their projects came to life.",
      2: "In this virtual space, Hacksmith Industries would be able to present their projects to their fans, and have them interact their projects. Having uploaded 3D SolidWork models of their projects beforehand, visitors would be able to manipulate, dismantle, and interact with their projects in a new and dynamic matter.",
      3: "This project was implemented to be cross-platform and multiplayer. As such, users could join from a computer or a VR headset, see other present visitors, walk around the virtual workshop and interact with the displayed projects.",
    },
    techStack: ["Hacksmith Industries", "Virtual Reality", "Unity", "Cross-platform", "Multiplayer"],
    images: ["img/hacksmith/menus.png", "img/hacksmith/object-interactions.png", "img/hacksmith/multiplayer.png"],
  },
  {
    title: "Bike King",
    date: "January 2021 - April 2021",
    descr: {
      1: "Bike King was designed as an Enterprise Resource Planning (ERP) application that would simplify inventory management for cycling companies. It acts as a hub for companies to easily manage the manufacturing and distribution of their products.",
      2: "A registered user will be able to notify a company that their bicycle model or part is out of stock. If the need is important enough, companies may be prompted to order these parts or models from their manufacturers, and have assembled and shipped to the appropriate wholesale/retail stores.",
      3: "Companies are able to manage and track their inventories through this ERP, such that they can order new parts and have them shipped to their manufacturers or retail/wholesale branches, order the creation of new bicycle models to their factories, as well as track orders, trends, and inventories through their clients' orders.",
    },
    techStack: ["Typescript", "Node.js", "Express", "MySQL", "Docker", "Material UI", "Figma"],
    images: ["img/bike-king/overview.png"],
  },
  {
    title: "Xeroxstagram",
    date: "January 2020 - April 2020",
    descr: {
      1: "Xeroxstagram was a base project started with the goal of achieving the following basic features: account creation, account following, account statistics (followers, following, post count), post creation, user feed, post commenting and liking.",
      2: "This was one of the first full-scale projects I worked on; implementing everything from backend to frontend with my teammates and colleagues.",
    },
    techStack: ["JavaScript", "React", "Java", "Spring Boot", "Hibernate", "Maven", "MySQL", "Mockito"],
    images: ["img/xeroxstagram/user-feed.png", "img/xeroxstagram/post-editing.png", "img/xeroxstagram/user-settings.png"],
  },
];