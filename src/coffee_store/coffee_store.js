import './coffee_store.scss'
import './scripts/dropdownButton/dropdownButton.js'
import './scripts/carousel/carousel.js'

const btns = document.querySelectorAll('.tab_btn');
btns.forEach((btn, i, arr) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active_tab_btn');
        }
        btn.classList.add('active_tab_btn')
        open(i)
    })
});

function open(tab) {          
        var x = document.querySelectorAll('.tab_content');
        for (let i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[tab].style.display = "block";
}