import React, {memo} from 'react';
import ImageGrid from 'components/ImageGrid';
import useFavourites from 'hooks/useFavourites';

export default memo(function FavouritesPage() {
  const { favourites, setFavourite } = useFavourites();

  return (
    <>
      {
        favourites.length > 0 ?
          <ImageGrid images={favourites} setFavourite={setFavourite} /> :
          <h3><center>You have not had any favourite images yet!</center></h3>
      }
    </>
  )
});
