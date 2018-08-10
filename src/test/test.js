import './test.scss';
import $ from 'jquery';
import './js/jquery.sumoselect.min.js'
/* import './jquery.mCustomScrollbar.js'; */
/*import './datepicker.min.js' */





$(document).ready(function () {
    $('.custom').SumoSelect();
});
$(document).ready(function () {
    $('.custom2').SumoSelect();
});




/* if ($('.custom_scrollbar').length) {
    $(window).on("load", function () {
        $('.custom_scrollbar').mCustomScrollbar({
            theme: 'arksin_custom_scrollbar',
            //arksin_custom_scrollbar
        });
    });
} 
*/

const callBTN = document.querySelector('.call');
callBTN.addEventListener('click', modalHandler)

const li = document.querySelectorAll('li');
li.forEach((item) => {
    item.textContent = 'test'
})


///////////////////////////////////////

///////////////////////////////////////


function modalHandler() {
    const modalHandler = document.querySelector('.modal_brief');
    modalHandler.classList.toggle('active');
    const closeModal = modalHandler.querySelector('.brief-modal-box__close');

    closeModal.addEventListener('click', () => {
        modalHandler.classList.remove('active');
    });
    $('.modal_brief').click(function (event) {
        if (!$(event.target).closest(".brief_modal_wrapp_inside").length) {
            modalHandler.classList.remove("active");
        }
    });
}

if ($('.modal_brief').length) {
    const modal = document.querySelector('.brief_modal_wrapp_inside');
    const inputHandler = modal.querySelectorAll('.input_wrapper');
    var inputItems = [];
    inputHandler.forEach(function (elem) {
        inputItems.push(elem.firstElementChild)
    });
    inputItems.forEach(function (item) {
        item.addEventListener('keyup', function () {
            item.setAttribute('value', item.value)
        })
    });
    const itemsArr = ['item 1', 'item 2',
        'some another very cool item',
        'amazing item', 'super puper crazy item',
        'test', 'test', 'test', 'test',
        'test', 'test', 'shut up and take my money bitch',
        'maybe enough?',
        'i need more items!!',
        'more more more massive mammoth mega items', 'item 100500', 'item 1', 'item 2',
        'some another very cool item',
        'amazing item', 'super puper crazy item',
        'test', 'test', 'test', 'test',
        'test', 'test', 'shut up and take my money bitch',
        'maybe enough?',
        'i need more items!!',
        'more more more massive mammoth mega items', 'item 100500'];
    const target = modal.querySelector('.add_products');
    function renderItems(item) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        label.classList.add('custom_checkbox');
        input.classList.add('brief_default_checkbox');
        input.setAttribute('type', 'checkbox');
        span.classList.add('custom_checkmark', 'add_products_text');
        span.textContent = item;
        $(label).append(input, span);
        return label;
    }

    itemsArr.forEach(function (elem) {
        target.appendChild(renderItems(elem));
    });
}

