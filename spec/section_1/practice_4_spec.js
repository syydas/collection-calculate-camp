'use strict';

let collect_same_elements = require("../../main/section_1/practice_4/practice.js");

describe('practice-1-4', function() {

  let collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
  let collection_b = {value: ["a", "d", "e", "f"]};

  it("选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素", function() {
    let result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});
