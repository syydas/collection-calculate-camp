'use strict';

function find_first_even(collection) {
  for (let item of collection) {
    if (0 === item % 2) {
      return item;
      break;
    }
  }
}

module.exports = find_first_even;

