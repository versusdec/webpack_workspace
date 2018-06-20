let date = new Date();

function getDateAgo(date, days){
    let daysAgo = new Date();
    daysAgo.setDate(date.getDate() - days);
    alert(daysAgo.getDate());
}

let days = 14;

getDateAgo(date, days);