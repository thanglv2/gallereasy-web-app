import GiphyServices from 'services/GiphyServices';

describe('GiphyServices', () => {
  it('should fetch images', async () => {
    const mockQuery = {
      keyword: "test"
    }
    const mockSuccessResponse = {
      data: [{
        id: 0,
        images: {
          fixed_width_still: {
            url: "url_0"
          }
        },
        title: "image_0"
      }]
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await GiphyServices.fetchImages(mockQuery);
    expect(result).toEqual([{ id: 0, url: 'url_0', isFavourite: false, title: 'image_0' }]);
    expect(global.fetch).toHaveBeenCalled();
  });
  
  it('should return correct result images', async () => {
    const mockQuery = {
      keyword: "test",
      currentPage: 0,
      favourites: [{ id:  0}, { id: 2 }]
    }
    const mockSuccessResponse = {
      data: [{
        id: 0,
        images: {
          fixed_width_still: {
            url: "url_0"
          }
        },
        title: "image_0"
      }]
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const result = await GiphyServices.fetchImages(mockQuery);
    expect(result).toEqual([{ id: 0, url: 'url_0', isFavourite: true, title: 'image_0' }]);
    expect(global.fetch).toHaveBeenCalled();
  });
});