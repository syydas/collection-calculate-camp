"use strict";
let single_element = function(collection) {
  let tempArr = collection.filter((value, index) => {
    if (1 === index % 2) {
      return value;
    }
  });
  let res = [];
  tempArr.forEach(item => {
    if (tempArr.indexOf(item) === tempArr.lastIndexOf(item)) {
      res.push(item);
    }
  });
  return res;
};
module.exports = single_element;
