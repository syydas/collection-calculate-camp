'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var res = [];
   for (var item of collection) {
     if (0 !== item % 2) {
       res.push(item * 3 + 2);
     }
   }
   return res;
}

module.exports = hybrid_operation_to_uneven;

