'use strict';

function collect_min_number(collection) {
  let min = collection[0];
  for (let item = 1; item < collection.length; item++) {
    if (min > collection[item]) {
      min = collection[item];
    }
  }
  return min;
}

module.exports = collect_min_number;

