"use strict";

function get_intersection(collection_a, collection_b) {
  let res = [];
  collection_b.forEach(itemB => {
    collection_a.forEach(itemA => {
      if (itemA === itemB) {
        res.push(itemB);
      }
    });
  });
  return res;
}

module.exports = get_intersection;
