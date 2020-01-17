'use strict';

function get_union(collection_a, collection_b) {
  let res = new Set(collection_a.concat(collection_b));
  return [...res];
}

module.exports = get_union;

