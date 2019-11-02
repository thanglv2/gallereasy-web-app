import React from 'react';
import { shallow } from 'enzyme';

import ImageGrid from '../index';
import ImageBox from '../../ImageBox';

describe('<ImageGrid />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render without error', () => {
    const renderedComponent = shallow(<ImageGrid />);
    expect(renderedComponent.length).toEqual(1);
    expect(renderedComponent.find(ImageBox).length).toBe(0);
  });

  it('render correct images', () => {
    const mockImages = [{
      id: 0,
      url: 'url_0',
      isFavourite: false
    }, {
      id: 1,
      url: 'url_2',
      isFavourite: true
    }];
    const renderedComponent = shallow(<ImageGrid images={mockImages} />);
    expect(renderedComponent.find(ImageBox).length).toBe(2);
  });
});
