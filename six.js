/* Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */
function sum(a) {
    let currentSum = a;
    function f(b) {
      currentSum += b;
      return f;
    }
    f.toString = function() {
      return currentSum;
    };
    return f;
  }

//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//Сделайте два варианта решения.
// 1. Используя setInterval.
function printNumbers(a, b) {
    var timerId = setInterval(function() {
        alert(a);
        if (a == b) {
            clearInterval(timerId);
        }
        a++;
    }, 1000);
}
