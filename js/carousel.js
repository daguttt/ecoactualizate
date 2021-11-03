// ******************** CAROUSEL ********************
const carousel = (prevButton, nextButton, carouselItems) => {
    const d = document;
    let i = 0;
    d.addEventListener('click', e => {
        if (e.target === prevButton) {
            carouselItems[i].classList.remove('carousel-item-active');
            i--;
            if (i < 0) {
                i = carouselItems.length - 1;
            }
            carouselItems[i].classList.add('carousel-item-active');
        }
        if (e.target === nextButton) {
            carouselItems[i].classList.remove('carousel-item-active');
            i++;
            if (i >= carouselItems.length) {
                i = 0;
            }
            carouselItems[i].classList.add('carousel-item-active');
        }
    })
}
export default carousel;