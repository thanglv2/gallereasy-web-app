import { useState, useCallback } from 'react';
import produce from "immer";

import GiphyServices from 'services/GiphyServices';

function useFetchImages(keyword, favourites) {
  const [imagesData, setImagesData] = useState({
    isLoading: false,
    images: [],
    currentPage: 0
  });

  const updateImage = useCallback(_image => {
    const imageIndexs = [];
    imagesData.images.filter((image, index) => {
      const isFound = image.id === _image.id;
      if (isFound) imageIndexs.push(index);
      return isFound;
    });
    if (imageIndexs.length > 0) {
      const newImages = produce(imagesData.images, draftState => {
        imageIndexs.map(index => {
          draftState[index].isFavourite = !draftState[index].isFavourite // eslint-disable-line
        }); 
      });
      setImagesData({ ...imagesData, images: newImages });
    }
  }, [imagesData]);

  const fetchImages = useCallback(async (isLoadMore) => {
    try {
      let freshImages = [];
      let currentPage = 0;
      if (isLoadMore) {
        freshImages = imagesData.images;
        currentPage = imagesData.currentPage + 1;
      }      
      setImagesData({ images: freshImages, isLoading: true, currentPage });
      const newImages = await GiphyServices.fetchImages({keyword, currentPage, favourites});
      setImagesData({ images: freshImages.concat(newImages), isLoading: false, currentPage });
    } catch (error) {
      setImagesData({ images: [], isLoading: false, currentPage: 0 });
    }
  }, [keyword, imagesData]);

  return { ...imagesData, fetchImages, updateImage };
}

export default useFetchImages;