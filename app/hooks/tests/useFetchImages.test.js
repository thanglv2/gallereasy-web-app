import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import useFetchImages from '../useFetchImages';

function HookWrapper({ hook }) { // eslint-disable-line
  const result = hook ? hook() : undefined;
  return <div hook={result} />;
}
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('useFormField', () => {
  it('should render', () => {
    const wrapper = shallow(<HookWrapper />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    const wrapper = shallow(<HookWrapper hook={() => useFetchImages({})} />);
    const { hook } = wrapper.find('div').props();
    const { images, isLoading } = hook;
    expect(isLoading).toEqual(false);
    expect(images).toEqual([]);
  });

  it('should fetch images', async () => {
    const mockSuccessResponse = {
      data: [{
        id: 0,
        images: {
          fixed_width_still: {
            url: "url_0"
          }
        },
        title: "image_0"
      }]
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    await act(async () => {
      render(<HookWrapper hook={() => useFetchImages({ searchText: 'test', currentPage: 0 })} />, container);
    });

    expect(global.fetch).toHaveBeenCalled();
  });

  it('should fetch more images', async () => {
    const mockSuccessResponse = {
      data: [{
        id: 0,
        images: {
          fixed_width_still: {
            url: "url_0"
          }
        },
        title: "image_0"
      }]
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    await act(async () => {
      render(<HookWrapper hook={() => useFetchImages({ searchText: '', currentPage: 1 })} />, container);
    });
    expect(global.fetch).toHaveBeenCalled();
  });
});