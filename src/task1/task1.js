import './task1.scss';

let min;
let max;
let randNum;
let input1;
let input2;

function input() {
    input1 = prompt('Enter first number');
    input2 = prompt('Enter second number');
}

input();
if (input1 < input2) {
    min = input1;
    max = input2;
}
else if (input1 > input2) {
    min = input2;
    max = input1;
}
else {
    alert('Numbers are equal');
    randNum = 0;
}

if (randNum === 0) { }
else {
    randNum = Math.floor(Math.random() * (+max - +min + 1)) + +min;
    alert(randNum);
}

