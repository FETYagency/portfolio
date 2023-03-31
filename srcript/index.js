const imageGalleryContainer = document.querySelector('.gallery');
const prevButton = document.querySelector('.arrow__left');
const nextButton = document.querySelector('.arrow__right');

prevButton.addEventListener('click', () => {
  // Scroll the container to the left
  imageGalleryContainer.scrollLeft -= imageGalleryContainer.offsetWidth/2.5;
});

nextButton.addEventListener('click', () => {
  // Scroll the container to the right
  imageGalleryContainer.scrollLeft += imageGalleryContainer.offsetWidth/2.5;
});