let salaries = {
    John: 2000,
    Bob: 5000,
    Marilyn: '10k',
    Jack: 3000
}
let sum = 0;

for (let key in salaries) {
    if (Number.isInteger(salaries[key]) == true) {
        sum += salaries[key];
    } else {
        alert(key + ' ввел неверное значение')
    }


} alert(sum);