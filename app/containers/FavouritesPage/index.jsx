import React, {memo, useMemo} from 'react';
import ImageGrid from 'components/ImageGrid';
import useFavourites from 'hooks/useFavourites';
import Wrapper from './Wrapper';

export default memo(function FavouritesPage() {
  const { favourites, setFavourite } = useFavourites();

  const label = useMemo(() => {
    const descriptionText = (<>
      <h3><center>This is your favourites.<br/>Click on an image to remove it.</center></h3>
      <ImageGrid images={favourites} setFavourite={setFavourite} />
    </>);
    const warningText = (<h3><center>You have not had any favourite images yet!</center></h3>);
    return favourites.length > 0 ? descriptionText : warningText;
  }, [favourites, setFavourite]);

  return (
    <Wrapper>
      {label}
    </Wrapper>
  )
});
