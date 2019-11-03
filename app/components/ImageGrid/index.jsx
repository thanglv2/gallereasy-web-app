import React from 'react';
import PropTypes from 'prop-types';
import ImageBox from 'components/ImageBox';
import Wrapper from './Wrapper';

export default function ImageGrid({ images = [], setFavourite }) {
  return (
    <Wrapper>
      {images.map((image, index) => <ImageBox key={`${image.id}-${index}`} image={image} setFavourite={setFavourite}/>)}
    </Wrapper>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  setFavourite: PropTypes.func.isRequired,
}
