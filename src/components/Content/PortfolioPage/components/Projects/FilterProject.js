import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CONST_VARI } from 'src/utils';
import { addOrRemove, clear, selectFilterProject } from 'src/Redux/reducer/filterSlice';

const FilterProject = () => {
  const filterProject = useSelector(selectFilterProject);
  const dispatch = useDispatch();

  const RenderField = () => {
    let listFieldInterface = [];
    let i = 0;
    for (let field in CONST_VARI.TECHNOLOGIES) {
      listFieldInterface[i++] = (
        <div key={i}>
          <h5 className="filterProject-field">{field}</h5>
          {CONST_VARI.TECHNOLOGIES[field].map((ele, index) => (
            <span
              key={index}
              className={`filterProject-keyword cursor-pointer button-hover-2-layer
                            ${filterProject.filter((checkSelect) => checkSelect.id === ele.id).length ? 'filterProject-select' : ''}
                            `}
              onClick={() => dispatch(addOrRemove(ele))}>
              {ele.tech}
            </span>
          ))}
        </div>
      );
    }
    return listFieldInterface;
  };

  return (
    <div className="filterProject">
      <RenderField />
      <div
        className="filterProject-keyword cursor-pointer button-hover-2-layer"
        style={{ marginTop: '40px' }}
        onClick={() => dispatch(clear())}>
        Clear
      </div>
    </div>
  );
};
export default FilterProject;
