//Преобразуйте объект в JSON, а затем обратно в обычный объект
//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
var user = {
    name: "Василий Иванович",
    age: 35
  };

var userJSON = JSON.stringify(user);
alert (userJSON);
var userObj = JSON.parse(userJSON);
alert(userObj);
