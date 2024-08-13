/* eslint-disable react/prop-types */
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef
} from '@react-spring/web';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectFilterProject } from 'src/Redux/reducer/filterSlice';
import { selectProjectPagination, setAmount } from 'src/Redux/reducer/paginationSlice';
import { CONST_VARI } from 'src/utils';
import { defaultPath } from 'src/Routes/Routes';

const calculateAmountSkill = () => {
  if (window.innerWidth > 1000) return 11;
  if (window.innerWidth < 1000 && window.innerWidth > 678) return 9;
  return 6;
};

const Banner = ({ data = [], project = {} }) => {
  //*************************     ANIMATION    ************************************************************ */
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '0px' }
  });

  useEffect(() => {
    if (open)
      springApi.start({
        from: { size: '0' },
        to: { size: '100%' }
      });
    else
      springApi.start({
        from: { size: '0' },
        to: { size: '0' }
      });
  }, [open]);

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 600 / data.length,
    delay: open ? 300 : 0,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 }
  });

  useChain([springApi, transApi], [0, 0]);

  //************************************************************************************************** */
  return (
    <div
      className="banner box-shadow-thin"
      style={{ backgroundImage: `url(${project.image.banner})` }}
      onMouseOver={() => {
        setOpen(true);
      }}
      onMouseOut={() => open && setOpen(false)}
      onClick={() =>
        navigate(defaultPath === '/' ? `/${project.id}` : `${defaultPath}/${project.id}`)
      }>
      {/* cover info */}
      <animated.div className="infocover" style={{ ...rest, width: '100%', height: size }}>
        <div className="skills">
          {transition((style, item) => {
            if (item.id === 'more')
              return (
                <animated.div
                  className={'skill more'}
                  style={{ ...style, transform: 'translateX(-50%)' }}>
                  {item.tech}
                </animated.div>
              );
            return (
              <animated.div className={'skill'} style={{ ...style }}>
                {item.tech}
              </animated.div>
            );
          })}
        </div>
      </animated.div>
    </div>
  );
};

const ProjectBanner = () => {
  const [amountSkillplay, setamountSkillplay] = useState(calculateAmountSkill());
  const techFilterProject = useSelector(selectFilterProject);
  const projectPagination = useSelector(selectProjectPagination);
  const dispatch = useDispatch();
  const [projects, setprojects] = useState(CONST_VARI.PROJECTS);

  const runFilterProject = (techFilter, filteringProject = []) => {
    const checkTech = (field, techFilter) => {
      if (
        field?.findIndex((tech) => {
          return (
            tech.id === techFilter.id ||
            (techFilter.sub && techFilter.sub?.findIndex((id) => id === tech.id) !== -1)
          );
        }) !== -1
      )
        return true;
      return false;
    };

    let data = filteringProject.filter((project) => {
      if (techFilter.id < 100) {
        return checkTech(project?.techs?.Frontend, techFilter);
      }
      return checkTech(project?.techs?.Backend, techFilter);
    });
    return data;
  };

  const projectOnPage = (projects) => {
    let numBannerPage = projectPagination.numBannerPage;
    let amountProjectPerPage = projectPagination.amountBannerPerPage;
    const startIndex = () => numBannerPage * amountProjectPerPage;
    const endIndex = () =>
      (numBannerPage + 1) * amountProjectPerPage < projects.length
        ? (numBannerPage + 1) * amountProjectPerPage
        : projects.length;
    return projects.slice(startIndex(), endIndex());
  };

  useEffect(() => {
    window.addEventListener('resize', amountSkillplayResize);
  });

  useEffect(() => {
    let filteredProject = CONST_VARI.PROJECTS;
    for (let i = 0; i < techFilterProject.length; i++) {
      filteredProject = runFilterProject(techFilterProject[i], filteredProject);
    }
    setprojects(projectOnPage(filteredProject));
  }, [techFilterProject, projectPagination.numBannerPage, projectPagination.amountBannerPerPage]);

  const amountSkillplayResize = () => {
    let amountProjectPerPage = projectPagination.amountBannerPerPage;
    let amountSkillplayTemp = calculateAmountSkill();
    amountSkillplay !== amountSkillplayTemp && setamountSkillplay(amountSkillplayTemp);
    if (window.innerWidth < 768) amountProjectPerPage === 4 && dispatch(setAmount(2));
    else amountProjectPerPage === 2 && dispatch(setAmount(4));
  };

  const BannerList = useCallback(() => {
    const data = (project) => {
      let data = project.techs.Backend.concat(project.techs.Frontend).slice(0, amountSkillplay);
      let TECHNOLOGIES = CONST_VARI.TECHNOLOGIES.Backend.concat(CONST_VARI.TECHNOLOGIES.Frontend);
      data = data.map(
        (tech) => TECHNOLOGIES[TECHNOLOGIES.findIndex((tech_const) => tech.id === tech_const.id)]
      );
      data.push({ id: 'more', tech: 'more' });
      return data.filter((tech) => tech);
    };

    return projects.map((project, index) => (
      <Banner
        project={project}
        data={data(project)}
        amountSkillplay={amountSkillplay}
        key={index}
      />
    ));
  }, [projects]);
  return (
    <div className="projects cursor-pointer">
      {/* project block */}
      <BannerList />
    </div>
  );
};

export default ProjectBanner;
