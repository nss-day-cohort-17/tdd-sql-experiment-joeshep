const sqlite3 = require('sqlite3');
const path = require('path');
const { createTables } = require('./makeTable');

let db;

(function createDb() {
  // http://stackoverflow.com/questions/27766734/dealing-with-relative-paths-with-node-js
  db = new sqlite3.Database('acme.sqlite', createTables);
}());

