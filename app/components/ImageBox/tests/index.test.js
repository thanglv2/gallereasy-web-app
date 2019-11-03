import React from 'react'
import { shallow } from 'enzyme';

import ImageBox from '../index';

describe('<ImageBox />', () => {
  const setFavourite = jest.fn();
  const mockImage = {}
  it('render without error', () => {
    const renderedComponent = shallow(<ImageBox setFavourite={setFavourite} image={mockImage} />)
    expect(renderedComponent.length).toEqual(1)
  });

  it('should trigger setFavourite', () => {
    const renderedComponent = shallow(<ImageBox setFavourite={setFavourite} image={mockImage} />)
    renderedComponent.simulate('click');
    expect(setFavourite).toHaveBeenCalled();
  });
});

