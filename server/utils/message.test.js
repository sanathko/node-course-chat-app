const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
      var res = generateMessage('sanath', 'Test call');
      expect(res.from).toEqual('sanath');
      expect(res.text).toEqual('Test call');
      expect(res.createdAt).toBeA('number');
    })
});
