import React from 'react';
import { shallow } from 'enzyme';

import MenuLink from '../index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteMatch: () => true,
}));

describe('<MenuLink />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<MenuLink to="/">Content</MenuLink>);
    expect(renderedComponent.length).toEqual(1);
    expect(renderedComponent.text()).toContain('Content');
    expect(renderedComponent.hasClass('active')).toEqual(true);
  });
});
