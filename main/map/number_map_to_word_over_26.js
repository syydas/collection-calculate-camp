'use strict';
let number_map_to_word_over_26 = function(collection){
  let res = [];
  res = collection.map(item => {
    let flag = parseInt(item / 27);
    if (flag === 0) {
      return String.fromCharCode(item + 96);
    } else {
      let letter = String.fromCharCode((item % 26) + 96);
      return String.fromCharCode(flag + 96).concat(letter);
    }
  })
  return res;
};

module.exports = number_map_to_word_over_26;
