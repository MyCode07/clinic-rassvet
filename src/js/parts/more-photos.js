const gallerires = document.querySelectorAll('.photo-gallery');
if (gallerires.length) {
    gallerires.forEach(gallery => {
        const btn = gallery.querySelector('._more');

        if (btn) {
            btn.addEventListener('click', () => {
                gallery.classList.toggle('_active');

                if (gallery.classList.contains('_active')) {
                    btn.textContent = btn.dataset.textHide
                }
                else {
                    btn.textContent = btn.dataset.textShow
                }
            })
        }
    })
}