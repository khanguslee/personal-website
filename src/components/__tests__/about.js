import React from 'react';
import { render } from '@testing-library/react';

import About from '../about';

const testConfig = {
  firstName: 'foo',
  lastName: 'bar',
  email: 'test@test.com',
  subtitle: 'Please hire me.',
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/khanguslee',
    },
  ],
};

describe('About component', () => {
  const aboutTestID = 'about-section';

  it('displays config values properly', () => {
    const { getByTestId } = render(<About config={testConfig} />);

    const expectedDisplayedName = testConfig.firstName + testConfig.lastName;

    expect(getByTestId(aboutTestID)).toHaveTextContent(expectedDisplayedName);
    expect(getByTestId(aboutTestID)).toHaveTextContent(testConfig.email);
    expect(getByTestId(aboutTestID)).toHaveTextContent(testConfig.subtitle);
  });
});
