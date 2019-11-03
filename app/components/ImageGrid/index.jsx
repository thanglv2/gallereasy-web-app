import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import ImageBox from 'components/ImageBox';
import Wrapper from './Wrapper';
import Grid from './Grid';
import HiddenItem from './HiddenItem';

export default function ImageGrid({ images = [], setFavourite }) {
  const imageBoxs = useMemo(() => {
    return images.map((image, index) => 
      <ImageBox
        key={`${image.id}-${index}`}
        image={image}
        setFavourite={setFavourite}
      />
    );
  }, [images, setFavourite]);

  const hiddenItems = useMemo(() => {
    return images.length > 3 && (<><HiddenItem /><HiddenItem /><HiddenItem /></>);
  }, [images]);
  
  return (
    <Wrapper>
      <Grid>
        {imageBoxs}
        {hiddenItems}
      </Grid>
    </Wrapper>
  )
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  setFavourite: PropTypes.func.isRequired,
}
