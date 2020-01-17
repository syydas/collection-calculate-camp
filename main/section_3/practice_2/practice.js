function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let collectionB = object_b.value;
  for (let itemA of collection_a) {
    for (let itemB of collectionB) {
      if (itemA.key === itemB) {
        itemA.count -= parseInt(itemA.count / 3);
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
