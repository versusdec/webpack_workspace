import './lesson_10.scss';

let redActive = false;
let orangeActive = false;
let greenActive = false;

function activateRed() {
    red.classList.toggle('active');

    if (redActive) {
        redActive = false;
    }
    else {
        redActive = true;
    }

    if (orangeActive) {
        orange.classList.toggle('active');
        orangeActive = false;
    }
    else if (greenActive) {
        green.classList.toggle('active');
        greenActive = false;
    }
}

function activateOrange() {
    orange.classList.toggle('active');
    if (orangeActive) {
        orangeActive = false;
    }
    else {
        orangeActive = true;
    }
    if (redActive) {
        red.classList.toggle('active');
        redActive = false;
    }
    else if (greenActive) {
        green.classList.toggle('active');
        greenActive = false;
    }
}

function activateGreen() {
    green.classList.toggle('active');
    if (greenActive) {
        greenActive = false;
    }
    else {
        greenActive = true;
    }
    if (orangeActive) {
        orange.classList.toggle('active');
        orangeActive = false;
    }
    else if (redActive) {
        red.classList.toggle('active');
        redActive = false;
    }
}



const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const green = document.querySelector('.green');

red.addEventListener('click', activateRed);
orange.addEventListener('click', activateOrange);
green.addEventListener('click', activateGreen);
