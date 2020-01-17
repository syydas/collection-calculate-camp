'use strict';

function double_to_one(collection) {
  let res = [];
  for (let item of collection) {
    if (item instanceof Array) {
      for (let itemIn of item) {
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
