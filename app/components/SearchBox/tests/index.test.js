import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchBox from '../index';

describe('<Input />', () => {
  const setText = jest.fn();
  const handleSearch = jest.fn();
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render without error', () => {
    const renderedComponent = shallow(<SearchBox onChange={setText} handleSearch={handleSearch}/>)
    expect(renderedComponent.length).toEqual(1)
  });

  it('should update text', () => {
    const event = {
      target: { value: 'test' },
    }
    const renderedComponent = mount(<SearchBox text="123" onChange={setText} handleSearch={handleSearch}/>);
    renderedComponent.find('input').simulate('change', event);
    expect(setText).toBeCalledWith('test');
  });

  it('should execture handleSearch when enter', () => {
    const renderedComponent = mount(<SearchBox text="123" onChange={setText} handleSearch={handleSearch}/>);
    renderedComponent.find('input').simulate('keydown', {key: 'Enter'});
    expect(handleSearch).toHaveBeenCalled();
  });

  it('should not execute handleSearch if not needed', () => {
    const renderedComponent = mount(<SearchBox text="123" onChange={setText} handleSearch={handleSearch}/>);

    renderedComponent.find('input').simulate('keydown', { key: 'Up' });
    expect(handleSearch).not.toHaveBeenCalled();
  });
});
