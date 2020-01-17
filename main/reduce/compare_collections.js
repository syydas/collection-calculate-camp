'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length === collection_b.length) {
    for (var item in collection_b) {
      if (collection_a[item] === collection_b[item])
      return true;
    }
  }
  else {
    return false;
  }
  
  //return collection_a.sort().toString() === collection_b.sort().toString();
}

module.exports = compare_collections;


