'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');


setupOpen.addEventListener('click', function() {
    setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function() {
    setup.classList.add('invisible');
});


var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');

var fireball = document.querySelector('.setup-fireball-wrap');

var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];

function getElementColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

wizardCoat.addEventListener('click', function() {
    wizardCoat.style.fill = getElementColor(wizardCoatColors);
});

wizardEyes.addEventListener('click', function() {
    wizardEyes.style.fill = getElementColor(wizardEyesColors);
});

fireball.addEventListener('click', function() {
    fireball.style.backgroundColor = getElementColor(fireballColors);
});




var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

function enterPressed(evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
}

function setupEscEvent(evt) {
    if (evt.keyCode === ESC_KEY_CODE) {
        setup.classList.add('invisible');
    }
}

function toggleSetup() {
    if (setup.classList.contains('invisible')) {
        setup.classList.remove('invisible');
        document.addEventListener('keydown', setupEscEvent);
        setupOpen.setAttribute('aria-pressed', true);
        setup.setAttribute('aria-hidden', false);
        setupClose.setAttribute('aria-hidden', false);
    } else {
        setup.classList.add('invisible');
        document.removeEventListener('keydown', setupEscEvent);
        setupOpen.setAttribute('aria-pressed', false);
        setup.setAttribute('aria-hidden', true);
        setupClose.setAttribute('aria-hidden', true);
    }
}

setupOpen.addEventListener('keydown', function(evt) {
    if (enterPressed(evt)) {
        toggleSetup();
    }
});

setupClose.addEventListener('keydown', function(evt) {
    if (enterPressed(evt)) {
        toggleSetup();
    }
});

setupUserName.addEventListener('keydown', function(evt) {
    if (enterPressed(evt)) {
        event.preventDefault();
    }
});

