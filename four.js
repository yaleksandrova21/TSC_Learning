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

//Вывести дату в формате дд.мм.гг
function formatDate(d) {
    var d = new Date (2014, 0, 30);
    return d.getDate() + '.' + (d.getMonth()+1) + '.' + d.getFullYear();
}
formatDate();

//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут и вывести на экран
var date = new Date (2012, 1, 20, 3, 12);
alert(date);

//Создайте функцию которая выводит текущий день недели в коротком формате "пн", "вт" и т.д.
function getWeekDay (date) {
    var weekDay = ["0", "пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    return weekDay[date.getDay()];
}
var q = new Date();
getWeekDay (q);

//День недели в европейской нумерации. День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2 и т.д.
function getLocalDay(date) {
    return date.getDay();
}
var q = new Date();
getLocalDay(q);

//День недели в европейской нумерации. День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2 и т.д.
function getLocalDay(q) {
    var day = q.getDay();
    if (day == 0) {
        return 7;
    }
    return day;
}
var q = new Date();
getLocalDay(q);

//Сколько секунд - до завтра
function getSecondsToTomorrow() {
    var now = new Date();
    var sec = 86400 - now.getSeconds() - (now.getMinutes()*60) - (now.getHours()*3600);
    return sec;
}

//Сколько секунд уже прошло сегодня?
function getSecondsToday() {
    var now = new Date();
    var sec = now.getSeconds() + (now.getMinutes()*60) + (now.getHours()*3600);
    return sec;
}
