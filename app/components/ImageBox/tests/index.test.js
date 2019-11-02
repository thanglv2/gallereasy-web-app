import React from 'react'
import { shallow } from 'enzyme';

import ImageBox from '../index';

describe('<ImageBox />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<ImageBox />)
    expect(renderedComponent.length).toEqual(1)
  });
});

