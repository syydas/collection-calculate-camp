"use strict";

function get_intersection(collection_a, collection_b) {
  var res = [];
  for (var itemB of collection_b) {
    for (var itemA of collection_a) {
      if (itemA === itemB) {
        res.push(itemB);
      }
    }
  }
  return res;
}

module.exports = get_intersection;
