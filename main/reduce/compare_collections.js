"use strict";

function compare_collections(collection_a, collection_b) {
  return collection_a.sort().toString() === collection_b.sort().toString();
}

module.exports = compare_collections;
