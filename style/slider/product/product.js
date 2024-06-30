var slideIndexProduct = 0;
var productSlides = document.querySelectorAll('.product');
var dotContainerProduct = document.getElementById('dots');
var autoSlideIntervalProduct;

function showSlideProduct() {
    for (var i = 0; i < productSlides.length; i++) {
        productSlides[i].style.display = 'none';
    }

    var startIndex = slideIndexProduct;
    var endIndex = startIndex + 4;
    if (endIndex > productSlides.length) {
        endIndex = productSlides.length;
    }

    for (var i = startIndex; i < endIndex; i++) {
        productSlides[i].style.display = 'inline-block';
    }

    var dots = '';
    for (var i = 0; i < productSlides.length; i++) {
        dots += '<span class="dot' + (i >= startIndex && i < endIndex ? ' active' : '') + '" onclick="currentProductSlide(' + i + ')"></span>';
    }
    dotContainerProduct.innerHTML = dots;
}

function prevSlideProduct() {
    slideIndexProduct -= 1;
    if (slideIndexProduct < 0) {
        slideIndexProduct = productSlides.length - 4;
    }
    showSlideProduct();
}

function nextSlideProduct() {
    slideIndexProduct += 1;
    if (slideIndexProduct > productSlides.length - 4) {
        slideIndexProduct = 0;
    }
    showSlideProduct();
}

function currentProductSlide(index) {
    slideIndexProduct = index;
    showSlideProduct();
}

function startAutoSlideProduct() {
    autoSlideIntervalProduct = setInterval(function() {
        nextSlideProduct();
    }, 2000);
}

function stopAutoSlideProduct() {
    clearInterval(autoSlideIntervalProduct);
}

showSlideProduct();
startAutoSlideProduct();

var sliderContainerProduct = document.querySelector('.products');
sliderContainerProduct.addEventListener('mouseenter', function() {
    stopAutoSlideProduct();
});

sliderContainerProduct.addEventListener('mouseleave', function() {
    startAutoSlideProduct();
});

var prevArrowProduct = document.querySelector('.fa-chevron-left');
var nextArrowProduct = document.querySelector('.fa-chevron-right');

prevArrowProduct.addEventListener('click', function() {
    prevSlideProduct();
    stopAutoSlideProduct(); 
});

nextArrowProduct.addEventListener('click', function() {
    nextSlideProduct();
    stopAutoSlideProduct();
});
