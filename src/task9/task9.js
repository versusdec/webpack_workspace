let myArray = [8, 2, 9, 5, 7, 1, 0, 6, 4, 3];

function find(arr, value) {
    for (let key in arr) {
        if (value == arr[key]) {
            alert('your number is #' + (+key + 1) + ' in array');
            break;
        }
    }
}

let input = prompt('What we are looking for? 0-9')
debugger;

if (input != ' ' && input != null) {
    input = +input;
    if (Number.isInteger(input) == true) {
        find(myArray, input);
    }
    else {
        alert('wrong input');
    }
}
else {
    alert('wrong input');
}
