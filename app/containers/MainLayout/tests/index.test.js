import React from 'react'
import { shallow } from 'enzyme'

import MainLayout from '../index';

describe('<MainLayout />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<MainLayout />)
    expect(renderedComponent.find('div').length).toBe(1)
  });
  it('should render correct text', () => {
    const renderedComponent = shallow(<MainLayout />)
    expect(renderedComponent.text()).toContain('Gallereasy web app')
  });
})
