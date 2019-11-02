import React from 'react';
import PropTypes from 'prop-types';
import InputBox from './InputBox';

export default function SearchBox({ text = "" }) {
  return (
    <InputBox>
      <input
        placeholder="Start searching for images!"
        value={text}
      />
    </InputBox>
  )
}

SearchBox.propTypes = {
  text: PropTypes.string
}
