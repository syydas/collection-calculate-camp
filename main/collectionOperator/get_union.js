'use strict';

function get_union(collection_a, collection_b) {
  let i = 0;
  while (i < collection_b.length) {
    if (-1 === collection_a.indexOf(collection_b[i])) {
      collection_a.push(collection_b[i]);
    }
    i++;
  }
  return collection_a;
}

module.exports = get_union;

