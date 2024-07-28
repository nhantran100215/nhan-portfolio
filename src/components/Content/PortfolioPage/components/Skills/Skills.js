/* eslint-disable react/prop-types */
import { Title } from 'src/LibsComponent';
import { variables } from 'src/utils';
import React from 'react';
import './Skills.scss';

const Skills = ({ title }) => {
  const headerCollection = variables.headerCollection;
  return (
    title && (
      <div>
        <Title
          text={['My', 'skills']}
          id={title.id}
          onClick={() => {
            const headerRef = headerCollection.getId(title.id);
            console.log(headerCollection.getId(title.id), headerCollection.get(), title);
            headerRef.scrollIntoView({ behavior: 'smooth', block: title.position });
          }}
        />
      </div>
    )
  );
};

export default Skills;
