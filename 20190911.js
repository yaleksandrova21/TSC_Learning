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

//Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

//Работа с прототипами
//Какие значения показываются в процессе выполнения кода?
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };

  alert( rabbit.jumps ); // ? (1) true
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2) null
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3) undefined
