/* Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15 */
function sum(a) {
    let currentSum = a;
    function f(b) {
      currentSum += b;
      return f;
    }
    f.toString = function() {
      return currentSum;
    };
    return f;
  }

//Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//Сделайте два варианта решения.
// 1. Используя setInterval.
function printNumbers(a, b) {
    var timerId = setInterval(function() {
        alert(a);
        if (a == b) {
            clearInterval(timerId);
        }
        a++;
    }, 1000);
}

// 2. Используя рекурсивный setTimeout.
function printNumbers(a, b) {
    setTimeout(function start(){
        alert (a);
        if (a < b) {
            setTimeout(start, 1000);
        }
        a++;
    }, 1000);
}

//Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
//Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
// askPassword(user.loginOk, user.loginFail);
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
