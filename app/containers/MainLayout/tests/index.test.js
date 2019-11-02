import React from 'react'
import { shallow } from 'enzyme'

import MainLayout from '../index';

describe('<MainLayout />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<MainLayout />)
    expect(renderedComponent.length).toEqual(1)
  });
});
