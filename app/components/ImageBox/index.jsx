import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Heart from './Heart';

export default function ImageBox({ image, setFavourite }) {
  const { url, title, isFavourite } = image;
  return (
    <Wrapper
      isFavourite={isFavourite}
      onClick={() => setFavourite(image)}>
      <img
        src={url}
        alt={title}
      />
      <Heart />
    </Wrapper>
  )
}

ImageBox.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    isFavourite: PropTypes.bool
  }).isRequired,
  setFavourite: PropTypes.func.isRequired
}
