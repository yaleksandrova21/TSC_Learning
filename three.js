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
