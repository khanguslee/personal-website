import React from 'react';

import SectionItem from './SectionItem';

function Experience(props) {
  const { experiences } = props;

  const renderJobExperiences = experiences => {
    // TODO: Sort the experiences array before rendering.
    return experiences.map((job, index) => {
      const { company, role, startDate, endDate, description } = job;

      const rightTitleText = `${startDate} - ${endDate}`;

      return (
        <SectionItem
          key={index}
          title={role}
          subtitle={company}
          description={description}
          rightTitle={rightTitleText}
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
        {renderJobExperiences(experiences)}
      </div>
    </section>
  );
}

export default Experience;
