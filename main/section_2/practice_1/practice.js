function count_same_elements(collection) {
  //在这里写入代码
  let res = [];
  let helpArr = [];
  for (let item of collection) {
    if (-1 === helpArr.indexOf(item)) {
      helpArr.push(item);
    }
  }
  for (let item of helpArr) {
    let countArr = collection.filter(function(sameItem) {
      return sameItem === item;
    });
    res.push({'key': item, 'count': countArr.length});
  }
  return res;
}

module.exports = count_same_elements;
