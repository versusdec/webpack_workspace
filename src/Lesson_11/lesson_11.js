import './lesson_11.scss';
import { accordeonMenu } from './assets/scripts/accordeonMenu';

const accMenus = document.querySelectorAll('.accordion-menu');

for (let i = 0; i < accMenus.length; i++) {
    accordeonMenu(accMenus[i]);
}
