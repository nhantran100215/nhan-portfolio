import React from 'react';
import { Title } from 'src/LibsComponent';
import { variables } from 'src/utils';
import FilterProject from './FilterProject';
import './Projects.scss';
import ProjectBanner from './ProjectBanner';
import ProjectPagination from './ProjectPagination';

const Projects = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, position } = props.title;
  const headerCollection = variables.headerCollection;
  return (
    <div className="Projects prevent-select">
      <Title
        text={['My', 'Projects']}
        id={id}
        onClick={() => {
          const headerRef = headerCollection.getId(id);
          headerRef.scrollIntoView({
            behavior: 'smooth',
            block: position
          });
        }}
      />
      {/* filter */}
      <FilterProject />
      <ProjectBanner />
      <ProjectPagination />
    </div>
  );
};

export default Projects;
