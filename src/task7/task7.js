let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function randomArrNum(array) {
    const min = 0;
    let max = array.length;
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(randNum);
}

randomArrNum(myArray);