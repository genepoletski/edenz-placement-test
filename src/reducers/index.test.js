import index from './index';

describe('Reducers', () => {
  it('root reducer must be a function', () => {
    expect(index).toBeInstanceOf(Function);
  });
});