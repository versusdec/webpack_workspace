function multiplyNumeric(object) {
    for (let key in object) {
        object[key] *= 2;
    }
}

let someObject = {
    value1: 15,
    value2: 2,
    value3: 20,
    value4: 7,
    value5: 9,
}

for (let key in someObject) {
    alert(someObject[key])
}

multiplyNumeric(someObject);

for (let key in someObject) {
    alert(someObject[key])
}