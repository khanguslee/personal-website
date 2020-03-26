import React from 'react';

function SectionItem(props) {
  const {
    id,
    title,
    subtitle,
    description,
    descriptionList,
    rightTitle,
    testId,
  } = props;

  // TODO: Add image of company beside each entry

  const renderDescriptionList = descriptionList => {
    const descriptionListItems = descriptionList.map(
      (descriptionListItem, index) => {
        return (
          <li key={`${descriptionListItem}-${index}`}>{descriptionListItem}</li>
        );
      }
    );

    return <ul>{descriptionListItems}</ul>;
  };

  return (
    <div
      className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
      data-testid={testId}
      key={id}
    >
      <div className="resume-content" data-testid="section-content">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-1">{subtitle}</div>
        {description && <p>{description}</p>}
        {descriptionList && renderDescriptionList(descriptionList)}
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
