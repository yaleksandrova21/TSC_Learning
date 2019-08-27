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

//Массив частичных сумм
//вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно
function getSum(arr) {
	var result = [];
	if (!arr.length) return result;
	var sum = arr.reduce(function (num, n) {
		result.push(num);
		return num + n;
	});
	result.push(sum);
	return result;
}
getSum([1,2,3,4,5])

//Проверка на аргумент-undefined
//Как в функции отличить отсутствующий аргумент от undefined?
function f(x) {
    if (arguments.length > 0) {
        return 1;
    } else {
        return 0;
    }
}
f(undefined); // 1
f(); // 0

/* Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:
sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10 */

function sum() {
    var z = 0;
    for (i = 0; i < arguments.length; i++) {
        z = z + arguments[i]
    }
    return z;
}
