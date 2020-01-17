"use strict";

function compute_chain_median(collection) {
  let median = 0;
  let tmpArr = collection.split("->");
  let arr = [];
  for (let item of tmpArr) {
    arr.push(parseInt(item));
  }
  arr = arr.sort(function(a, b) {
    return a - b;
  })
  if (arr.length % 2 !== 0) {
    let index = parseInt(arr.length / 2);
    median = arr[index];
  }
  else {
    let index = arr.length / 2;
    median = (arr[index - 1] + arr[index]) / 2;
  }
  return median;
}

module.exports = compute_chain_median;
