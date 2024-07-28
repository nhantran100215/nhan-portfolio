/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjectPagination, setNumPage } from 'src/Redux/reducer/paginationSlice';
import { CONST_VARI } from 'src/utils';

const ProjectPagination = () => {
  const projectPagination = useSelector(selectProjectPagination);
  const dispatch = useDispatch();

  const PagiantionPointsComp = useCallback(() => {
    const paginationPointArr = [];
    let paginationLength = Math.ceil(
      CONST_VARI.PROJECTS.length / projectPagination.amountBannerPerPage
    );
    // let paginationLength = CONST_VARI.PROJECTS.length / projectPagination.amountBannerPerPage + 1;
    for (let i = 0; i < paginationLength; i++) {
      paginationPointArr[i] = (
        <div
          className={`paginationPoint ${projectPagination.numBannerPage === i ? 'choosed' : 'unchoosed'} cursor-pointer`}
          key={i}
          onClick={() => {
            dispatch(setNumPage(i));
          }}></div>
      );
    }
    return paginationPointArr;
  }, [projectPagination.amountBannerPerPage, projectPagination.numBannerPage]);
  return <div className="projectPagination">{PagiantionPointsComp()}</div>;
};

export default ProjectPagination;
