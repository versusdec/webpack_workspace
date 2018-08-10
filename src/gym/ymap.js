
var myMap;
//const myCenter = [59.901739, 30.319515];
var myPlacemark;

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map('map', {
        center: [59.901739, 30.319515],
        zoom: 17
    }, {
            searchControlProvider: 'yandex#search'
        });
    myPlacemark = new ymaps.Placemark([59.901739, 30.319515]);
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('drag');
}
