'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var res = [];
   for (var itemA of collection_a) {
      for (var itemB of collection_b) {
      if (0 === itemA % itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = choose_divisible_integer;
