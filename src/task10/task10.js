function filterRange(arr, a, b) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) {
            secondArr[counter] = arr[i];
            counter++;
        }
    }
    alert(secondArr);
};

let firstArr = [];
let secondArr = [];
for (let i = 0; i < 100; i++) {
    firstArr[i] = i;
}

let a = prompt('enter a:');
a = +a;
let b = prompt('enter b:');
b = +b;
debugger;
filterRange(firstArr, a, b)
