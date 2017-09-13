import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('starting the app', () => {
  it('should render without crashing', () => {
    const app = renderer.create(<App/>);
  });
});