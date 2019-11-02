import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import FooterContainer from '../Wrapper';

describe('<NavigationBar />', () => {
  it('render without error', () => {
    const theme = {
        dimgrey: 'dimgrey',
        darkgrey: 'darkgrey'
    }
    const tree = renderer.create(<FooterContainer theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
