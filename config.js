module.exports = {
  siteTitle: 'khanguslee', // <title>
  manifest: {
    name: 'Resume',
    shortName: 'Landing', // Max 12 characters
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
};
