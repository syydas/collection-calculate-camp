function count_same_elements(collection) {
  //在这里写入代码
  var res = [];
  var obj = {};
  collection.forEach(element => {
    var ele = element.split(/[:\-\[\]]/);
    if (obj[ele[0]] == null) {
      obj[ele[0]] = ele.length === 1 ? 1 : parseInt(ele[1]);
    } else {
      obj[ele[0]] += ele.length === 1 ? 1 : parseInt(ele[1]);
    }
  });
  for (var item in obj) {
    res.push({ name: item, summary: obj[item] });
  } 
  return res;
}

module.exports = count_same_elements;
