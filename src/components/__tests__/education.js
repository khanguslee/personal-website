import React from 'react';
import { render } from '@testing-library/react';

import Education from '../education';

describe('Education component', () => {
  const educationTestID = 'education-section';

  it('displays correct header', () => {
    const { getByTestId } = render(<Education education={[]} />);

    const expectedHeaderText = 'Education';

    expect(getByTestId(educationTestID)).toHaveTextContent(expectedHeaderText);
  });
});
