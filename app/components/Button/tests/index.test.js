import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  const onClick = jest.fn();
  it('should execute action when click', () => {
    const renderedComponent = mount(<Button onClick={onClick}>Button</Button>);
    renderedComponent.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});

