"use strict";
let is_exist_element = function(collection, element) {
  let res = collection.filter((value, index) => !(index % 2));
  return -1 !== res.indexOf(element);
};
module.exports = is_exist_element;
