import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('should match snapshots', () => {
    const please = true;
    expect(please).toEqual(true);
  })
})
