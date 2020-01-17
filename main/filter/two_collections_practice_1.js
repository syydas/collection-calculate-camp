'use strict';

function choose_common_elements(collection_a, collection_b) {
  var res = [];
   for (var itemA of collection_a) {
      for (var itemB of collection_b) {
        if (itemA === itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = choose_common_elements;
