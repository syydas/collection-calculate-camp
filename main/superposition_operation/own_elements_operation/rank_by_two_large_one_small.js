"use strict";
function rank_by_two_large_one_small(collection) {
  let sortCollection = collection.sort(function(x, y) {
    return x - y;
  });
  let rankCollection = sortCollection.slice();
  for (let i = 0; i < collection.length - 2; i += 3) {
    rankCollection[i] = collection[i + 1];
    rankCollection[i + 1] = collection[i + 2];
    rankCollection[i + 2] = collection[i];
  }
  return rankCollection;
}

module.exports = rank_by_two_large_one_small;
