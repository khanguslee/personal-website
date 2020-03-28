import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SectionItem from './SectionItem';

import Img from 'gatsby-image';

function Experience(props) {
  const { experiences } = props;

  // Get SVG logo details using GraphQL
  const data = useStaticQuery(graphql`
    {
      logoImages: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
        results: edges {
          logo: node {
            name
            id
            publicURL
            relativePath
          }
        }
      }
    }
  `);

  // Sets the key and values of the dictionary to the logo name and detail respectively
  let logoImages = {};
  if (data) {
    data.logoImages.results.map(item => {
      const { name: logoName, ...logoDetails } = item.logo;
      logoImages[logoName] = logoDetails;
    });
  }

  const renderJobExperiences = (experiences, logoImages) => {
    // TODO: Sort the experiences array before rendering.
    return experiences.map((job, index) => {
      const {
        company,
        role,
        startDate,
        endDate,
        description,
        tasks,
        imageName,
      } = job;

      const rightTitleText = `${startDate} - ${endDate}`;

      const ImageComponent = logoImages.hasOwnProperty(imageName) ? (
        <img
          src={logoImages[imageName].publicURL}
          alt={logoImages[imageName].name}
        />
      ) : (
        undefined
      );

      return (
        <SectionItem
          key={index}
          title={role}
          subtitle={company}
          description={description}
          descriptionList={tasks}
          rightTitle={rightTitleText}
          imageRenderer={ImageComponent}
          testId={'experience-content'}
        />
      );
    });
  };

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center"
      id="experience"
      data-testid="experience-section"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>
        {renderJobExperiences(experiences, logoImages)}
      </div>
    </section>
  );
}

export default Experience;
