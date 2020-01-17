'use strict';

let even_to_letter = require("../../../main/superposition_operation/collection_operation/letter_mapping_1.js");

describe('even_to_letter', function() {

  let collection = [1,2,3,4,5,6,7,8,9,10];

  it('数组的每个偶数映射为字母', function() {

    let result = even_to_letter(collection);

    expect(result).toEqual(['b','d','f','h','j']);
  })
});
