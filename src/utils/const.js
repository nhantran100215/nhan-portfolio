import ariCore from 'public/Projects/Ari/core.png';
import ariHomePage from 'public/Projects/Ari/homepage.png';
import ariIntroduce from 'public/Projects/Ari/introduce.png';
import AriProject from 'public/Projects/Ari/project.png';
import Uhlogin from 'public/Projects/Uhouse/login.png';
import Uhdashboard from 'public/Projects/Uhouse/dashboard.png';
import Uhprofile from 'public/Projects/Uhouse/profile.png';
import Uhsetting from 'public/Projects/Uhouse/setting.png';
import Bllogin from 'public/Projects/balance/login.png';
import Bldashboard from 'public/Projects/balance/dashboard.png';
import Blprofile from 'public/Projects/balance/profile.png';
import Blsetting from 'public/Projects/balance/setting.png';
import Blcategory from 'public/Projects/balance/category.png';
import Doxalogin from 'public/Projects/Doxa/login.png';
import Doxadashboard from 'public/Projects/Doxa/dashboard.png';
import Doxaprofile from 'public/Projects/Doxa/profile.png';
import Doxasetting from 'public/Projects/Doxa/setting.png';
import Pflogin from 'public/Projects/portfolio/login.png';
import Pfdashboard from 'public/Projects/portfolio/dashboard.png';
import Pfprofile from 'public/Projects/portfolio/profile.png';
import Pfcategory from 'public/Projects/portfolio/category.png';

const HEADER_LINE = [
  {
    id: 'aboutme',
    text: 'About Me',
    position: 'end'
  },
  {
    id: 'projects',
    text: 'Projects',
    position: 'center'
  },
  // {
  //   id: 'skills',
  //   text: 'Skills',
  //   position: 'center'
  // },
  {
    id: 'contactme',
    text: 'Contact Me',
    position: 'center'
  }
];

const INTRO_MYSELF = [
  {
    text: 'My name is Nhan Tran Viet.',
    position: 'center'
    // width: 600
  },
  {
    text: " I am a Fullstack Web Developer. I have many years of experience developing websites in Agile/Scrum workflows for e-commerce systems and sales websites. I always wanted to create beautiful and user-friendly websites. If you want to collaborate with me don't hesitate to connect.  Finally, feel free to take a look at my latest projects on this portfolio web.",
    position: 'center'
    // width: 900
  }
];

const MY_INFO = {
  gmail: 'nhantran100215@gmail.com'
};

const NOTIFICATION = {
  timer: 4000,
  success_mail_message: 'Email sent successfully'
};

const TECHNOLOGIES = {
  Frontend: [
    {
      id: 1,
      tech: 'Javascript',
      sub: [2]
    },
    {
      id: 2,
      tech: 'React'
    },
    {
      id: 3,
      tech: 'Ant Design'
    },
    {
      id: 4,
      tech: 'Tailwind'
    },
    {
      id: 5,
      tech: 'CSS3'
    },
    {
      id: 6,
      tech: 'HTML5'
    },
    {
      id: 7,
      tech: 'Micro-frontend'
    },
    {
      id: 8,
      tech: 'Reactstrap'
    },
    {
      id: 9,
      tech: 'Formik'
    },
    {
      id: 10,
      tech: 'Recharts'
    },
    {
      id: 11,
      tech: 'Ag-grid React'
    },
    {
      id: 12,
      tech: 'Matmaterial ui'
    }
  ], //12
  Backend: [
    {
      id: 101,
      tech: 'Nodejs',
      sub: [102, 111]
    },
    {
      id: 102,
      tech: 'Nestjs'
    },
    {
      id: 111,
      tech: 'express'
    },
    {
      id: 103,
      tech: 'Microservices'
    },
    {
      id: 104,
      tech: 'Docker'
    },
    {
      id: 105,
      tech: 'Redit'
    },
    {
      id: 106,
      tech: 'PostgreSQL'
    },
    {
      id: 107,
      tech: 'Nginx'
    },
    {
      id: 108,
      tech: 'Jenkins'
    },
    {
      id: 109,
      tech: 'Swagger'
    },
    {
      id: 110,
      tech: 'MongoDB'
    }
  ] //111
};
const PROJECTS = [
  {
    id: 'project-5',
    projectName: 'My Portfolio',
    AboutProject: [
      'This website was built to present more thoroughly the skills I have and typical projects that I have participated in.',
      ' At the same time, at the time of building this web app, there were some technology updates, so I wanted to build it with new technologies to learn and develop further.'
    ],
    techs: {
      Frontend: [
        {
          id: 50,
          tech: 'UI/UX Architecture'
        },
        {
          id: 51,
          tech: 'UI/UX Animations - React Spring'
        },
        {
          id: 1,
          tech: 'Javascript ES6',
          sub: [2]
        },
        {
          id: 2,
          tech: 'Reactjs 18.2',
          details: ['Redux/Toolkit', 'Redux-saga']
        },
        {
          id: 70,
          tech: 'React Router DOM v6'
        },
        {
          id: 71,
          tech: 'Webpack'
        },
        {
          id: 5,
          tech: 'CSS3-Modules, SASS, PostCSS'
        },
        {
          id: 6,
          tech: 'HTML5-Sematic,video'
        }
      ],
      Backend: []
    },
    image: {
      banner: Pflogin,
      listImage: [Pflogin, Pfdashboard, Pfprofile, Pfcategory]
    },

    url: '/'
  },
  {
    id: 'project-1',
    projectName: 'ARI Technology website',
    AboutProject: [
      'ARI Technology Joint Stock Company was established in 2018 and headquartered in Ho Chi Minh City.',
      ' We specialize in consulting and delivering digital transformation solutions to address real-world problems, help customers to overcome their business challenges to achieve the highest business operations efficiency. With a team of young and creative talents, ARI always aims at the most innovative and top-notch quality products, ensuring that those products will satisfy the customer’s needs.'
    ],
    techs: {
      Frontend: [
        {
          id: 1,
          tech: 'Javascript ES6'
        },
        {
          id: 2,
          tech: 'Reactjs',
          details: ['useContext', 'Webpack']
        },
        {
          id: 3,
          tech: 'Ant Design'
        },
        {
          id: 4,
          tech: 'Tailwind'
        },
        {
          id: 5,
          tech: 'CSS3-Modules, LESS, PostCSS'
        },
        {
          id: 6,
          tech: 'HTML5-Sematic,video'
        },
        {
          id: 99,
          tech: 'React-i18next'
        },
        {
          id: 15,
          tech: 'codeceptjs'
        }
      ],
      Backend: [
        {
          id: 102,
          tech: 'Nestjs',
          details: ['JsonWebtoken', 'OAuth', 'password encryption']
        },
        // {
        //   id: 104,
        //   tech: 'Docker'
        // },
        {
          id: 106,
          tech: 'PostgreSQL'
        },
        // {
        //   id: 107,
        //   tech: 'Nginx'
        // },
        // {
        //   id: 108,
        //   tech: 'Jenkins'
        // },
        {
          id: 109,
          tech: 'Swagger'
        }
      ]
    },
    image: {
      banner: ariHomePage,
      listImage: [ariHomePage, ariCore, ariIntroduce, AriProject]
    },

    url: 'https://ari.com.vn/'
  },
  {
    id: 'project-2',
    projectName: 'Uhouse',
    AboutProject: [
      ' The software is designed with the goal of providing building owners in Ho Chi Minh City with a platform to manage independent buildings or chains of rental apartments. The software ensures full integration of the necessary features that homeowners need in building operation management. In addition, the software also links with an e-commerce site specializing in connecting brokers, tenants, repair services and utilities to improve user experience.',
      ' The relevant objects that need to be targeted in the system include System Administrator, Building Owner, Employees working in the building, Tenants, and Brokers.'
    ],
    techs: {
      Frontend: [
        {
          id: 1,
          tech: 'Javascript ES6'
        },
        {
          id: 2,
          tech: 'Reactjs',
          details: ['redux', 'Webpack']
        },
        {
          id: 3,
          tech: 'Ant Design'
        },
        {
          id: 4,
          tech: 'Tailwind'
        },
        {
          id: 5,
          tech: 'CSS3-Modules, LESS, PostCSS'
        },
        {
          id: 6,
          tech: 'HTML5-Sematic,video'
        },
        {
          id: 15,
          tech: 'codeceptjs'
        },
        {
          id: 98,
          tech: 'Sweetalert2'
        },
        {
          id: 99,
          tech: 'React-i18next'
        },
        {
          id: 90,
          tech: 'Jodit'
        }
      ],
      Backend: [
        {
          id: 102,
          tech: 'Nestjs',
          details: ['JsonWebtoken', 'OAuth', 'password encryption']
        },
        {
          id: 103,
          tech: 'Microservices'
        },
        {
          id: 104,
          tech: 'Docker'
        },
        // {
        //   id: 105,
        //   tech: 'Redit'
        // },
        {
          id: 106,
          tech: 'PostgreSQL'
        },
        // {
        //   id: 107,
        //   tech: 'Nginx'
        // },
        // {
        //   id: 108,
        //   tech: 'Jenkins'
        // },
        {
          id: 109,
          tech: 'Swagger'
        }
      ]
    },
    image: {
      banner: Uhdashboard,
      listImage: [Uhdashboard, Uhlogin, Uhprofile, Uhsetting]
    },
    // url: 'https://uat.uhouseproduct.com/#/auth/login'
  },
  {
    id: 'project-3',
    projectName: 'Balance',
    AboutProject: [
      ' The system, called Balance, is built as an intermediary between the cost of purchasing from farmers and the price sold to enterprises, stores or direct consumers. Balance will directly search and buy fresh agricultural products from farmers (agricultural suppliers) at competitive prices, creating conditions for farmers to have a better income; then, those agricultural products will be sold from the system at the listed price which not too much different from the purchase cost that ensure the supply of output products can meet the standards of both quality and price.'
    ],
    techs: {
      Frontend: [
        {
          id: 1,
          tech: 'Javascript ES6'
        },
        {
          id: 2,
          tech: 'Reactjs',
          details: ['useContext', 'Webpack']
        },
        {
          id: 3,
          tech: 'Ant Design'
        },
        {
          id: 4,
          tech: 'Tailwind'
        },
        {
          id: 5,
          tech: 'CSS3-Modules, LESS, PostCSS'
        },
        {
          id: 6,
          tech: 'HTML5-Sematic,video'
        },
        {
          id: 98,
          tech: 'Sweetalert2'
        },
        {
          id: 99,
          tech: 'React-i18next'
        },
        {
          id: 90,
          tech: 'Jodit'
        }
      ],
      Backend: [
        {
          id: 102,
          tech: 'Nestjs',
          details: ['JsonWebtoken', 'OAuth', 'password encryption']
        },
        {
          id: 103,
          tech: 'Microservices'
        },
        // {
        //   id: 104,
        //   tech: 'Docker'
        // },
        // {
        //   id: 105,
        //   tech: 'Redit'
        // },
        {
          id: 106,
          tech: 'PostgreSQL'
        },
        // {
        //   id: 107,
        //   tech: 'Nginx'
        // },
        // {
        //   id: 108,
        //   tech: 'Jenkins'
        // },
        {
          id: 109,
          tech: 'Swagger'
        }
      ]
    },
    image: {
      banner: Bldashboard,
      listImage: [Bldashboard, Bllogin, Blprofile, Blsetting, Blcategory]
    }
  },
  {
    id: 'project-4',
    projectName: 'Doxa Conex',
    AboutProject: [
      ' For the requirements of building a full procurement-to-payment system suite for Main Contractors, Sub Contractors, Developers, and Suppliers for maximum cost-savings and efficiency, Doxa Connex was developed with technical assistance from ARI Technology.',
      ' It is the business logic designed for construction veterans to automate their workflow from Project Cost Projections, Requisitions, RFQs, Purchase Orders, Progress Claims, Payment Certificates and Invoicing.',
      ' The outstanding features of Doxa Connex are presented as follows:',
      ' A Collaborative Workspace for all',
      ' Host-to-Host Direct Payments',
      ' Supplier Portal',
      ' Financing & Disbursement',
      ' Analytics',
      ' Blockchain Security'
    ],
    techs: {
      Frontend: [
        {
          id: 7,
          tech: 'Micro-frontend - 7 separately developed service UI '
        },
        {
          id: 1,
          tech: 'Javascript ES6'
        },
        {
          id: 2,
          tech: 'Reactjs',
          details: ['Redux', 'Webpack']
        },
        {
          id: 5,
          tech: 'CSS3-Modules, SASS, PostCSS'
        },
        {
          id: 6,
          tech: 'HTML5-Sematic,video'
        },
        {
          id: 8,
          tech: 'Reactstrap'
        },
        {
          id: 12,
          tech: 'Matmaterial ui'
        },
        {
          id: 9,
          tech: 'Formik'
        },
        {
          id: 11,
          tech: 'Ag-grid React'
        },
        {
          id: 10,
          tech: 'Recharts'
        },
        {
          id: 98,
          tech: 'Sweetalert2'
        },
        {
          id: 99,
          tech: 'React-i18next'
        },
        {
          id: 97,
          tech: 'TinyMCE'
        }
      ],
      Backend: []
    },
    url: 'https://www.doxa-holdings.com/',
    image: {
      banner: Doxadashboard,
      listImage: [Doxadashboard, Doxalogin, Doxaprofile, Doxasetting]
    }
  }
];

export default {
  HEADER_LINE,
  INTRO_MYSELF,
  TECHNOLOGIES,
  PROJECTS,
  MY_INFO,
  NOTIFICATION
};
