import React from 'react'
import { shallow } from 'enzyme'

import Header from '../index';

describe('<Header />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<Header />)
    expect(renderedComponent.length).toEqual(1)
  });
});
