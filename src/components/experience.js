import React from 'react';

function Experience(props) {
  const { experiences } = props;

  const renderJobExperiences = experiences => {
    return experiences.map(job => {
      const { company, role, startDate, endDate, description } = job;
      return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">{role}</h3>
            <div className="subheading mb-3">{company}</div>
            <p>{description}</p>
          </div>
          <div className="resume-date text-md-right">
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
