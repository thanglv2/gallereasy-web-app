import React from 'react';
import PropTypes from 'prop-types';
import ImageBox from 'components/ImageBox';
import Wrapper from './Wrapper';

export default function ImageGrid({ images = [] }) {
  return (
    <Wrapper>
      {images.map(image => <ImageBox key={image.id} url={image.url} isFavourite={image.isFavourite} />)}
    </Wrapper>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}
