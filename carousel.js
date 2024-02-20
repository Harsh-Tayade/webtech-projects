document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.coupon-bar button:first-child');
    const nextBtn = document.querySelector('.coupon-bar button:last-child');
    const cardWidth = carousel.querySelector('.card').offsetWidth;
    const autoPlayInterval = 3000;
    let currentPosition = 0;
    let autoPlayTimer;
    const gap = 50;

    function moveCarousel(direction) {
        const maxPosition = -(carousel.scrollWidth - carousel.offsetWidth);
        if (direction === 'next') {
            currentPosition -= cardWidth + gap;
            if (currentPosition < maxPosition) {
                currentPosition = 0;
            }
        } else if (direction === 'prev') {
            currentPosition += cardWidth + gap;
            if (currentPosition > 0) {
                currentPosition = maxPosition;
            }
        }
        carousel.style.transform = `translateX(${currentPosition}px)`;
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(function() {
            moveCarousel('next');
        }, autoPlayInterval);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    startAutoPlay(); // Start autoplay when the page loads

    carousel.addEventListener('mouseenter', stopAutoPlay); // Pause autoplay on mouseenter
    carousel.addEventListener('mouseleave', startAutoPlay); // Resume autoplay on mouseleave

    prevBtn.addEventListener('click', function() {
        moveCarousel('prev');
        stopAutoPlay(); // Stop autoplay when navigating with buttons
    });

    nextBtn.addEventListener('click', function() {
        moveCarousel('next');
        stopAutoPlay(); // Stop autoplay when navigating with buttons
    });
});
