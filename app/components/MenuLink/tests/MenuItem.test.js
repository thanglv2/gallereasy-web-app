import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import MenuItem from '../MenuItem';

describe('<MenuItem />', () => {
  it('render without error', () => {
    const theme = {
      grey: 'grey'
    }
    const tree = renderer.create(<MenuItem theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
  