//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    }
    return str;
}
truncate('Добрый день турутутуту', 5);
truncate('Добрый день турутутуту', 50);

//Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.
function extractCurrencyValue(str) {
    var a = str.slice(1,-1) + str.slice(-1);
    return +a;
}
extractCurrencyValue('$120')

/* Мини-задача на синтаксис объектов. Напишите код, по строке на каждое действие.
Создайте пустой объект user.
Добавьте свойство name со значением Вася.
Добавьте свойство surname со значением Петров.
Поменяйте значение name на Сергей.
Удалите свойство name из объекта. */
var user = {};
user.name = 'Вася';
user.surname = 'Петров'
user.name = 'Сергей';
delete user.name;

//Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    } 
    return true;
  }
  
  var schedule = new Object();
  alert( isEmpty(schedule) ); // true
  schedule["8:30"] = "подъём";
  alert( isEmpty(schedule) ); // false

/* Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0 */
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };
  var sum = salaries["Вася"] + salaries["Петя"] + salaries["Даша"]; 
  if (sum > 0) {
    alert(sum);
  } else {
    alert(0);
  }

//Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
//Еcли объект пустой, то пусть он выводит «нет сотрудников».
var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
  };
  var max = 0;
  var name = '';
for (var key in salaries) {
      if (max < salaries[key]) {
          max = salaries[key];
          name = key;
      } 
    } 
alert(name);
if (max == 0) {
    alert('Нет сотрудников');
}

//Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:
/* // до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
multiplyNumeric(menu);

// после вызова
menu = {
  width: 400,
  height: 600,
  title: "My menu"
}; 
Для проверки на число используйте функцию:
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}*/
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
function multiplyNumeric(obj) {
      for (var key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] = obj[key] * 2;
        }
      }
}

/* Получить последний элемент массива
Как получить последний элемент из произвольного массива?
У нас есть массив goods. Сколько в нем элементов – не знаем, но можем прочитать из goods.length.
Напишите код для получения последнего элемента goods. */
var goods = ['uuu', 'rds', 'yyy', 'w', 5, 'y@', 'ooooooo'];
alert (goods.length);  //7
//т.к. lenght получает последний индекс и прибавляет к нему 1, то чтобы получить последнее значение из массива пишем:
alert (goods[6]);     

//У нас есть массив goods. Напишите код для добавления в его конец значения «Компьютер».
goods.push('Компьютер');
alert (goods[7]);

/* Создание массива
Задача из 5 шагов-строк:
Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги». */

var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');

var len = styles.length - 2;
alert (len); //2
styles[2] = 'Классика';

var elem1 = styles.shift();
alert(elem1);

styles.unshift('Рэп', 'Регги');

/* Напишите код для вывода alert случайного значения из массива:
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
P.S. Код для генерации случайного целого от min to max включительно:
var rand = min + Math.floor(Math.random() * (max + 1 - min)); */
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var max = arr.length - 1;
var min = 0
var rand = min + Math.floor(Math.random() * (max - min));
alert (arr[rand]);


/* Создайте калькулятор для введённых значений
Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива */
var arr2 = [];
while (true) {
    var d = prompt('Введите значение', '');
    if (d === '' || d === null || isNaN(d)) break;
    arr2.push(+d);
}
arr2.length;
var sum = arr2[0] + arr2[1] + arr2[2];
alert (sum)
