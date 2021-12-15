// CommonJS module
// const greet = require('./greetings');

// ES module
import greet from './greetings';

describe('testing greet()', function() {
  it('returns Hello there if name is undefined', function() {
    expect(greet()).toEqual('Hello there!');
  });

  it('should say Hello name', function() {
    expect(greet('Selga')).toEqual('Hello, Selga');
  })
})

// describe('test sayGoodbye()', function() {

// })
