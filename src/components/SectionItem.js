import React from 'react';

function SectionItem(props) {
  const { key, title, subtitle, description, rightTitle } = props;

  // TODO: Add image of company beside each entry
  return (
    <div
      className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
      key={key}
    >
      <div className="resume-content" data-testid="section-content">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{subtitle}</div>
        <p>{description}</p>
      </div>
      <div
        className="resume-date text-md-right"
        data-testid="section-right-title"
      >
        <span className="text-primary">{rightTitle}</span>
      </div>
    </div>
  );
}

export default SectionItem;
