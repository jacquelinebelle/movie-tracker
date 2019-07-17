import { GetMoviesReducer } from './GetMoviesReducer';

describe('GetMoviesReducer', () => {
  
  it('should return default state', () => {
    const expected = [];
    const result = GetMoviesReducer(undefined, {});
    
    expect(result).toEqual(expected);
  })

  it('should set movies to state on SET_MOVIES', () => {
    const movies = [{title: "movie1"}, {title:"movie2"}]
    const actionObject = {
      type: 'SET_MOVIES',
      movies: movies
    }

    const result = GetMoviesReducer(undefined, actionObject)

    expect(result).toEqual(movies)
  })
})