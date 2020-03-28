import React from 'react';

import useLogoImages from '../hooks/useLogoImages';

import SectionItem from './SectionItem';

function Experience(props) {
  const { experiences } = props;
  const logoImages = useLogoImages();

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
