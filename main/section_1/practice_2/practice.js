function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(item => collection_b.flat().includes(item));
}

module.exports = collect_same_elements;
