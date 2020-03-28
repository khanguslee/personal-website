import React from 'react';

function SectionItem(props) {
  const {
    id,
    title,
    subtitle,
    description,
    descriptionList,
    rightTitle,
    imageRenderer,
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
    <div className="resume-item d-flex mb-5" data-testid={testId} key={id}>
      {imageRenderer && (
        <div className="resume-image d-none d-sm-block mr-4 pt-2">
          {imageRenderer}
        </div>
      )}
      <div className="resume-content" data-testid="section-content">
        <div className="d-flex justify-content-between">
          <h3 className="mb-0">{title}</h3>
          <div
            className="resume-date text-right"
            data-testid="section-right-title"
          >
            <span className="text-primary">{rightTitle}</span>
          </div>
        </div>

        <div className="d-flex">
          <div className="subheading mb-1">{subtitle}</div>
        </div>
        {description && <p className="mb-0">{description}</p>}
        {descriptionList && renderDescriptionList(descriptionList)}
      </div>
    </div>
  );
}

export default SectionItem;
