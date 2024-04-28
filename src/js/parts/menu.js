import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header nav');
const allMenuLinks = document.querySelectorAll('.header nav ul li a');

if (burger) {
    burger.addEventListener('click', (e) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding();
        }
    })
}


if (allMenuLinks.length) {
    allMenuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open');
                unLockPadding();
            }
        })
    })
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.closest('.header nav') && !targetEl.classList.contains('header__burger')) {
        menu.classList.remove('_open');
        unLockPadding();
    }
})