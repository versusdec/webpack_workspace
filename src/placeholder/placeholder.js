import './placeholder.scss'

const inputForm = document.querySelectorAll('.input-form');

inputForm.forEach((e => {
    e.addEventListener('input')
}))