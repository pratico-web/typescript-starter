import { asyncABC } from './async';

// tslint:disable:no-expression-statement
describe('getABC', () => {
  it('it returns abc', async () => {
    expect(await asyncABC()).toEqual(['a', 'b', 'c']);
  });
});
