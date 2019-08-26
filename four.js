//Перепишите цикл через map
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
alert( arrLength ); // 4,5,2,5


var arrLength = arr.map(function(item) {
  return item.length;
});

//
