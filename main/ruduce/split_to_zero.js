'use strict';

function spilt_to_zero(number, interval) {
  var res = [];
  var item = number;
  res.push(item);
  do {
    item = Number((item - interval).toFixed(1));
    res.push(item);
  } while (item > 0);
  return res;
}

module.exports = spilt_to_zero;
