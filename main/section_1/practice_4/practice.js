function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let arrA = [];
  for (let itemA of collection_a) {
    arrA.push(itemA.key);
  }
  let arrB = object_b.value;
  let res = [];
  for (let itemA of arrA) {
    for (let itemB of arrB) {
      if (itemA === itemB) {
        res.push(itemA);
      }
    }
  }
  return res;
}

module.exports = collect_same_elements;
