'use strict';

function choose_common_elements(collection_a, collection_b) {
  let res = [];
   for (let itemA of collection_a) {
      for (let itemB of collection_b) {
        if (itemA === itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = choose_common_elements;
