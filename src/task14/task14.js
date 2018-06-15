function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    alert(day);
};

let date = new Date(1993, 1, 6);

getLocalDay(date);