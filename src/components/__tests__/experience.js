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
});
