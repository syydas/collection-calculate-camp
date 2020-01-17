"use strict";
var single_element = function(collection) {
  var tempArr = collection.filter(function(value, index) {
    if (1 === index % 2) {
      return value;
    }
  });
  var res = [];
  for (var item of tempArr) {
    if (tempArr.indexOf(item) === tempArr.lastIndexOf(item)) {
      res.push(item);
    }
  }
  return res;
};
module.exports = single_element;
