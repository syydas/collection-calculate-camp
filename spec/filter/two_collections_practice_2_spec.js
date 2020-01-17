'use strict';

let choose_no_common_elements = require("../../main/filter/two_collections_practice_2.js");

describe('choose_no_common_elements', function() {

  let collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  let collection_b = ["a", "d", "e", "f"];

  it("选出A集合中与B集合中的不共有元素", function () {
    let result = choose_no_common_elements(collection_a, collection_b);

    expect(result).toEqual(["h", "t", "c", "g", "b"]);
  })
});

