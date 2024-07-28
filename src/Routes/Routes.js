import React, { Suspense, lazy } from 'react';
import WebContent from 'src/components';
// import ErrorPage from 'src/error-page';
import PortfolioPage from 'src/components/Content/PortfolioPage/PortfolioPage';
import { CONST_VARI } from 'src/utils';
// import ProjectPage from 'src/components/Content/ProjectPage/ProjectPage';
const ProjectPage = lazy(() => import('src/components/Content/ProjectPage/ProjectPage'));
const Routes = [
  {
    path: '/',
    element: <WebContent />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/nhan-portfolio',
        element: <PortfolioPage />
        // errorElement: <ErrorPage />
      },
      {
        path: '/:projectId',
        loader: ({ params }) => {
          let projectDetail = CONST_VARI.PROJECTS.filter(
            (project) => project.id === params.projectId
          );

          if (projectDetail.length === 0) throw new Response('Not Found', { status: 404 });
          return projectDetail[0];
        },
        element: (
          <Suspense fallback={<div>LOADING...</div>}>
            <ProjectPage />
          </Suspense>
        )
      }
    ]
  }
];

export default Routes;
