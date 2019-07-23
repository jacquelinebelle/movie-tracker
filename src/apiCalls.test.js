import React from 'react';
import { fetchMovies, fetchStoreProperties } from './apiCalls';


describe('apiCalls', () => {
  describe('fetchMovies', () => {
    let mockMovies;

    beforeEach(() => {
      mockMovies = {results: [{"title": "A"}, {"title":"B"}]}

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockMovies)
        })
      })
    })

    it('should be called with the correct URL', () => {
      const expected = 'http://api.themoviedb.org/3/movie/now_playing?api_key=b6a9c244f525ef1a2fe0110d010ba4aa&language=en-US&include_adult=false&page=1'
      
      fetchMovies()
      
      expect(window.fetch).toHaveBeenCalledWith(expected)
    })

    it('HAPPY: should return with a parsed response', async () => {
      const result = await fetchMovies();

      expect(result).toEqual(mockMovies.results);
    })

    it('SAD: should return an error if the answer is not ok', () => {
      window.fetch = jest.fn().mockImplementation(()=> {
        return Promise.resolve({
          ok: false
        })
      })

      expect(fetchMovies()).rejects.toEqual(Error('Error fetching movies'))
    })

  });

  describe('fetchStoreProperties', () => {
    let mockUser;

    beforeEach(() => {
      mockUser = {name: "A"}

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockUser)
        })
      })
    }) 

    let mockUrl = 'http://api.themoviedb.org/3/movie/now_playing?api_key=b6a9c244f525ef1a2fe0110d010ba4aa&language=en-US&include_adult=false&page=1'
    let mockObject = {name: "A"}
    let mockMethod = 'POST'
    let mockError = 'error fetching new user'

    it('should be called with the correct url, object, method and error', async () => {
      const mockOptions =  {"body": "{\"name\":\"A\"}", "headers": {"Content-Type": "application/json"}, "method": "POST"}

      fetchStoreProperties(mockUrl, mockObject, mockMethod, mockError)

      expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
    })

    it('HAPPY: should return a parsed response', async () => {
      const result = await fetchStoreProperties(mockUrl, mockObject, mockMethod, mockError);

      expect(result).toEqual(mockUser)
    })

    it('SAD: shoud return an error of the response is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok:false
        })
      })

      expect(fetchStoreProperties(mockUrl, mockObject, mockMethod, mockError)).rejects.toEqual(Error('error fetching new user'));
    })

  })
})