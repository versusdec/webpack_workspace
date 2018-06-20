let myArray = [];
let sum = 0;
let check = true;
let input;
let isNumber;
let counter = 0;
debugger;
do {
    input = prompt('Enter integer:');
    if (input != ' ' && input != null) {
        isNumber = +input;
    }
    else {
        break;
    }
    if (Number.isInteger(isNumber) == true) {
        myArray[counter] = isNumber;
        counter++;
    }
    else { check = false; }
} while (check);



for (let key in myArray) {
    sum += myArray[key];
}

alert(sum);

