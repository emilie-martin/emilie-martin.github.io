import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faBitbucket, faCss3Alt, faDocker, faFigma, faGithub, faGitkraken, faGitlab, faGithubSquare, faHtml5, faJava, faJsSquare, faJira, faLinkedin, faNodeJs, faReact, faSass, faUnity } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import "../css/HeroBanner.css";

/* Make hero image animated later */
const HeroBanner = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="heroBannerContainer">
      <div className="hero__text">
        <h1 className="hero__title">
          <Translate>Hello! </Translate>
          <span className="hero__name">{siteConfig.title}</span>
          <Translate> here~</Translate>
        </h1>
        <p className="hero__intro">
          <Translate>
            A Sofware Engineering graduate with experience in web development and a passion for game development.
          </Translate>
        </p>
        <p className="hero__skills">
          <Translate>My skills: </Translate>
          <FontAwesomeIcon icon={faJsSquare} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faNodeJs} />
          <FontAwesomeIcon icon={faAngular} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faSass} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faJava} />
          <p>
            <span className="hero__section"><Translate>See also</Translate></span>
            : C++, Redux, Typescript, , Material UI
          </p>

          <Translate>Software: </Translate>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faGitlab} />
          <FontAwesomeIcon icon={faBitbucket} />
          <FontAwesomeIcon icon={faGitkraken} />
          <FontAwesomeIcon icon={faDocker} />
          <FontAwesomeIcon icon={faJira} />
          <FontAwesomeIcon icon={faFigma} />
          <FontAwesomeIcon icon={faUnity} />
          <p>
            <span className="hero__section"><Translate>See also</Translate></span>
            : Visual Studio, Visual Studio Code, Rider, Concourse, Canva, Jenkins, SonarQube
          </p>
        </p>
        <SocialLinks/>
      </div>
      <div className="hero__image">
        <img src="img/freepik-storyset-developer-coding.png" />
      </div>
    </header>
  );
}

function SocialLinks() {
  return(
    <div className="social__links">
      <span>Other Links:</span>
      <a href="https://www.linkedin.com/in/emilie-martin-1018/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/emilie-martin">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
    </div>
  );
}

export default HeroBanner;