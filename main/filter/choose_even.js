"use strict";

function choose_even(collection) {
  let res = [];
  for (let item of collection) {
    if (0 === item % 2) {
      res.push(item);
    }
  }
  return res;
}

module.exports = choose_even;
