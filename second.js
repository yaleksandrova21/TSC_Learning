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

//Создайте страницу, которая предлагает ввести два числа и выводит их сумму.
var a = prompt('Введите число a:', "");
var b = prompt('Введите число b:', '');
alert( +a + +b);

//Сложение цен. Представьте себе электронный магазин. Цены даны с точностью до копейки(цента, евроцента и т.п.).
//Получится глупо, если при заказе двух товаров с ценами 0.10$ и 0.20$ человек получит общую стоимость 0.30000000000000004$
//Что можно сделать, чтобы избежать проблем с ошибками округления?
var c = +prompt('Введите цену на товар1', "");
var d = +prompt('Введите цену на товар2', "");
var SumPrice = (c*100 + d*100)/100;
alert('Всего' + " " + SumPrice + "$");

//Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:
function getDecimal(num) {
    var q = num - (num^0);
    return q.toFixed(2);
}
alert(getDecimal(-1.2));

//Напишите функцию fibBinet(n), которая будет вычислять Fn по формуле Бине
function fibB(n) {
    var five = Math.sqrt(5);
    var e = (1 + five)/2;
    var g = Math.pow(e,n)/five;
    if (n>1)
    return Math.round(g);
}
fibB(77); //5527939700884771 != 5527939700884757 проблема в изъятии корня из 5

//Напишите код для генерации случайного значения в диапазоне от 0 до max, не включая max.
function randNum() {
    var max = 100;
    var y = Math.random()*max;
    return y^0;
}
randNum();

//Случайное из интервала (min, max)
var max = 100;
var min = 30;
RandNumber = min + Math.random()*(max - min);
alert(RandNumber^0);

//Напишите функцию randomInteger(min, max) для генерации случайного целого числа между min и max, включая min,max как возможные значения.
//Любое число из интервала min..max должно иметь одинаковую вероятность.
function randomInteger(min, max) {
    var u = min + Math.random()*(max - min);
    return u^0; //или return Math.round(u);
}
randomInteger(1, 5)

