function count_same_elements(collection) {
  //在这里写入代码
  let res = [];
  let helpArr = [];
  collection.forEach(item => {
    if (-1 === helpArr.indexOf(item)) {
      helpArr.push(item);
    }
  });
  helpArr.forEach(item => {
    let countArr = collection.filter(function(sameItem) {
      return sameItem === item;
    });
    res.push({ key: item, count: countArr.length });
  });
  return res;
}

module.exports = count_same_elements;
