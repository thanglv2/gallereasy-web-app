import React, { useState, useCallback } from 'react';
import SearchBox from 'components/SearchBox';
import ImageGrid from 'components/ImageGrid';
import LoadingBox from 'components/LoadingBox';
import Button from 'components/Button';
import useFetchImages from 'hooks/useFetchImages';

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState({});
  const { images, isLoading } = useFetchImages(query);

  const handleSearch = useCallback(() => {
    setQuery({ searchText });
    setCurrentPage(0);
  }, [searchText]);

  const handleLoadMore = useCallback(() => {
    const newPage = currentPage + 1;
    setQuery({ searchText, currentPage: newPage });
    setCurrentPage(newPage);
  }, [searchText, currentPage]);

  return (
    <>
      <SearchBox
        text={searchText}
        onChange={setSearchText}
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
