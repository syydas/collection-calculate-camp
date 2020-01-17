"use strict";

function compute_chain_median(collection) {
  var median = 0;
  var tmpArr = collection.split("->");
  var arr = [];
  for (var item of tmpArr) {
    arr.push(parseInt(item));
  }
  arr = arr.sort(function(a, b) {
    return a - b;
  })
  if (arr.length % 2 !== 0) {
    var index = parseInt(arr.length / 2);
    median = arr[index];
  }
  else {
    var index = arr.length / 2;
    median = (arr[index - 1] + arr[index]) / 2;
  }
  return median;
}

module.exports = compute_chain_median;
