import GiphyServices from 'services/GiphyServices';
import axios from 'axios';

jest.mock('axios');

describe('GiphyServices', () => {
  const mockSuccessResponse = {
    data: {
      data: [{
        id: 0,
        images: {
          fixed_width_still: {
            url: "url_0"
          }
        },
        title: "image_0"
      }]
    }
  };

  it('should fetch images', async () => {
    const mockQuery = {
      keyword: "test"
    }
    
    axios.get.mockImplementation(() => Promise.resolve(mockSuccessResponse))
    const result = await GiphyServices.fetchImages(mockQuery);
    expect(result).toEqual([{ id: 0, url: 'url_0', isFavourite: false, title: 'image_0' }]);
    expect(axios.get).toHaveBeenCalled();
  });
  
  it('should return correct result images', async () => {
    const mockQuery = {
      keyword: "test",
      currentPage: 0,
      favourites: [{ id:  0}, { id: 2 }]
    }
    axios.get.mockImplementation(() => Promise.resolve(mockSuccessResponse))
    const result = await GiphyServices.fetchImages(mockQuery);
    expect(result).toEqual([{ id: 0, url: 'url_0', isFavourite: true, title: 'image_0' }]);
    expect(axios.get).toHaveBeenCalled();
  });
});