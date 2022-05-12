import Translate from "@docusaurus/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

import "../css/Page.css";

function Others() {
  const [value, setValue] = useState(0);
  const { title, date, descr } = stuff[value];

  return (
    <section className="cool-things content">
      <h2 className="content-title">
        <Translate>Other Neat Things!</Translate>
      </h2>
      <div className="underline"></div>
      <div className="content-center">
        <div className="btn-container">
          {stuff.map((item, index) => {
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
          {
            Object.keys(descr).map((key, index) => {
              return (
                (descr.length != null && descr.length > 0)
                ? <div>
                    <h3>
                      <FontAwesomeIcon className="content-icon" icon={faAngleDoubleRight} />
                      &emsp;{descr[key].position}
                    </h3>
                    <p className="content-date">{descr[key].duration}</p>
                    <div className="content-descr">
                      {Object.values(descr[key].tasks)}
                    </div>
                    {/* {
                      Object.keys(descr[key].tasks).map((k, value) => {
                        <div key={k} className="content-descr">
                          <FontAwesomeIcon className="content-icon" icon={faAngleDoubleRight} />
                          <p>{value}</p>
                        </div>
                      })
                    } */}
                  </div>
                : <div key={index} className="content-descr">
                    <FontAwesomeIcon className="content-icon" icon={faAngleDoubleRight} />
                    <p>{descr[key]}</p>
                  </div>
              );
            })
          }
        </article>
      </div>
    </section>
  );
}

export default Others;

const stuff = [
  {
    title: "Space Concordia",
    date: "January 2019 - June 2022",
    descr: [
      {
        position: "Spacecraft Division - Recruitment Officer",
        duration: "March 2021 - June 2022",
        tasks: {
          1: "Organized, hosted and presented info sessions for students interested in Space Concordia; more specifically the Spacecraft Division. During these presentations, I went over a general overview of the student club, the current project under works, and the various subsystems we have. ",
          2: "Charged with emailing interested members with their intro tasks and answering any questions they had. ",
          3: "Made sure that the completed intro tasks were well received by the appropriate team leads, and forwarded to the internal lead for account creation and the subsequent onboarding steps. ",
        } 
      },
      {
        position: "Spacecraft Division - Internal General Member",
        duration: "May 2020 - June 2022",
        tasks: {
          1: "Helped write, proofread, and edit the Space Concordia's Spacecraft Division official documentation. ",
          2: "Helped translate official texts (internal documentation, sponsorship packages, social media captions). ",
          3: "Created promotional content (infographics, social media posts, graphic design, captions/text) for the Spacecraft Division. ",
        },
      },
      {
        position: "Space Concordia - Logistics and Volunteering Co-coordinator",
        duration: "June 2020 - January 2022",
        tasks: {
          1: "Managed volunteers for outreach events and provided them with all the necessary information they needed. ",
          2: "Created interest forms and managed their responses for both internal and external volunteering events. "
        },
      },
      {
        position: "Space Concordia - Outreach General Member",
        duration: "June 2020 - January 2022",
        tasks: {
          1: "Presented the club and its projects (all divisions) during outreach events meant to increase club visibility. ",
          2: "Interacted with children, students, and industry professionals who had questions about our club and our projects. "
        },
      },
      {
        position: "Spacecast - Podcast Member",
        duration: "March 2021 - June 2022",
        tasks: {
          1: "Was one of the founding members of Space Concordia's podcast initiative. ",
          2: "Was co-host or a real-time observer for podcast episodes, as well as performed preliminary research on episode topics. "
        },
      },
      {
        position: "Spacecraft Division - Command and Data Handling General Member",
        duration: "January 2019 - January 2021",
        tasks: {
          1: "Performed initial research and trade studies for components and technology to be used for the project kick-off. ",
          2: "Discussed flight software architecture and helped write work packages. "
        },
      },
    ],
  },
  {
    title: "Kaye Allen - Alpha and Beta Reader",
    date: "January 2017 - December 2018",
    descr: {
      1: "Read over and commented on drafts of multiple works from Filippino best-selling author Kaye Allen.",
      2: "Beta reader for Words, Fates & Accidents; Laws of Motion & Attraction; and more of her printed works.",
      3: "Alpha reader for some of the works published on her blog, and some yet to be released projects."
    },
  },
];