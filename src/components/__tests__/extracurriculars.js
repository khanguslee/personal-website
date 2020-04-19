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
});
