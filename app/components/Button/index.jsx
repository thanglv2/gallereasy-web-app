import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

export default function Button({ onClick, children }) {
  return (
    <StyledButton
      onClick={onClick}
      type="button"  
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
