import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, LoadingIndicator } from './LoadingIndicator';

export default function LoadingBox({ loading, children }) {
  return (
    <Wrapper>
      { loading ? <LoadingIndicator /> : children }
    </Wrapper>
  )
}

LoadingBox.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired
}
