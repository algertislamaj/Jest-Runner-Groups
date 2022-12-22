/**
 * @group bcn
 */

const addition = require('./addition');
test('adds 4 + 2 to equal 6', () => {
   expect(addition(4, 2)).toBe(6);
});
