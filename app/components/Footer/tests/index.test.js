import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../index';

describe('<Footer />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<Footer />)
    expect(renderedComponent.length).toEqual(1)
  });
});
