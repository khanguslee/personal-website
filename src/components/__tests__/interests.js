import React from 'react';
import { render } from '@testing-library/react';

import Interests from '../interests';

describe('Interests component', () => {
  const interestsTestID = 'interests-section';

  it('displays correct header', () => {
    const { getByTestId } = render(<Interests />);

    const expectedHeaderText = 'Interests';

    expect(getByTestId(interestsTestID)).toHaveTextContent(expectedHeaderText);
  });
});
