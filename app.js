'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    var classeName = document.body.className;
    if(classeName == 'light-theme') {
        this.textContent = 'escuro';
    } else {
        this.textContent = 'claro';
    }
}
);
