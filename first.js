//Объявите две переменные admin и name. Запишите в name имя, скопируйте значение в admin, Выведите admin
var name = 'Tom';
var admin;
admin = name;
alert(admin);

//Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
    //x = 1 + (2 * 2) = 5

//Побитовый оператор и значение.
//Почему побитовые операции в примерах ниже не меняют число?
alert(123 ^ 0);  //123; ^ исключающее ИЛИ, т.к. 0 то значение не меняется
alert(0 ^ 123);  //123; ^ исключающее ИЛИ, т.к. 0 то значение не меняется
alert(~~ 123);   //123; операция НЕ над каждым битом т.к. ~~ получаем исходное значение 123

//Создать страницу которая запрашивает имя и выводит его (страница в файле test.html)
var name = prompt('Ваше имя?', '');
alert (name);

//Выведется ли alert
if ('0') {
    alert('Привет');
} //выведется т.к. в if не пустое значение

//Используя конструкцию if... else напишите конструкцию которая будет спрашивать "Каково офиц. название JS?"
var begin = prompt('Whats the official name of JS?', '') 
if (begin == 'EcmaScript') {
	alert('Right!');
} else {
	alert('Didnt know? EcmaScript')
}

//Получить знак числа; напишите код, который получает значение prompt, а затем выводит alert: 1, если n>0; -1, если n<0; 0, если n = 0
var n = prompt('Введите число');
if (n > 0) {
    alert('1')
} else if (n < 0) {
    alert('-1')
} else {
    alert('0')
}

//Проверка логина; 
var login = prompt('Кто вы?', '')
if (login == 'Admin') {
	var password = prompt('Пароль?', '')
	if (password == 'Master') {
		alert('Добро пожаловать')
	} else if (password == null){
		alert('Вход отменен')
	} else {
        alert('Пароль неверен')
    }
} else if (login == null) {
	alert('Вход отменен')
} else {
    alert('Я вас не знаю')
}
