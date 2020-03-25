import React from 'react';
import { render } from '@testing-library/react';

import Skills from '../skills';

describe('Skills component', () => {
  const skillsTestID = 'skills-section';

  it('displays correct header', () => {
    const { getByTestId } = render(<Skills />);

    const expectedHeaderText = 'Skills';

    expect(getByTestId(skillsTestID)).toHaveTextContent(expectedHeaderText);
  });
});
