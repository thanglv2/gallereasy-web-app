import React, {memo} from 'react';
import ImageGrid from 'components/ImageGrid';
import useFavourites from 'hooks/useFavourites';
import Wrapper from './Wrapper';

export default memo(function FavouritesPage() {
  const { favourites, setFavourite } = useFavourites();

  return (
    <Wrapper>
      {
        favourites.length > 0 ?
          <>
            <h3><center>This is your favourites.<br />Click on an image to remove it.</center></h3>
            <ImageGrid images={favourites} setFavourite={setFavourite} />
          </> :
          <h3><center>You have not had any favourite images yet!</center></h3>
      }
    </Wrapper>
  )
});
