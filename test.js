const { createTables, insertRows } = require('./makeTable')
const { assert: {equal} } = require('chai');
const { getCustomer } = require('./main');

describe('main', () => {
  describe('getCustomer', () => {

    before( (done) => {
      createTables();
      done();
    });

    it('should return a customer', () => {
      return getCustomer('615-555-5309')
      .then( (customer) => {
        equal("Danny Elfman", customer)
      });
    });

  });
});
