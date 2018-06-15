function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    alert(result);
}
/* let result = 0; */
let x = 5;
let n = 2;
/* debugger; */

x = prompt('enter X:');
n = prompt('enter N:');
pow(x, n);