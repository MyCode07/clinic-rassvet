const scrollElems = document.querySelectorAll('.scroll-wrapper');
if (scrollElems) {
    scrollElems.forEach(elem => {
        const scrollbarThumb = elem.querySelector('.scroll-wrapper__scrollbar span');

        const mapWidth = elem.getBoundingClientRect().width;
        const containerWidth = elem.closest('section').querySelector('._container').getBoundingClientRect().width - 24;

        let scrollLeft = elem.scrollLeft
        let scrollPercent = scrollLeft / (mapWidth - containerWidth)

        let mapVisibleWidth = containerWidth / mapWidth * 100
        let mapHiddenWidth = 100 - mapVisibleWidth
        let scrollBarScroll = mapHiddenWidth * scrollPercent


        scrollbarThumb.style.maxWidth = mapVisibleWidth + '%';
        scrollbarThumb.style.left = 0

        if (window.innerWidth <= 1024) {
            elem.addEventListener('scroll', () => {
                scrollLeft = elem.scrollLeft
                scrollPercent = scrollLeft / (mapWidth - containerWidth)
                scrollBarScroll = mapHiddenWidth * scrollPercent
                scrollbarThumb.style.left = scrollBarScroll + '%';
            })
        }
    });
}