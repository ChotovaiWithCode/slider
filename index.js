
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

const updateSlidePosition = () => {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
};

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideImages.length;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideImages.length) % slideImages.length;
  updateSlidePosition();
});
