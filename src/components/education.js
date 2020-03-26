import React from 'react';

import SectionItem from './SectionItem';

function Education(props) {
  const { education } = props;

  const renderEducation = educations => {
    return educations.map((education, index) => {
      const { school, degree, startDate, endDate, field } = education;

      const rightTitleText = `${startDate} - ${endDate}`;

      return (
        <SectionItem
          key={index}
          title={school}
          subtitle={degree}
          descriptionList={field}
          rightTitle={rightTitleText}
        />
      );
    });
  };

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="education"
      data-testid="education-section"
    >
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        {renderEducation(education)}
      </div>
    </section>
  );
}

export default Education;
