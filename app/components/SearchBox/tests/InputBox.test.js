import React from 'react';
import renderer from 'react-test-renderer';

import Wrapper from '../Wrapper';

describe('<Wrapper />', () => {
  it('render without error', () => {
    const theme = {
        bg: 'bg',
        grey: 'grey'
    }
    const tree = renderer.create(<Wrapper theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
