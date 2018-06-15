let date = new Date();

function getDateAgo(date, days){
    let daysAgo = new Date();
    daysAgo.setDate(date.getDate() - days);
    alert(daysAgo.getDate());
}

let days = 15;

getDateAgo(date, days);