import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import GiphyServices from 'services/GiphyServices';

import useFetchImages from '../useFetchImages';

function HookWrapper({ hook }) { // eslint-disable-line
  const result = hook ? hook() : undefined;
  return <div hook={result} />;
}

afterEach(() => {
  jest.resetAllMocks();
})

describe('useFetchImages', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useFetchImages('')} />);
    const { hook } = wrapper.find('div').props();
    const { images, isLoading } = hook;
    expect(isLoading).toEqual(false);
    expect(images).toEqual([]);
  });

  it('should fetch images', async () => {
    jest.spyOn(GiphyServices, 'fetchImages').mockImplementation(() => []);
    const wrapper = mount(<HookWrapper hook={() => useFetchImages('Test')} />);
    const { hook } = wrapper.find('div').props();
    const { fetchImages } = hook;
    await act(async () => {
      fetchImages()
    });
    expect(GiphyServices.fetchImages).toHaveBeenCalled();
  });

  it('should fetch more images', async () => {
    jest.spyOn(GiphyServices, 'fetchImages').mockImplementation(() => []);

    const wrapper = mount(<HookWrapper hook={() => useFetchImages('Test')} />);
    const { hook } = wrapper.find('div').props();
    const { fetchImages } = hook;
    await act(async () => {
      fetchImages(true)
    });
    expect(GiphyServices.fetchImages).toHaveBeenCalled();
  });

  it('should update images', async () => {
    jest.spyOn(GiphyServices, 'fetchImages').mockImplementation(() => [{ id: 0 }]);

    let wrapper;

    await act(async () => {
      wrapper = mount(<HookWrapper hook={() => useFetchImages('Test', [{ id: 0, isFavourite: false }])} />)
    })
    const { hook } = wrapper.find('div').props();
    const { updateImage } = hook;

    await act(async () => {
      updateImage({ id: 0 })
    });

    // expect(isFavourite).toHaveBeenCalled();
  });
});