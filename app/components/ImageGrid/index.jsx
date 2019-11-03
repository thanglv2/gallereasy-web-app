import React from 'react';
import PropTypes from 'prop-types';
import ImageBox from 'components/ImageBox';
import Wrapper from './Wrapper';
import Grid from './Grid';

export default function ImageGrid({ images = [], setFavourite }) {
  return (
    <Wrapper>
      <Grid>
        {images.map((image, index) => <ImageBox key={`${image.id}-${index}`} image={image} setFavourite={setFavourite}/>)}
      </Grid>
    </Wrapper>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  setFavourite: PropTypes.func.isRequired,
}
