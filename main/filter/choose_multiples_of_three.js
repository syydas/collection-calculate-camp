"use strict";

function choose_multiples_of_three(collection) {
  let res = [];
  for (let item of collection) {
    if (0 === item % 3) {
      res.push(item);
    }
  }
  return res;
}

module.exports = choose_multiples_of_three;
