import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { NavigationBar, Menu } from '../NavigationBar';

describe('<NavigationBar />', () => {
  it('render without error', () => {
    const theme = {
      grey: 'grey'
    }
    const tree = renderer.create(<NavigationBar theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});

describe('<Menu />', () => {
  it('render without error', () => {
    const theme = {
      dimgrey: 'dimgrey',
      grey: 'grey'
    }
    const tree = renderer.create(<Menu theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
