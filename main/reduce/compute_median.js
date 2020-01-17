'use strict';

function compute_median(collection) {
  let median = 0;
  let index = 0;
  collection = collection.sort(function(a, b) {
    return a - b;
  });
  if (collection.length % 2 != 0) {
    index = parseInt(collection.length / 2);
    median = collection[index];
  } else {
    index = collection.length / 2;
    median = (collection[index - 1] + collection[index]) / 2;
  }
  return median;
}

module.exports = compute_median;


