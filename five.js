//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
/*  sum(1)(2) = 3
    sum(5)(-1) = 4 */

function sum(a) {
    return function(b) {
        return a + b;
    }
}

/*Фильтрация с помощью функции
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.
Сделайте набор «готовых к употреблению» фильтров:
inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:
arr.filter(inBetween(3,6)) – выбирает только значения межу 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива   */

function inBetween(a,b) {
    return function(x) {
        return x >= a && x <= b;
    };
}
var arr = [1, 2, 3, 4, 5, 6, 7, 99];
console.log(arr.filter(inBetween(2, 5)))

function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10])));
