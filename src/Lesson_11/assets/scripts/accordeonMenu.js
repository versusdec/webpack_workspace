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
            item.style.background = '';
        } else {
            menuContent.style.maxHeight = menuContent.scrollHeight + 'px';
            item.style.background = '#1987b3';
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
