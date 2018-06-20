let date = new Date();

function getWeekDay(date) {
    let day = date.getDay();

    switch (day) {
        case 0: alert('Нд');
            break;
        case 1: alert('Пн');
            break;
        case 2: alert('Вт');
            break;
        case 3: alert('Ср');
            break;
        case 4: alert('Чт');
            break;
        case 5: alert('Пт');
            break;
        case 6: alert('Сб');
            break;

    }
}


getWeekDay(date);