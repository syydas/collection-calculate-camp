"use strict";
let single_element = function(collection) {
  let tempArr = collection.filter(function(value, index) {
    if (1 === index % 2) {
      return value;
    }
  });
  let res = [];
  for (let item of tempArr) {
    if (tempArr.indexOf(item) === tempArr.lastIndexOf(item)) {
      res.push(item);
    }
  }
  return res;
};
module.exports = single_element;
