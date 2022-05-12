import Translate from "@docusaurus/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import "../css/Page.css";

function WorkExperience() {
  const [value, setValue] = useState(0);
  const { company, position, date, descr, techStack } = experience[value];

  return (
    <section className="work-experience content">
      <h2 className="content-title">
        <Translate>Work Experience</Translate>
      </h2>
      <div className="underline"></div>
      <div className="content-center">
        <div className="btn-container">
          {experience.map((item, index) => {
            return (
              <button 
                key={index}
                onClick={() => setValue(index)}
                className={`content-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="content-info">
          <h3>{company}</h3>
          <h4>{position}</h4>
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
        </article>
      </div>
    </section>
  );
}

export default WorkExperience;

const experience = [
  {
    company: "Desjardins Group - Internship",
    position: "Analyst Programmer",
    date: "May 2021 - August 2021",
    descr: {
      1: "Refactored and improved code structure for an entire project",
      2: "Implemented new features and functionality that would directly enhance the user's experience",
      3: "Supported the team with maintenance and bug fixes",
      4: "Worked remotely during the COVID-19 pandemic",
    },
    techStack: ["Angular", "TypeScript", "Concourse", "Jenkins", "Windows"],
  },
  {
    company: "Stingray Music - Internship",
    position: "Fullstack Developer",
    date: "May 2020 - August 2020",
    descr: {
      1: "Helped migrate and remap an old website to a newer iteration/release",
      2: "Implemented coupon functionality and validation for one of our product stores",
      3: "Supported the team with maintenance and bug fixes",
      4: "Worked remotely during the COVID-19 pandemic",
    },
    techStack: ["JavaScript", "React-Redux", "Jest", "Docker", "Concourse", "Windows"],
  },
  {
    company: "Stingray Music - Internship",
    position: "Fullstack Developer",
    date: "September 2019 - December 2019",
    descr: {
      1: "Created a website template (with basic functionality and company styling) that would simplify the implementation of other product-specific websites",
      2: "Implemented reusable components, which would go on to save development time",
      3: "Used the Prometheus API to collect metrics for internal analytics",
      4: "Wrote unit tests and integration tests using Jest"
    },
    techStack: ["JavaScript", "React-Redux", "Jest", "Docker", "Concourse", "Ubuntu"],
  },
];