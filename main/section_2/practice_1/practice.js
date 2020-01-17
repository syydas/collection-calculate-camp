function count_same_elements(collection) {
  //在这里写入代码
  var res = [];
  var helpArr = [];
  for (var item of collection) {
    if (-1 === helpArr.indexOf(item)) {
      helpArr.push(item);
    }
  }
  for (var item of helpArr) {
    var countArr = collection.filter(function(sameItem) {
      return sameItem === item;
    });
    res.push({'key': item, 'count': countArr.length});
  }
  return res;
}

module.exports = count_same_elements;
