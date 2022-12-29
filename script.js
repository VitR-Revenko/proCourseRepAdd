// 1) Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.
// Все це із замиканнями, наприклад:
console.log('1)')

function count(x = 0) {
  return function(y) {
    x += y;
    return x;
  }
}

let sum = count();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

// 2) Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:

console.log('2)')

const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
  let del = item - 1;
  for (let el of array) {
    if (el === item) {
      return array.splice(del, 1);
    }
  }
}

removeElement(array, 5 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]