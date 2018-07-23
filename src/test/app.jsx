import * as React from 'react'
import { render } from 'react-dom'
import { SideMenu } from './common/components/menu/menu.component.jsx';

let menuItems1 = ['Создание сайтов', 'Изготовление сайтов «под ключ»',
        'Как мы работаем ', 'Интеграция с 1C', 'Поддержка сайтов',
        'Создание сайтов на Битрикс', 'Модули Битрикс', 'Купить Битрикс',
        'Дизайн сайтов', 'Редизайн сайтов', 'Интернет маназины',
        'Создание логотипов'];

function menuItemsGen() {
        let menuItems = [];
        for (let i = 1; i <= 14; i++) {
                let item;
                if (i < 10) {
                        item = 'Пункт 0' + i;
                }
                else {
                        item = 'Пункт ' + i;
                }
                menuItems.push(item)
        }
        return menuItems;
}

let menuItems3 = ['Поисковое продвижение сайтов',
        'Тариф «Старт»',
        'Тариф «Продвижение Агонь!»',
        'Тариф «Интернет-магазин»',
        'Тариф «Эксклюзив»',
        'Тариф «Контекст + SEO»',
        'Тариф «Регион»'];

let menuItemSpan = [];
menuItems3.forEach(item => {
        let spanCoveredItem = <span>{item}</span>;
        menuItemSpan.push(spanCoveredItem);
})
render(<SideMenu items={menuItems1} />, document.querySelector('.menu'));
render(<SideMenu items={menuItemsGen()} />, document.querySelector('.footer-menu1'));
render(<SideMenu items={menuItemSpan} />, document.querySelector('.footer-menu2'))