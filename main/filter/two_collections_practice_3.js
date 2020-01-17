'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let res = [];
   for (let itemA of collection_a) {
      for (let itemB of collection_b) {
      if (0 === itemA % itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = choose_divisible_integer;
