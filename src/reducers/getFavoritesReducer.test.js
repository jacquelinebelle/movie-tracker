import { getFavoritesReducer } from './getFavoritesReducer';

describe('getFavoritesReducer', () => {
  
  it('should return default state', () => {
    const expected = [];
    const result = getFavoritesReducer(undefined, {});
    
    expect(result).toEqual(expected);
  })

  it('should set favorites to state on GET_FAVORITES', () => {
    const favorites = [{title: "movie1"}, {title:"movie2"}]
    const actionObject = {
      type: 'GET_FAVORITES',
      favorites: favorites
    }

    const result = getFavoritesReducer(undefined, actionObject)

    expect(result).toEqual(favorites)
  })
})