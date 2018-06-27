import './lesson_12.scss';
import { accordionMenuCreator } from './assets/scripts/accordionMenuCreator';
import { accordionHandler } from './assets/scripts/handler';

const accMenu = document.querySelectorAll('.accordion-menu');

const myArr = [
    {
        title: "Item 1",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
    },
    {
        title: "Item 2",
        content: "Aliquam quidem quod odio dolore voluptatibus deleniti minus unde"
    },
    {
        title: "Item 3",
        content: "facere ab, quasi possimus, ipsa officiis, nostrum illo recusandae ratione. "
    },
    {
        title: "Item 4",
        content: "Fugiat, praesentium animi?"
    }
];


accMenu.forEach(function (item) {
    accordionMenuCreator(item, myArr);
    accordionHandler(item);
});
