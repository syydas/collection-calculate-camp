function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var arrA = [];
  for (var itemA of collection_a) {
    arrA.push(itemA.key);
  }
  var arrB = object_b.value;
  var res = [];
  for (var itemA of arrA) {
    for (var itemB of arrB) {
      if (itemA === itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = collect_same_elements;
