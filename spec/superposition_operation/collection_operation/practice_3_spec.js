'use strict';

let hybrid_operation_to_uneven = require("../../../main/superposition_operation/collection_operation/practice_3.js");

describe('hybrid_operation_to_uneven', function() {

  let collection = [1,5,7,12,11,35,54,67,70];

  it('每一个奇数*3+5再求总和', function() {

    let result = hybrid_operation_to_uneven(collection);

    expect(result).toEqual(408);
  })
});
