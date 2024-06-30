
    var currentSlide = 0;
    var slides = document.querySelectorAll('#slideshowLine .item');

    function showSlideLine(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlideLine() {
        var nextIndex = (currentSlide + 1) % slides.length;
        showSlideLine(nextIndex);
    }

    function prevSlideLine() {
        var prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlideLine(prevIndex);
    }

    setInterval(nextSlideLine, 2000);
