import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

export default function SearchBox({ text = "", onChange, handleSearch }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <Wrapper>
      <input
        placeholder="Start searching for images!"
        value={text}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </Wrapper>
  )
}

SearchBox.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired
}
