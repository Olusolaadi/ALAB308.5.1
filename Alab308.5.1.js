// Take an array of numbers and return the sum.
function sum(array) {
  return array.reduce((total, value) => total + value);
};
console.log(sum([4, 6, 50]));



// Take an array of numbers and return the average.
const numbers = [4, 6, 50];

function average(array1) {

  const add = array1.reduce((total, value) => total + value);
  return add / array1.length;
}
console.log(average(numbers));



// Take an array of strings and return the longest string.
let array3 = [
  "I now know the basics of HTML",
  "I now know the basics of CSS",
  "I now know the basics of Javascript",
  "I am currently learning the basics of DOM"
];

function maxstr(array3) {
  array3.sort((a, b) => b.length - a.length);
  return array3[0];
}
console.log(maxstr(array3));



// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// I could not complete this.
const arr = ['HTML', 'CSS', 'Javascript', 'DOM'];
let strLengthOver5 = arr.filter(myFunction);
function myFunction(value, array) {
  return value > 5;
}
console.log(myFunction(5, ['HTML', 'CSS', 'Javascript', 'DOM']));


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.//
const num = (n) => {
  if (n > 0) {
    num(n-1);
    console.log(n);
  }
}
num(25);


