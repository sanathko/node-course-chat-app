const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
      var res = generateMessage('sanath', 'Test call');
      expect(res.from).toEqual('sanath');
      expect(res.text).toEqual('Test call');
      expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate the correct location obeject', () => {
      var res = generateLocationMessage('sanath', 1,2);
      var url = 'https://www.google.com/maps?q=1,2';
      var from = 'sanath';
      expect(res.createdAt).toBeA('number');
      expect(res.from).toEqual(from);
      expect(res.url).toEqual(url);
      expect(res).toInclude({from, url});
    });
});
