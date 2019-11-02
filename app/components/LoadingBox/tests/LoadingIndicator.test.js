import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { LoadingIndicator } from '../LoadingIndicator';

describe('<LoadingIndicator />', () => {
  it('render without error', () => {
    const theme = {
      darkgrey: 'darkgrey',
      dodgerblue: 'dodgerblue'
    }
    const tree = renderer.create(<LoadingIndicator theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});