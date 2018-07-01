export function accordionMenuCreator(place, arr) {
    const ACCORDION_MENU_CLASS = 'accordion-menu';
    const MENU_ITEM_CLASS = `${ACCORDION_MENU_CLASS}-item`;
    const MENU_HEADER_CLASS = `${ACCORDION_MENU_CLASS}__header`;
    const MENU_CONTENT_CLASS = `${ACCORDION_MENU_CLASS}__content`;
    const arrowDown = '<i class="arrow material-icons md-48">keyboard_arrow_down</i>';

    function render(arr) {
        const menuItem = document.createElement('div');
        const menuHeader = document.createElement('div');
        const menuContent = document.createElement('div');
        menuItem.classList.add(MENU_ITEM_CLASS);
        menuHeader.classList.add(MENU_HEADER_CLASS);
        menuHeader.textContent = arr.title;
        menuHeader.innerHTML = arr.title + arrowDown;
        menuContent.classList.add(MENU_CONTENT_CLASS);
        menuContent.textContent = arr.content;

        place.appendChild(menuItem);
        menuItem.appendChild(menuHeader);
        menuItem.appendChild(menuContent);
    }

    arr.forEach(element => {
        render(element);
    });
}