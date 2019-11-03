import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import GiphyServices from 'services/GiphyServices';

import useFavourites from '../useFavourites';

function HookWrapper({ hook }) { // eslint-disable-line
  const result = hook ? hook() : undefined;
  return <div hook={result} />;
}

describe('useFavourites', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useFavourites()} />);
    const { hook } = wrapper.find('div').props();
    const { favourites } = hook;
    expect(favourites).toEqual([]);
  });

  it('should add Favourite', async () => {

    jest.spyOn(GiphyServices, 'fetchImages').mockImplementation(() => {});

    const wrapper = mount(<HookWrapper hook={() => useFavourites()} />);
    const { hook } = wrapper.find('div').props();
    const { setFavourite } = hook;
    await act(async () => {
      setFavourite({ id: 0 })
    });
    await act(async () => {
      setFavourite({ id: 0 })
    });
    
    // jest.spyOn(localStorage, 'setItem').mockImplementation(() => jest.fn());
    // expect(localStorage.setItem).toHaveBeenCalled();
  });

});