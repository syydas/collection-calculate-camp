"use strict";

function choose_no_common_elements(collection_a, collection_b) {
  let res = [];
  for (let item of collection_a) {
    if (-1 === collection_b.indexOf(item)) {
      res.push(item);
    }
  }
  return res;
}

module.exports = choose_no_common_elements;
