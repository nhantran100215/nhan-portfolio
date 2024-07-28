import { useLoaderData, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './ProjectPage.scss';
import { Carousel } from 'src/LibsComponent';

const ProjectPage = () => {
  const location = useLocation();
  const data = useLoaderData();
  const [project, setproject] = useState({});
  useEffect(() => {
    if (location) {
      setproject(data);
      window.scrollTo(0, 0);
    }
  });

  const TechnicalSheet = () => {
    let technicalSheetArr = [];
    let i = 0;
    let techs = project.techs;
    for (let techField in techs) {
      technicalSheetArr[i] = (
        <div className="tech-field" key={i}>
          <p className="tech-field-name">{techField}:</p>
          <ul>
            {techs[techField]?.map((tech, index) => (
              <li key={index}>{tech.tech}</li>
            ))}
          </ul>
        </div>
      );
      i++;
    }

    return technicalSheetArr;
  };

  return (
    <div className="ProjectPage">
      <h1>{project?.projectName}</h1>
      {project?.url && (
        <a
          className="button-hover-2-layer cursor-pointer button-access"
          href={project.url}
          target="_blank"
          rel="noreferrer">
          VISIT THE WEBSITE
        </a>
      )}
      {/* carousel */}
      <Carousel images={project?.image?.listImage} />
      {/* <div style={{ height: "400vh" }}></div> */}
      <h2>About this project</h2>
      <div className="division-line"></div>
      {project?.AboutProject?.map((about, index) => (
        <p key={index}>{about}</p>
      ))}
      <h2>Technical Sheet</h2>
      <div className="division-line"></div>
      <TechnicalSheet />
      {project?.resources && (
        <div className="resources">
          <h2>Resources</h2>
          <div className="division-line"></div>
          <ul>
            {project?.resources.map((resource, index) => (
              <li key={index}>
                <span>{resource.openSentence}</span>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  {resource.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
