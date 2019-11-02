import React from 'react';
import renderer from 'react-test-renderer';

import StyledButton from '../StyledButton';

describe('<StyledButton />', () => {
  const onClick = jest.fn();

  it('render without error', () => {
    const theme = {
      dodgerblue: 'dodgerblue'
    }
    const tree = renderer.create(<StyledButton theme={theme} onClick={onClick} />).toJSON()
    expect(tree).toMatchSnapshot()
  });
});
