import { useState, useCallback } from 'react';
import config from '../config';

function useFetchImages(searchText) {
  const [imagesData, setImagesData] = useState({
    isLoading: false,
    images: [],
    currentPage: 0
  });

  const fetchImageList = useCallback(async (isLoadMore) => {
    const { GIPHY_IMAGES_URL, GIPHY_API_KEY, IMAGES_PER_PAGE } = config;
    try {
      let freshImages = [];
      let currentPage = 0;
      if (isLoadMore) {
        freshImages = imagesData.images;
        currentPage = imagesData.currentPage + 1;
      }      
      setImagesData({ images: freshImages, isLoading: true, currentPage });
      const offset = IMAGES_PER_PAGE * currentPage;
      
      const response = await fetch(
        `${GIPHY_IMAGES_URL}?api_key=${GIPHY_API_KEY}&q=${searchText}&limit=${IMAGES_PER_PAGE}}&offset=${offset}&rating=G&lang=en`
      );
      const json = await response.json();
      const newImages = json.data.map(item => {
        return {
          id: item.id,
          url: item.images.fixed_width_still.url,
          isFavourite: false,
          title: item.title
        };
      })
      setImagesData({ images: freshImages.concat(newImages), isLoading: false, currentPage });
    } catch (error) {
      setImagesData({ images: [], isLoading: false, currentPage: 0 });
    }
  }, [searchText, imagesData]);

  return { ...imagesData, fetchImageList };
}

export default useFetchImages;