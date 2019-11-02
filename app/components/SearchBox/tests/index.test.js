import React from 'react'
import { shallow } from 'enzyme'

import Input from '../index';

describe('<HomePage />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<Input />)
    expect(renderedComponent.length).toEqual(1)
  });
});
