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

/* Алгоритм поиска
С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: 
pockets → bed → table → head. 
Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
При необходимости составьте цепочки поиска и сравните их.*/
let head = {
    glasses: 1
};
  
let table = {
    pen: 3
};
  
let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

//Куда будет произведена запись? Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat(); //rabbit = this

//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
//Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить? Чтобы исправить добавим каждому свой stomach: [], в который будем записывать найденную еду. 
let hamster = {
   // stomach: [],
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };

  speedy.eat("apple");
alert( speedy.stomach ); 
alert( lazy.stomach ); 
