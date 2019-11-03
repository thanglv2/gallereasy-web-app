import config from '../config';

const { GIPHY_IMAGES_URL, GIPHY_API_KEY, IMAGES_PER_PAGE } = config;

async function fetchImages({ keyword, currentPage = 0, favourites = [] }) {
  const offset = IMAGES_PER_PAGE * currentPage;
  const response = await fetch(
    `${GIPHY_IMAGES_URL}?api_key=${GIPHY_API_KEY}&q=${keyword}&limit=${IMAGES_PER_PAGE}}&offset=${offset}&rating=G&lang=en`
  );
  const json = await response.json();
  const result = json.data.map(item => {
    return {
      id: item.id,
      url: item.images.fixed_width_still.url,
      isFavourite: !!favourites.find(favourite => favourite.id === item.id),
      title: item.title
    };
  });
  return result;
}

export default { fetchImages };