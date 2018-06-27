export function accordeonMenu(menu) {
    const menuItems = Array.from(menu.querySelectorAll('.accordion-menu__header'));
    const TRIANGLE_ACTIVE = 'triangle-enabled';
    let activeMenu;

    eventHandlers();

    function eventHandlers() {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('click', function () {
                enableMenuItem(this);
            });
        }
    }

    function enableMenuItem(item) {
        toggleOff(item);
        showContent(item);
        if (activeMenu !== item) { activeMenu = item; }
        else {
            activeMenu = undefined;
        }

    }

    function showContent(item) {
        activateTriangle(item);
        const menuContent = item.nextElementSibling;
        if (menuContent.style.maxHeight) {
            menuContent.style.maxHeight = null;
            menuContent.style.paddingTop = '';
            menuContent.style.paddingBottom = ''
        } else {
            menuContent.style.maxHeight = menuContent.scrollHeight + 'px';
            menuContent.style.paddingTop = '30px';
            menuContent.style.paddingBottom = '30px';
        }
    }

    function activateTriangle(item) {
        const triangle = item.querySelector('.accordion-menu__header_triangle');
        triangle.classList.toggle(TRIANGLE_ACTIVE);
    }

    function toggleOff(item) {
        if (activeMenu !== undefined && activeMenu !== item) {
            showContent(activeMenu);
        }
    }
}
