const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
      var isRealStr = isRealString(123);
      expect(isRealStr).toBe(false);
    });

    it('should reject string with only spaces', () => {
      var isRealStr = isRealString('   ');
      expect(isRealStr).toBe(false);
    });

    it('should allow string with non space characters', () => {
      var isRealStr = isRealString('test one');
      expect(isRealStr).toBe(true);
    });
});
