'use strict';

function double_to_one(collection) {
  var res = [];
  for (var item of collection) {
    if (item instanceof Array) {
      for (var itemIn of item) {
        res.push(itemIn);
      }
    }
    else {
      res.push(item);
    }
  }
  return res;
  //return (collection + '').split(',').map(x => Number(x));
}

module.exports = double_to_one;
