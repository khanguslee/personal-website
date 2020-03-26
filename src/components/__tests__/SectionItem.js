import React from 'react';
import { render } from '@testing-library/react';

import SectionItem from '../SectionItem';

describe('SectionItem component', () => {
  it('displays necessary values properly', () => {
    const testSectionConfig = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      rightTitle: 'Test Right Title',
    };
    const sectionTestId = 'test-section-id';
    const { getByTestId } = render(
      <SectionItem
        id={0}
        title={testSectionConfig.title}
        subtitle={testSectionConfig.subtitle}
        rightTitle={testSectionConfig.rightTitle}
        testId={sectionTestId}
      />
    );
    expect(getByTestId(sectionTestId)).toHaveTextContent(
      testSectionConfig.title
    );
    expect(getByTestId(sectionTestId)).toHaveTextContent(
      testSectionConfig.subtitle
    );
    expect(getByTestId(sectionTestId)).toHaveTextContent(
      testSectionConfig.rightTitle
    );
  });

  it('displays description', () => {
    const testSectionConfig = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      rightTitle: 'Test Right Title',
      description: 'Test description',
    };
    const sectionTestId = 'test-section-id';
    const { getByTestId } = render(
      <SectionItem
        id={0}
        title={testSectionConfig.title}
        subtitle={testSectionConfig.subtitle}
        description={testSectionConfig.description}
        rightTitle={testSectionConfig.rightTitle}
        testId={sectionTestId}
      />
    );
    expect(getByTestId(sectionTestId)).toHaveTextContent(
      testSectionConfig.description
    );
  });

  it('displays description list', () => {
    const testSectionConfig = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      rightTitle: 'Test Right Title',
      descriptionList: ['Test Item 1', 'Test Item 2', 'Test Item 3'],
    };
    const sectionTestId = 'test-section-id';
    const { getByTestId } = render(
      <SectionItem
        id={0}
        title={testSectionConfig.title}
        subtitle={testSectionConfig.subtitle}
        descriptionList={testSectionConfig.descriptionList}
        rightTitle={testSectionConfig.rightTitle}
        testId={sectionTestId}
      />
    );

    testSectionConfig.descriptionList.map(item => {
      expect(getByTestId(sectionTestId)).toHaveTextContent(item);
    });
  });
});
