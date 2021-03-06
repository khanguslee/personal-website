import React from 'react';

import Layout from '../components/Layout';

import About from '../components/about';
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';
import Interests from '../components/interests';
import Extracurriculars from '../components/extracurriculars';

import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <About config={config} />

      <hr className="m-0" />

      <Experience experiences={config.experience} />

      {config.education && (
        <>
          <hr className="m-0" /> <Education education={config.education} />
        </>
      )}

      <hr className="m-0" />

      <Extracurriculars
        studentClubs={config.extracurriculars.studentClubs}
        hackathons={config.extracurriculars.hackathons}
      />

      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Interests />
    </div>
  </Layout>
);

export default IndexPage;
