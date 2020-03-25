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
      endDate: 'February 2019',
      description:
        'Part of the MongoDB Charts Team working on incorporating interactive Charts into MongoDB Charts',
    },
    {
      company: 'Australian Bureau of Statistics',
      role: 'Software Engineer Intern',
      startDate: 'June 2019',
      endDate: 'December 2019',
      description:
        'Developed a progressive web application for Census Field Officers using typescript and react. Liasing with business clients to fulfil their needs about the product',
    },
    {
      company: 'MongoDB',
      role: 'Software Engineer Intern',
      startDate: 'December 2018',
      endDate: 'March 2019',
      description:
        'Part of the Technical Services MongoDB Team. Worked on a POC intern project that allows collaborative log viewing between Technical Support staff',
    },
    {
      company: 'Autodesk',
      role: 'Software Engineer Intern',
      startDate: 'July 2017',
      endDate: 'January 2018',
      description:
        'Converted a Windows-only C# application into a program that builds and runs on Linux using Mono C#',
    },
  ],
};
