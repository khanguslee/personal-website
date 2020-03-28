import React from 'react';

import useLogoImages from '../hooks/useLogoImages';

import SectionItem from './SectionItem';

function Education(props) {
  const { education } = props;
  const logoImages = useLogoImages();

  const renderEducation = educations => {
    return educations.map((education, index) => {
      const {
        school,
        degree,
        startDate,
        endDate,
        field,
        imageName,
      } = education;

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
          title={school}
          subtitle={degree}
          descriptionList={field}
          rightTitle={rightTitleText}
          imageRenderer={ImageComponent}
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
        {renderEducation(education, logoImages)}
      </div>
    </section>
  );
}

export default Education;
