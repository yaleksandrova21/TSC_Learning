//Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например: sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
//Сделайте 3 варианта решения
//Пример работы вашей функции:
//  function sumTo(n) { /*... ваш код ... */ }
//  alert( sumTo(100) ); // 5050

//(1) С использованием цикла.
function SumTo(n) {
    var sum = 0
    var i = 0
    while (++i <= n) {
        sum = sum + i;
    }
    return sum;
}
SumTo(100);

//(2) Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1
function SumTwo(m) {
    if (m > 1) 
    return m + SumTwo(m - 1);
    return 1;
}
SumTwo(100);

//(3) С использованием формулы для суммы арифметической прогрессии
function SumThree (h) {
    var sum = 0;
    sum = (h * (h + 1))/2;
    return sum;
}
SumThree(100);

// Вычислить факториал
function factorial(n) {
    if (n > 1)
    return n * factorial(n-1);
    return 1;
}
factorial(5);

//Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
function fib(n) {
    if (n>1)
    return fib(n-1) + fib(n - 2);
    return n;
}
fib(7);

