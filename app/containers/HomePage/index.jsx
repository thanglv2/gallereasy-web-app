import React, { useState, useCallback } from 'react';
import SearchBox from 'components/SearchBox';
import ImageGrid from 'components/ImageGrid';
import LoadingBox from 'components/LoadingBox';
import Button from 'components/Button';
import useFetchImages from 'hooks/useFetchImages';

export default function HomePage() {
  const [keyword, setKeyword] = useState("");
  const { images, isLoading, fetchImageList } = useFetchImages(keyword);

  const handleSearch = useCallback(() => {
    fetchImageList();
  }, [keyword, fetchImageList]);

  const handleLoadMore = useCallback(() => {
    fetchImageList(true);
  }, [keyword, fetchImageList]);

  return (
    <>
      <SearchBox
        text={keyword}
        onChange={setKeyword}
        handleSearch={handleSearch}
      />
      <ImageGrid images={images} />
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
}
