'use strict';

function grouping_count(collection) {
  var res = [];
  collection.sort();
  for (var i = 0; i < collection.length;) {
    var count = 0;
    for (var j = i; j < collection.length; j++) {
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
