'use strict';
var number_map_to_word_over_26 = function(collection){
  var res = [];
  res = collection.map(item => {
    var flag = parseInt(item / 27);
    if (flag === 0) {
      return String.fromCharCode(item + 96);
    } else {
      var letter = String.fromCharCode((item % 26) + 96);
      return String.fromCharCode(flag + 96).concat(letter);
    }
  })
  return res;
};

module.exports = number_map_to_word_over_26;
