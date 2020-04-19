import React from 'react';
import { render } from '@testing-library/react';

import Extracurriculars from '../extracurriculars';

describe('Extracurriculars component', () => {
  const extracurricularsTestID = 'extracurriculars-section';

  it('displays correct header', () => {
    const studentClubs = [];
    const hackathons = [];
    const { getByTestId } = render(
      <Extracurriculars studentClubs={studentClubs} hackathons={hackathons} />
    );

    const expectedHeaderText = 'Extracurriculars';

    expect(getByTestId(extracurricularsTestID)).toHaveTextContent(
      expectedHeaderText
    );
  });

  describe('Student Clubs section', () => {
    it('displays correct header', () => {
      const studentClubs = [
        {
          name: 'Test Club',
          title: 'Test Lead',
          date: {
            start: 2018,
            end: 2020,
          },
        },
      ];
      const hackathons = [];
      const { getByTestId } = render(
        <Extracurriculars studentClubs={studentClubs} hackathons={hackathons} />
      );

      const expectedHeaderText = 'Student Clubs';

      expect(getByTestId(extracurricularsTestID)).toHaveTextContent(
        expectedHeaderText
      );
    });
  });

  describe('Hackathon section', () => {
    it('displays correct header', () => {
      const studentClubs = [];
      const hackathons = [
        {
          name: 'Test Hackathon',
          project: 'Test project',
          description: 'Testing Tests',
        },
      ];
      const { getByTestId } = render(
        <Extracurriculars studentClubs={studentClubs} hackathons={hackathons} />
      );

      const expectedHeaderText = 'Hackathons';

      expect(getByTestId(extracurricularsTestID)).toHaveTextContent(
        expectedHeaderText
      );
    });
  });
});
