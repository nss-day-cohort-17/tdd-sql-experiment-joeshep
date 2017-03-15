'use strict';

const sqlite3  = require('sqlite3');
const db = new sqlite3.Database('./acme.sqlite', (wat) => {
  console.log("Is this connection open?", wat);
});

const getCustomer = (custPhone) => {
  return new Promise( (resolve, reject) => {
    db.get(`SELECT first_name, last_name FROM customers WHERE phone = "${custPhone}"`, (err, customer) => {
      let customerName = `${customer.first_name} ${customer.last_name}`;
      resolve(customerName);
    });
  });
}

module.exports = { getCustomer }
