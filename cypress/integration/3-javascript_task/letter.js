//make the first letter caps for the given string
/*
apple
Apple
*/
let input = "apple";
let firstLetter = input.charAt(0);
console.log(firstLetter);

let str= input.substring(1);
console.log(str);

let letter = firstLetter.toUpperCase();
console.log(letter);

let result = letter + str;
console.log(result);