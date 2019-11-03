import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('render without error', () => {
    const tree = renderer.create(<Wrapper isFavourite />).toJSON()
    expect(tree).toMatchSnapshot()
  });

  it('render without error', () => {
    const tree = renderer.create(<Wrapper isFavourite={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});