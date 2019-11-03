import React from 'react'
import { mount } from 'enzyme'

import HomePage from '../index';

let wrapper;

beforeEach(() => {
  wrapper = mount(<HomePage />);
});

describe('<HomePage />', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation(init => [init, setState]);

  describe('Render', () => {
    it('render without error', () => {
      expect(wrapper.length).toEqual(1)
    });
  })

  // describe('Update state', () => {
  //   it('should update value of input', () => {
  //     const event = {
  //       target: { value: 'test' },
  //     }
  //     wrapper.find('input').simulate('change', event);;
  //     expect(wrapper.find('input').text()).toEqual('test');
  //   });
  // });
});
