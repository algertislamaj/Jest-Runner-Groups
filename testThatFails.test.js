/**
 * @group faiure
 */

const addition = require('./addition');
test('adds 4 + 2 to equal 8 which means that it should fail everytime', () => {
   expect(addition(4, 2)).toBe(8);
});
