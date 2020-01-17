"use strict";

function compute_chain_median(collection) {
  let arr = collection.split("->").map(item => parseInt(item));
  arr = arr.sort((a, b) => a - b);
  let arrLength = arr.length;
  if (arrLength % 2) {
    return arr[(arrLength - 1) / 2];
  } else {
    return (arr[arrLength / 2 - 1] + arr[arrLength / 2]) / 2;
  }
}

module.exports = compute_chain_median;
