'use strict';

console.log ('hello world!');

let userName = prompt('Hello! I\'m Marquesa. Who are you?');
console.log('This is ' + userName);
alert('Welcome ' + userName + '!');

// 5 questions
// 1 Q: Did I grow up in California?
// A: No, I grew up in the Pacific Northwest & Montana
// 2 Q: Do I like to dance?
// A: Yes! I love to dance!
// 3 Q: Am I a mom?
// A: No, though many friends have called me the "group mom", I don't have children.
// 4 Q: Do I have a cat?
// A: No, I have 2 dinosaurs (birds)!
// 5 Q: Do I like sci-fi?
// A: Yes, Picard is my captain and I love sci-fi!

// for prompt return values, use .toLowerCase

// for return value responses, 
// use "if", "else if", and "else" statements
// give alerts to answer the user
// then console.log the .toLowerCase value

function growup(){let qOne = prompt('Did I grow up in California?');
console.log(qOne);
let california = qOne.toLowerCase();
if (california === 'no' || california === 'n') {
  alert('Correct! I grew up in the Pacific Northwest & Montana.');
} else if (california === 'yes' || california === 'y') {
  alert('Nope, I grew up in the Pacific Northwest & Montana')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(california);
return growup;
}

growup()

let qTwo = prompt('Do I like to dance?');
console.log(qTwo);
let ballet = qTwo.toLowerCase();
if (ballet === 'no' || ballet === 'n') {
  alert('Actually, I love to dance!');
} else if (ballet === 'yes' || ballet === 'y') {
  alert('Yes! I love to dance!')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(ballet);

let qThree = prompt('Am I a mom?');
console.log(qThree);
let mom = qThree.toLowerCase();
if (mom === 'no' || mom === 'n') {
  alert('Correct, though many friends have called me the "group mom", I don\'t have children.');
} else if (mom === 'yes' || mom === 'y') {
  alert('No, though many friends have called me the "group mom", I don\'t have children.')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(mom);

let qFour = prompt('Do I have a cat?');
console.log(qFour);
let cat = qFour.toLowerCase();
if (cat === 'no' || cat === 'n') {
  alert('Correct, I do not have a cat. I have 2 dinosaurs (birds)!');
} else if (cat === 'yes' || cat === 'y') {
  alert('Nope, I do not have a cat. I have 2 dinosaurs (birds)!')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(cat);

let qFive = prompt('Do I like sci-fi?');
console.log(qFive);
let Picard = qFive.toLowerCase();
if (Picard === 'no' || Picard === 'n') {
  alert('How can anyone not like sci-fi? I love sci-fi!');
} else if (Picard === 'yes' || Picard === 'y') {
  alert('Yes! Picard is my captain (I love sci-fi)!')
} else {
  alert('I didn\'t get that. Please submit your answers in the form of "yes" or "no".')
}
console.log(Picard);

// I want to give a final message to the user

alert('Thanks for playing my little game, ' + userName + '. Welcome to my site.')