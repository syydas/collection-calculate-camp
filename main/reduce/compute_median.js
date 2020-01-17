"use strict";

function compute_median(collection) {
  collection = collection.sort((a, b) => a - b);
  let index = 0;
  if (collection.length % 2) {
    index = parseInt(collection.length / 2);
    return collection[index];
  } else {
    index = collection.length / 2;
    return (collection[index - 1] + collection[index]) / 2;
  }
}

module.exports = compute_median;
