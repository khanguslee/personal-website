import React from "react"
import { render } from "@testing-library/react"

import About from '../about';

const testConfig = {
  firstName: 'foo',
  lastName: 'bar',
  email: 'test@test.com',
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/khanguslee',
    },
  ],
}

describe('About component', () => {
  it('displays config properly', () => {
    const { getByTestId } = render(<About config={testConfig} />)

    const expectedDisplayedName = testConfig.firstName + testConfig.lastName;
    expect(getByTestId("about-section")).toHaveTextContent(expectedDisplayedName);
  })
})