import React from 'react';

import Experience from './experience';
import Skills from './skills';
import Interests from './interests';
import Extracurriculars from './extracurriculars';

import Layout from '../components/Layout';
import About from '../components/about';
import Education from '../components/education';

import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">

      <About config={config} />

      <hr className="m-0" />

      <Experience />

      <hr className="m-0" />

      <Education />

      <hr className="m-0" />

      <Extracurriculars />

      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Interests />

    </div>
  </Layout>
);

export default IndexPage;
