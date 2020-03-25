import React from 'react';

function Experience(props) {
  const { experiences } = props;

  const renderJobExperiences = experiences => {
    // TODO: Sort the experiences array before rendering.
    return experiences.map((job, index) => {
      const { company, role, startDate, endDate, description } = job;
      // TODO: Add image of company beside each entry
      return (
        <div
          className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          key={index}
        >
          <div className="resume-content" data-testid="experience-content">
            <h3 className="mb-0">{role}</h3>
            <div className="subheading mb-3">{company}</div>
            <p>{description}</p>
          </div>
          <div
            className="resume-date text-md-right"
            data-testid="experience-date"
          >
            <span className="text-primary">
              {startDate} - {endDate}
            </span>
          </div>
        </div>
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
