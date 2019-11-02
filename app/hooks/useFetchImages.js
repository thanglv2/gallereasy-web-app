import { useEffect, useState } from 'react';
import config from '../config';

function useFetchImages({ searchText, currentPage = 0 }) {
  const [imagesData, setImagesData] = useState({
    isLoading: false,
    images: []
  });

  useEffect(() => {
    async function fetchImageList(isLoadMore) {
      const { GIPHY_IMAGES_URL, GIPHY_API_KEY, IMAGES_PER_PAGE } = config;
      const offset = IMAGES_PER_PAGE * currentPage;
      try {
        const freshImages = isLoadMore ? imagesData.images : [];
        setImagesData({ images: freshImages, isLoading: true });
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
        setImagesData({ images: freshImages.concat(newImages), isLoading: false });
      } catch (error) {
        setImagesData({ images: [], isLoading: false });
      }
    }

    if (searchText && !currentPage) {
      fetchImageList();
    } else if (currentPage) {
      fetchImageList(true);
    }
  }, [searchText, currentPage]);

  return { ...imagesData };
}

export default useFetchImages;