document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('close-btn');

  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  } else {
    console.error('Elemento #mobile-menu no encontrado.');
  }
});




$(document).ready(function() {
  let currentIndex = 0;
  const images = $('.carousel-image');
  const dots = $('.dot');

  function showImage(index) {
    if (index >= images.length) {
      currentIndex = 0;
    } 
    else if (index < 0) {
      currentIndex = images.length - 1;
    } 
    else {
      currentIndex = index;
    }

    images.removeClass('active');
    dots.removeClass('active');

    images.eq(currentIndex).addClass('active');
    dots.eq(currentIndex).addClass('active');
  }

  $('.next').click(function() {
    showImage(currentIndex + 1);
  });

  $('.prev').click(function() {
    showImage(currentIndex - 1);
  });

  dots.click(function() {
    let index = $(this).data('index');
    showImage(index);
  });

  showImage(currentIndex);
});

let currentIndex = 0; 

function moveSlide(direction) {
  const images = document.querySelectorAll('.slider-images img'); 

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const slider = document.querySelector('.slider-images');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
}


$(document).ready(function() {
  let currentSlideIndex = 0; 
  const images = $('.tatodobien-carousel-image'); 
  const dots = $('.tatodobien-dot'); 
  const prevButton = $('.tatodobien-prev'); 
  const nextButton = $('.tatodobien-next');

  function showSlide(index) {
    if (index >= images.length) {
      currentSlideIndex = 0;
    } 
    else if (index < 0) {
      currentSlideIndex = images.length - 1;
    } 
    else {
      currentSlideIndex = index;
    }

    images.removeClass('active');
    dots.removeClass('active');

    images.eq(currentSlideIndex).addClass('active');
    dots.eq(currentSlideIndex).addClass('active');
  }

  nextButton.click(function() {
    showSlide(currentSlideIndex + 1); 
  });

  prevButton.click(function() {
    showSlide(currentSlideIndex - 1); 
  });

  dots.click(function() {
    let index = $(this).data('index'); 
    showSlide(index); 
  });

  showSlide(currentSlideIndex);
});

document.addEventListener("DOMContentLoaded", function() {
  let activeIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  function showImage(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;

    images.forEach((image, i) => {
      image.classList.remove('active');
      dots[i].classList.remove('active');
    });

    images[index].classList.add('active');
    dots[index].classList.add('active');

    activeIndex = index;
  }

  prevButton.addEventListener('click', () => {
    showImage(activeIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showImage(activeIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
    });
  });

  showImage(activeIndex);
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image-custom1');
  const dots = document.querySelectorAll('.dot-custom1');
  const prevButton = document.querySelector('.prev-custom1');
  const nextButton = document.querySelector('.next-custom1'); 
  
  let carouselIndex = 0; 
  
  function updateCarousel() {
    images.forEach((img) => img.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    
    images[carouselIndex].classList.add('active');
    dots[carouselIndex].classList.add('active');
  }

  function prevImage() {
    carouselIndex = (carouselIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function nextImage() {
    carouselIndex = (carouselIndex + 1) % images.length;
    updateCarousel();
  }

  function goToImage(index) {
    carouselIndex = index;
    updateCarousel();
  }

  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToImage(index));
  });

  updateCarousel();
});
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-image-custom');
  const dots = document.querySelectorAll('.dot-custom');
  const prevButton = document.querySelector('.prev-custom');
  const nextButton = document.querySelector('.next-custom'); 
  
  let carouselIndex = 0; 
  
  function updateCarousel() {
    images.forEach((img) => img.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    
    images[carouselIndex].classList.add('active');
    dots[carouselIndex].classList.add('active');
  }

  function prevImage() {
    carouselIndex = (carouselIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  function nextImage() {
    carouselIndex = (carouselIndex + 1) % images.length;
    updateCarousel();
  }

  function goToImage(index) {
    carouselIndex = index;
    updateCarousel();
  }

  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToImage(index));
  });

  updateCarousel();
});
