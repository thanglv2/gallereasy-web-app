import React from 'react';
import { shallow } from 'enzyme';

import LoadingBox from '../index';
import { LoadingIndicator } from '../LoadingIndicator';

describe('<LoadingBox />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<LoadingBox>Content</LoadingBox>);
    expect(renderedComponent.length).toEqual(1);
    expect(renderedComponent.text()).toContain('Content');
  });

  it('render correct content', () => {
    const renderedComponent = shallow(<LoadingBox loading>Content</LoadingBox>);
    expect(renderedComponent.length).toEqual(1);
    expect(renderedComponent.text()).not.toContain('Content');
    expect(renderedComponent.find(LoadingIndicator).length).toBe(1);
  });
});
