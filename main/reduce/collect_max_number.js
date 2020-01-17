"use strict";

function collect_max_number(collection) {
  var max = collection[0];
  for (var item = 1; item < collection.length; item++) {
    if (max < collection[item]) {
      max = collection[item];
    }
  }
  return max;
}

module.exports = collect_max_number;
