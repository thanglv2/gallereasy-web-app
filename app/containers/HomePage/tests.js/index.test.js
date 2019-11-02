import React from 'react'
import { shallow, mount } from 'enzyme'

import HomePage from '../index';

describe('<HomePage />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<HomePage />)
    expect(renderedComponent.length).toEqual(1)
  });

  // it('should reset currentPage state when enter on SearchBox', () => {
  //   const wrapper = mount(<HomePage />)
  //   console.log('wrapper HomePage', wrapper.state.currentPage)
  // });
});
