'use strict';

function find_last_even(collection) {
  let res = 0;
  for (let item of collection) {
    if (0 === item % 2) {
      res = item;
    }
  }
  return res;
}

module.exports = find_last_even;
