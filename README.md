# Portfolio Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/f5741431-5c65-4e57-99a1-3be1024d3185/deploy-status)](https://app.netlify.com/sites/suspicious-northcutt-65b2d6/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

My own portfolio website created with Gatsby and hosted with Netlify.

## Getting started

### Development

```bash
  yarn install
  gatsby develop
```

A local deployment should be hosted on <http://localhost:8000/>

### Production Build

```bash
  gatsby build
  gatsby serve
```

### Hosting

You will need to go to a domain registrar to purchase your own domain name. [Namecheap](https://nc.me/) provides a free `.me` domain for university students for 1 year.

This repository is currently hosted on Netlify on their starter plan (**free**).

#### Steps on Hosting on Netlify

1. Create a Netlify account
2. Click `New site from Git`
3. Select `Github`
4. Select the repository you would like to host
5. Go to `Settings` -> `Build & deploy` -> `Edit settings`
6. Change Build command to `gatsby build`
7. Change Publish directory to `public/`

Your repository should now be automatically deployed on every push to `master`!

### Deploying

As discussed above, this repository has been set up to automatically deploy any changes to the `master` branch. `master` branch has been locked so it requires pull requests to be changed.

## Credits

Gatsby Starter Link: <https://www.gatsbyjs.org/starters/anubhavsrivastava/gatsby-starter-resume/>
