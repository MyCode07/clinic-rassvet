const scrollElems = document.querySelectorAll('.scroll-wrapper');
if (scrollElems) {
    scrollElems.forEach(elem => {
        const scrollElem = elem.querySelector('.scroll-wrapper__table');
        const table = document.querySelector('.table');
        const scrollbar = elem.querySelector('.scroll-wrapper__scrollbar');
        const scrollbarThumb = elem.querySelector('.scroll-wrapper__scrollbar span');

        const containerWidth = elem.closest('section').querySelector('._container').getBoundingClientRect().width - 24;
        const scrollElemWidth = table.getBoundingClientRect().width;
        const scrollbarWidth = scrollbar.getBoundingClientRect().width;
        const scrollbarThumbWidth = scrollbarThumb.getBoundingClientRect().width;
        const scrollbarScrollPecent = 100 - scrollbarThumbWidth / scrollbarWidth * 100;

        let scrollLeft = scrollElem.scrollLeft
        let scrollPercent = scrollLeft / (scrollElemWidth - containerWidth)

        let scrollElemVisibleWidth = containerWidth / scrollElemWidth * 100
        let scrollElemHiddenWidth = 100 - scrollElemVisibleWidth
        let scrollBarScroll = scrollElemHiddenWidth * scrollPercent


        scrollbarThumb.style.maxWidth = scrollElemVisibleWidth + '%';
        scrollbarThumb.style.left = 0

        if (window.innerWidth <= 1024) {
            scrollElem.addEventListener('scroll', () => {
                scrollLeft = scrollElem.scrollLeft
                scrollPercent = scrollLeft / (scrollElemWidth - containerWidth)
                scrollBarScroll = scrollElemHiddenWidth * scrollPercent
                // scrollbarThumb.style.left = scrollBarScroll + '%';
                scrollbarThumb.style.left = scrollPercent * scrollbarScrollPecent + '%';
            })
        }
    });
}