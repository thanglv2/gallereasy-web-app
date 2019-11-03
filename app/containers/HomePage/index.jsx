import React, { useState, useCallback, memo } from 'react';
import SearchBox from 'components/SearchBox';
import ImageGrid from 'components/ImageGrid';
import LoadingBox from 'components/LoadingBox';
import Button from 'components/Button';
import useFetchImages from 'hooks/useFetchImages';
import useFavourites from 'hooks/useFavourites';

export default memo(function HomePage() {
  const [keyword, setKeyword] = useState("");
  const { favourites, setFavourite } = useFavourites();
  const { images, isLoading, updateImage, fetchImages } = useFetchImages(keyword, favourites);
  
  const updateFavourite = useCallback((image) => {
    updateImage(image);
    setFavourite(image);
  }, [updateImage, setFavourite])

  const handleSearch = useCallback(() => {
    fetchImages();
  }, [keyword, fetchImages]);

  const handleLoadMore = useCallback(() => {
    fetchImages(true);
  }, [keyword, fetchImages]);

  return (
    <>
      <SearchBox
        text={keyword}
        onChange={setKeyword}
        handleSearch={handleSearch}
      />
      <ImageGrid images={images} setFavourite={updateFavourite} />
      <LoadingBox loading={isLoading}>
        {images.length > 0 && (
          <Button
            onClick={handleLoadMore}>
            Fetch more
        </Button>
        )}
      </LoadingBox>
    </>
  )
});
