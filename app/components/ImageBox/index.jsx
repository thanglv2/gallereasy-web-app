import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGrid({ url, isFavourite, title }) {
  return (
    <img
      src={url}
      alt={title}
    />
  )
}

ImageGrid.propTypes = {
  url: PropTypes.string,
  isFavourite: PropTypes.bool,
  title: PropTypes.string
}
