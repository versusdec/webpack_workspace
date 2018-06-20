let salaries = {
    John: 2000,
    Bob: 5000,
    Marilyn: 10000,
    Jack: 3000
}

let biggestSalary = 0;

for (let key in salaries) {
    if (salaries[key] > biggestSalary) {
        biggestSalary = salaries[key];
    }
}
alert('Biggest salary is ' + biggestSalary)