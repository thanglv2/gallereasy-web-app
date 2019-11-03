import { useState, useEffect } from 'react';
import produce from "immer";

let listeners = [];
let favourites = [];

const broadcastListeners = () => {
  listeners.forEach((listener) => {
    listener(favourites);
  });
} 

const fetchFavourites = () => {
  const savedFavourites = JSON.parse(localStorage.getItem('gallereasy-favourites'));
  if (savedFavourites) {
    favourites = savedFavourites;
    broadcastListeners();
  }
}

const saveFavourites = () => {
  localStorage.setItem('gallereasy-favourites', JSON.stringify(favourites));
}

const setFavourite = (image) => {
  const newFavourites = favourites.filter(favourite => favourite.id !== image.id);
  if (newFavourites.length === favourites.length) { // new favourite Image => add favourite
    favourites = produce(favourites, draftState => {
      draftState.push({ ...image, isFavourite: true });
    })
  } else { // existed favourite image => remove favourite
    favourites = newFavourites;
  }
  saveFavourites(favourites);
  broadcastListeners();
};

const useFavourites = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter(listener => listener !== newListener);
    };
  }, []);
  
  return { favourites, setFavourite };
};

export default useFavourites;
export { fetchFavourites };