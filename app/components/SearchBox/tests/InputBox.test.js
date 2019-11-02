import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import InputBox from '../InputBox';

describe('<InputBox />', () => {
  it('render without error', () => {
    const theme = {
        bg: 'bg',
        grey: 'grey'
    }
    const tree = renderer.create(<InputBox theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
    // expect(tree).toHaveStyleRule('color', 'grey')
    // expect(tree).toHaveStyleRule('background-color', 'bg')
  });
});
