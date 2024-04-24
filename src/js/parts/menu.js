import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';
import { gsap } from 'gsap'


const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const allMenuLinks = document.querySelectorAll('nav ul li a');

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

        if (searchPopup.classList.contains('_open')) {
            searchPopup.classList.remove('_open')
        }
        if (catalogMenu.classList.contains('_open')) {
            catalogMenu.classList.remove('_open')
            openCatalogBtns.forEach(btn => {
                btn.classList.remove('_active');
            })
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


// menu arrow buttom
const arrow = `<button><svg width="14" height="14" viewBox="0 0 14 14">
<path d="M0 7H7M14 7H7M7 7V0V14" stroke-width="1.2"/>
</svg>
</button>`;

// add menu summenu opener button
const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');
        const link = li.querySelector('a');

        if (submenu) {
            link.insertAdjacentHTML('afterend', arrow);
            const btn = li.querySelector('button');

            if (btn) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })

    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            if (!item.closest('.catalog-menu')) {
                item.removeAttribute('data-open')
            }
            else {
                if (isMobile.any()) {
                    item.removeAttribute('data-open')
                }
            }
        }
    }

    const catalogMenuFirstItem = document.querySelectorAll('.catalog-menu a');
    if (catalogMenuFirstItem && isMobile.any()) {
        toggleMenu(catalogMenuFirstItem[0])
    }
}




const openCatalogBtns = document.querySelectorAll('[data-open-catalog]');
const catalogMenu = document.querySelector('.catalog-menu')

if (openCatalogBtns.length) {
    openCatalogBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            catalogMenu.classList.toggle('_open');
            btn.classList.toggle('_active');

            if (btn.classList.contains('_active')) {
                lockPadding();
            }
            else {
                unLockPadding();
            }

            if (searchPopup.classList.contains('_open')) {
                searchPopup.classList.remove('_open')
            }
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open')
                burger.classList.remove('_active');
            }
        })
    })
}

const openSearchBtn = document.querySelectorAll('[data-open-search]');
const searchPopup = document.querySelector('.search-popup')

if (openSearchBtn.length) {
    openSearchBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            searchPopup.classList.toggle('_open');
            btn.classList.toggle('_active');

            if (btn.classList.contains('_active')) {
                lockPadding();
            }
            else {
                unLockPadding();
            }

            if (catalogMenu.classList.contains('_open')) {
                catalogMenu.classList.remove('_open')
                openCatalogBtns.forEach(btn => {
                    btn.classList.remove('_active');
                })
            }
            if (menu.classList.contains('_open')) {
                menu.classList.remove('_open')
                burger.classList.remove('_active');
            }
        })
    })
}

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (!targetEl.hasAttribute('data-open-catalog') && !targetEl.closest('.catalog-menu') &&
        !targetEl.classList.contains('catalog-menu') && catalogMenu.classList.contains('_open')) {
        catalogMenu.classList.remove('_open');
        unLockPadding();

        openCatalogBtns.forEach(btn => {
            btn.classList.remove('_active');
        })
    }

    if (targetEl.classList.contains('search-popup__close')) {
        searchPopup.classList.remove('_open');
        unLockPadding();
    }
})