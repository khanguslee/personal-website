import React from 'react';
import { render } from '@testing-library/react';

import Experience from '../experience';

describe('Experience component', () => {
  const experienceTestID = 'experience-section';

  it('displays correct header', () => {
    const testExperiences = [];
    const { getByTestId } = render(
      <Experience experiences={testExperiences} />
    );

    const expectedHeaderText = 'Experience';

    expect(getByTestId(experienceTestID)).toHaveTextContent(expectedHeaderText);
  });

  it('displays a single experience correctly', () => {
    const testCompanyExperience = {
      company: 'Test Company',
      role: 'Test Role',
      startDate: 'January 2020',
      endDate: 'December 2020',
      description: 'Hello World',
    };
    const testExperiences = [testCompanyExperience];

    const { getByText, getByTestId } = render(
      <Experience experiences={testExperiences} />
    );

    const experienceContent = getByTestId('experience-content');
    expect(experienceContent).toHaveTextContent(testCompanyExperience.role);
    expect(experienceContent).toHaveTextContent(testCompanyExperience.company);
    expect(experienceContent).toHaveTextContent(
      testCompanyExperience.description
    );

    expect(getByText(testCompanyExperience.company)).toHaveClass('subheading');

    const experienceDate = getByTestId('experience-content');
    const expectedDateText = `${testCompanyExperience.startDate} - ${testCompanyExperience.endDate}`;
    expect(experienceDate).toHaveTextContent(expectedDateText);
  });
});
