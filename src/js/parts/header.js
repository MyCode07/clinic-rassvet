export const stickyHeader = () => {
    const header = document.querySelector('header');
    // const offer = document.querySelector('.offer');

    if (!header) return

    const headerheigth = header.getBoundingClientRect().height;


    const sticky = () => {
        if (window.scrollY > headerheigth) {
            header.classList.add('_sticky')
            // offer.classList.add('_close');
        }
        else {
            header.classList.remove('_sticky')
            // offer.classList.remove('_close');
        }
    }

    sticky();
    window.addEventListener('scroll', sticky);
}