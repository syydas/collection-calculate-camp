function create_updated_collection(collection_a, object_b) {
  object_b.value.map(item => {
    for (let itemA of collection_a) {
      if (itemA.key === item) {
        itemA.count -= 1;
      }
    }
  });
  return collection_a;
}

module.exports = create_updated_collection;
