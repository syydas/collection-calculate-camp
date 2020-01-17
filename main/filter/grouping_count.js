'use strict';

function grouping_count(collection) {
  let res = [];
  collection.sort();
  for (let i = 0; i < collection.length;) {
    let count = 0;
    for (let j = i; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        count++;
      }
    }
    res[collection[i]] = count;
    i += count;
  }
  return res;
}

module.exports = grouping_count;
