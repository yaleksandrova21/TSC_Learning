//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
/*  sum(1)(2) = 3
    sum(5)(-1) = 4 */

function sum(a) {
    return function(b) {
        return a + b;
    }
}
