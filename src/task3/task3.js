let someObject = {};
let key = true;

function isEmpty(obj) {
    for (key in obj) {
        key = false;
    }
    alert(key);
}

someObject.someKey = 'somekey';

isEmpty(someObject);



