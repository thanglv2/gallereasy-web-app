import React from 'react';
import { shallow } from 'enzyme';

import ImageGrid from '../index';
import ImageBox from '../../ImageBox';
import HiddenItem from '../HiddenItem';

describe('<ImageGrid />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const setFavourite = jest.fn()

  it('render without error', () => {
    const renderedComponent = shallow(<ImageGrid setFavourite={setFavourite} />);
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
      url: 'url_1',
      isFavourite: true
    }];
    const renderedComponent = shallow(<ImageGrid images={mockImages} setFavourite={setFavourite} />);
    expect(renderedComponent.find(ImageBox).length).toBe(2);
  });

  it('render hidden items', () => {
    const mockImages = [{
      id: 0,
      url: 'url_0',
      isFavourite: false
    }, {
      id: 1,
      url: 'url_1',
      isFavourite: true
    }, {
      id: 2,
      url: 'url_2',
      isFavourite: false
    }, {
      id: 3,
      url: 'url_3',
      isFavourite: true
    }];
    const renderedComponent = shallow(<ImageGrid images={mockImages} setFavourite={setFavourite} />);
    expect(renderedComponent.find(HiddenItem).length).toBe(3);
  });
});
