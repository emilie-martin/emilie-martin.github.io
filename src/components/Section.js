import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

import "../css/Section.css";

const Section = ({index, title, description, link, keywords, image}) => {
  return (
    <article className="section">
      <div className="section-img" onClick={() => window.open(link, "_self")}>
        {image && <img src={useBaseUrl(image)} className="image" />}
        <div className="img-mask"></div>
      </div>
      <div className="section-details">
        <span className="section-index">{(index + 1) < 10 ? "0" + (index+1) : index}.</span>
        <h3>{title}</h3>
        <p className="section-descr">{description}</p>
        <div className="section-keywords">
          {Object.values(keywords).map((item, index) => <span key={index}>{item}</span>)}
        </div>
      </div>
    </article>
  );
};

export default Section;
