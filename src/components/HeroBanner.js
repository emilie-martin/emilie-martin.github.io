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
        <p className="hero__descr">
          <Translate>
            If you're a bit of a bookworm, a fan of movies (that aren't jumpscare horror), into all types music or simply some light gaming, I'm sure we could find things to talk about for hours!
          </Translate>
        </p>
        <p className="hero__talents">
          <div className="hero__skills">
            <span><Translate>My skills: </Translate></span>
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faJsSquare} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faReact} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faNodeJs} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faAngular} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faCss3Alt} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faSass} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faHtml5} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faJava} />
          </div>
          <p>
            <span className="hero__section"><Translate>See also</Translate></span>
            : C++, Redux, Typescript, , Material UI
          </p>
          <div className="hero__software">
            <span><Translate>Software: </Translate></span>
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faGithub} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faGitlab} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faBitbucket} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faGitkraken} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faDocker} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faJira} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faFigma} />
            <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faUnity} />
          </div>
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
      <span>Links:</span>
      <a href="https://www.linkedin.com/in/emilie-martin-1018/">
        <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faLinkedin} />
      </a>
      <a href="https://github.com/emilie-martin">
        <FontAwesomeIcon viewBox="-100 -50 600 600" icon={faGithubSquare} />
      </a>
    </div>
  );
}

export default HeroBanner;