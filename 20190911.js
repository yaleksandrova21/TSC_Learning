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
