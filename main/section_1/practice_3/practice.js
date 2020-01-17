function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_b = object_b.value;
   var res = [];
   for (var itemA of collection_a) {
     for (var itemB of collection_b) {
       if (itemA === itemB) {
         res.push(itemA);
       }
     }
   }
   return res;
}

module.exports = collect_same_elements;
