import React from 'react'
import { shallow } from 'enzyme'

import FavouritesPage from '../index';

describe('<FavouritesPage />', () => {
  it('render without error', () => {
    const renderedComponent = shallow(<FavouritesPage />)
    expect(renderedComponent.length).toEqual(1)
  });
});
