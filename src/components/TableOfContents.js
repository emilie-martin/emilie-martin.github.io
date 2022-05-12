import Translate from "@docusaurus/Translate";
import React from "react";

import TOCSection from "./Section";

import "../css/TableOfContents.css"

const TableOfContents = () => {
  return (
    <div className="toc">
      <h1 className="toc-contents">
        <Translate>Contents</Translate>
      </h1>
      <div className="underline"></div>
      <div className="section-center toc-center">
        {content.map(
          ({index, title, description, link, keywords, image}) => (
            <TOCSection
              index={index}
              title={title}
              description={description}
              link={link}
              keywords={keywords}
              image={image}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TableOfContents;

const content = [
  {
    index: 0,
    title: "Work Experience",
    description: "A rundown of the work experience I have acquired over the years. Over the course of my internships at world-class companies such as Desjardins Group and Stingray Music, I earned praise from my peers and contributed significantly to their projects.",
    link: "/experience",
    keywords: ["front-end", "react", "redux", "typescript", "angular"],
    image: "img/toc/work-experience-mosaic.png",
  },
  {
    index: 1,
    title: "Game Development",
    description: "A few of the cool game development projects I have worked on. Game development has always been an interest of mine and it's been great to see some of my contributions come to life! Definitely a challenge at times, but very rewarding to see once finalized.",
    link: "/game-dev",
    keywords: ["game dev", "unity", "2D", "2.5D"],
    image: "img/toc/game-dev-mosaic-storyset-amico.png",
  },
  {
    index: 2,
    title: "Projects",
    description: "A few neat projects I have worked on that I thought worth mentioning. From implementing functionality to services in web developement to dabbling in VR, I hope to keep working on cool projects like these!",
    link: "/projects",
    keywords: ["UI/UX", "VR"],
    image: "img/toc/projects-mosaic-storyset-amico-rafiki.png",
  },
  {
    index: 3,
    title: "Other",
    description: "Other noteworthy things I have done or participated in.",
    link: "/other",
    keywords: ["academics", "student clubs", "volunteering"],
    image: "img/toc/other-mosaic-storyset-rafiki-cuate.png",
  },
];