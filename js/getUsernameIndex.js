// 1. 
// Функция поиска индекса имени пользователя в массиве(елементы масива - тип данных строки имен)
// Если ничего не найдено функция должна возвращать null.


const arrayUsernames = ["gomadoko", "haduky", "baraka", "karlmageddon", "higytre", "milovka"];

// Проверяем тип данных елемента масива
console.log(typeof arrayUsernames[1]);


            // Функция  1-вый вариант САМЫЙ ЛУЧШЫЙ

function getUsernameIndex(array, enteredUserName) {
  if (array.findIndex(e => e === enteredUserName) === -1) {
    return null;
  }
  return array.findIndex(e => e === enteredUserName);
}

console.log(getUsernameIndex(arrayUsernames, "karlmageddon"));



           // 2-рой вариант функция поиска индеска в масиве имен пользователя

// const enteredUserName = "higytre";

// function getUsernameIndex(array) {
//   if (array.findIndex(findUsernameIndex) === -1) {
//     return null;
//   }
//   return array.findIndex(findUsernameIndex);
// }

             // call-back функция для метода масива findIndex()

//   function findUsernameIndex(e) {
//   return e === enteredUserName;
// }

// console.log(getUsernameIndex(arrayUsernames));

// console.log(arrayUsernames.findIndex(findUsernameIndex));


// Используем для поиска на самом масиве стрелочную колбек фукцыю у методе масива findIndex
// const enteredUserName = "higytre";
// console.log(arrayUsernames.findIndex(e => e === enteredUserName));


// const array1 = ['one', 'two', 'three', 'four', 'five'];
// console.log(array1.indexOf('two'));