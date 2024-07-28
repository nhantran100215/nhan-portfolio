/* eslint-disable react/prop-types */
import React, { useId } from 'react';
import './title.scss';
import { variables } from 'src/utils';

const Title = ({ type = 'T1', text, id, ...rest }) => {
  const headerCollection = variables.headerCollection;
  const idDefault = useId();
  return (
    <div
      className="title cursor-pointer"
      ref={(e) => headerCollection.add({ [id || idDefault]: e })}
      {...rest}>
      {!Array.isArray(text) ? (
        <>
          ⚔️
          <p className={`fontSize-${type} custom-header primaryColor`}>{text}</p>
          ⚔️
        </>
      ) : (
        <div className="title-2-color">
          ⚔️
          <p className={`fontSize-${type} custom-header primaryColor`}>{text[0]}</p>
          <p className={`fontSize-${type} custom-header thirdColor`}>{text[1]}</p>
          ⚔️
        </div>
      )}
    </div>
  );
};

export default Title;
