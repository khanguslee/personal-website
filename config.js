module.exports = {
  siteTitle: 'khanguslee', // <title>
  manifest: {
    name: 'khanguslee Portfolio Website',
    shortName: 'khanguslee', // Max 12 characters
    startUrl: '/',
    backgroundColor: '#663399',
    themeColor: '#663399',
    display: 'standalone',
    icon: 'src/assets/img/website-icon.png',
  },
  pathPrefix: `/gatsby-starter-resume/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: 'Angus',
  lastName: 'Lee',
  subtitle:
    "I am a Software Engineer with a passion for solving real-world problems that impact people's lives through programming.",
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/khanguslee',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/kuanhoulee/',
    },
  ],
  email: 'khanguslee@gmail.com',
  experience: [
    {
      company: 'MongoDB',
      role: 'Software Engineer Intern',
      startDate: 'December 2019',
      endDate: 'February 2020',
      description: 'Part of the MongoDB Charts Team.',
      tasks: [
        'Fix various bugs on their React application that will be released into production',
        'Work with another intern to create interactive chart features',
      ],
      imageName: 'mongodb-logo',
    },
    {
      company: 'Australian Bureau of Statistics',
      role: 'Software Engineer Intern',
      startDate: 'June 2019',
      endDate: 'December 2019',
      description: 'Technology Services Division, Census Section.',
      tasks: [
        'Develop a Progressive Web App written with React, Typescript and Redux',
        'Liase with the business team about the design and functionality of the application',
        "Use an 'offline-first' strategy",
      ],
      imageName: 'abs-logo',
    },
    {
      company: 'MongoDB',
      role: 'Software Engineer Intern',
      startDate: 'December 2018',
      endDate: 'March 2019',
      description: 'Part of the Technical Services Team.',
      tasks: [
        'Convert desktop application into a web application',
        'Render various elements of the web application using d3.js library',
        'Incorporate collaborative features into the web application',
      ],
      imageName: 'mongodb-logo',
    },
    {
      company: 'Autodesk',
      role: 'Software Engineer Intern',
      startDate: 'July 2017',
      endDate: 'January 2018',
      tasks: [
        'Develop Python scripts for smoke and load tests for the automated testing framework',
        'Develop a command line application that parses a log in C++',
        'Use node.JS and React to create a web application for the C++ Log Parser application',
        'Convert a Windows-only C# application into a program that builds and runs on Linux using Mono C#',
      ],
      imageName: 'autodesk-logo',
    },
  ],
  education: [
    {
      school: 'Monash University',
      degree: 'Bachelor of Science / Bachelor of Engineering (Honours)',
      startDate: 'February 2015',
      endDate: 'June 2020',
      field: [
        'Computational Science (Extended major)',
        'Electrical and Computer Systems Engineering specialisation',
      ],
      imageName: 'monash-logo',
    },
  ],
  extracurriculars: {
    studentClubs: [
      {
        name: 'Monash Human Power',
        title: 'Electrical Team Lead',
        date: {
          start: 2018,
          end: 2020,
        },
      },
      {
        name: 'Monash Association of Coding',
        title: 'Technology Director',
        date: {
          start: 2019,
          end: 2020,
        },
      },
      {
        name: 'Society of Monash Electrical Engineers',
        title: 'Careers and Sponsorship Representative',
        date: {
          start: 2019,
          end: 2020,
        },
      },
      {
        name: 'Society of Monash Electrical Engineers',
        title: '3rd Year Representative',
        date: {
          start: 2019,
          end: 2019,
        },
      },
    ],
    hackathons: [
      {
        name: 'Hackamon 2019',
        project: 'perspective',
        projectLinks: [
          {
            name: 'github',
            link: 'https://github.com/khanguslee/perspective',
          },
        ],
        description:
          'Awarded 2nd Place at the Hackathon. Using the idea that the best way of learning is through teaching. This platform allows students to teach different topics of a unit via video format whilst receiving feedback from other students and tutors.',
      },
      {
        name: 'Unihack 2019',
        project: 'meta',
        projectLinks: [
          {
            name: 'github',
            link: 'https://github.com/khanguslee/meta',
          },
        ],
        description:
          'Web application that puts online news meta-data back in the hands of the user. I helped create a working authentication and registration system using passport.js, mongoose and MongoDB.',
      },
      {
        name: 'Hard Hackathon 2018',
        project: 'Guarden',
        projectLinks: [
          {
            name: 'github',
            link: 'https://github.com/khanguslee/Guarden',
          },
          { name: 'webpage', link: 'http://guarden.herokuapp.com/' },
        ],
        description:
          'An all-in-one plant management system. Created a dashboard that would grab sensor data from MongoDB which were sent from Arduinos and Raspberry Pis. The dashboard could also control a servo that would spray plants.',
      },
    ],
  },
};
