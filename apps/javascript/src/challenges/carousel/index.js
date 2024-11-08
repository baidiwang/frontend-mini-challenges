// import img1 from './images/1.jpg';
// import img2 from './images/2.jpg';
// import img3 from './images/3.jpg';
// import img4 from './images/4.jpg';
// import img5 from './images/5.jpg';

// const carouselEl = document.getElementById('carousel');
// const leftHandleEl = document.getElementById('leftHandle');
// const rightHandleEl = document.getElementById('rightHandle');
// const infiniteEl = document.getElementById('infinite');
// const autoPlayEl = document.getElementById('autoplay');
// const autoPlayIntervalEl = document.getElementById('autoplayInterval');

// class Carousel {
//   constructor(
//     carousel,
//     {
//       images,
//       leftHandle,
//       rightHandle,
//       isInfinite = true,
//       autoPlay = false,
//       autoPlayInterval = 5000,
//       selected = 0,
//     }
//   ) {
//     this.carousel = carousel;
//     this.images = images;
//     this.leftHandle = leftHandle;
//     this.rightHandle = rightHandle;
//     this.selected = selected;
//     this.isInfinite = isInfinite;
//     this.autoPlay = autoPlay;
//     this.autoPlayInterval = autoPlayInterval;

//     this.placeImages();
//     this.dotHolder = this.createProgress();
//     this.addListeners();
//     this.setSelection();

//     this.startAutoPlay();
//   }

//   setInfinite(isInfinite) {
//     this.isInfinite = isInfinite;
//     this.setHandles();
//   }

//   setAutoPlay(autoPlay, autoPlayInterval) {
//     this.autoPlay = autoPlay;
//     this.autoPlayInterval = autoPlayInterval;
//     this.startAutoPlay();
//   }

//   startAutoPlay() {
//     if (this.autoPlay) {
//       clearInterval(this.intervalId);
//       this.intervalId = setInterval(this.swipeRight, this.autoPlayInterval);
//     } else {
//       clearInterval(this.intervalId);
//     }
//   }

//   addListeners() {
//     this.leftHandle.addEventListener('click', this.swipeLeft);
//     this.rightHandle.addEventListener('click', this.swipeRight);
//     this.dotHolder.addEventListener('click', this.dotSelect);
//   }

//   swipeLeft = () => {
//     if (this.selected === 0 && !this.isInfinite) {
//       return;
//     }

//     this.selected -= 1;
//     if (this.selected < 0) this.selected += this.images.length;
//     this.setSelection();
//   };

//   swipeRight = () => {
//     if (this.selected === this.images.length - 1 && !this.isInfinite) {
//       return;
//     }
//     this.selected += 1;
//     this.selected %= this.images.length;
//     this.setSelection();
//   };

//   dotSelect = (event) => {
//     if (!event.target.classList.contains('dot')) {
//       return;
//     }

//     this.selected = +event.target.dataset.index;
//     this.setSelection();
//   };

//   setSelection() {
//     const imageHolder = this.carousel.querySelector('.img-holder');
//     const dot = this.dotHolder.querySelector(`[data-index='${this.selected}']`);

//     imageHolder.style.transform = `translateX(${256 * -this.selected}px)`;
//     this.dotHolder.querySelector('.selected')?.classList.remove('selected');
//     dot.classList.add('selected');
//     this.setHandles();
//   }

//   setHandles() {
//     if (this.isInfinite) {
//       this.disableHandles({
//         isLeftDisabled: false,
//         isRightDisabled: false,
//       });
//     } else {
//       this.disableHandles({
//         isLeftDisabled: this.selected === 0,
//         isRightDisabled: this.selected === this.images.length - 1,
//       });
//     }
//   }

//   disableHandles({ isLeftDisabled, isRightDisabled }) {
//     this.leftHandle.disabled = isLeftDisabled;
//     this.rightHandle.disabled = isRightDisabled;
//   }

//   placeImages() {
//     const imageFrame = document.createElement('div');
//     imageFrame.classList.add('img-frame');
//     const imageHolder = document.createElement('div');
//     imageHolder.classList.add('img-holder');
//     this.images.forEach((image) => {
//       const img = document.createElement('img');
//       img.src = image;
//       imageHolder.appendChild(img);
//     });
//     imageFrame.appendChild(imageHolder);
//     this.carousel.appendChild(imageFrame);
//   }

//   createProgress() {
//     const dotHolder = document.createElement('ul');
//     dotHolder.classList.add('dot-holder');

//     this.images.forEach((_, idx) => {
//       const li = document.createElement('li');
//       li.role = 'presentation';

//       const button = document.createElement('button');
//       button.role = 'tab';

//       button.dataset.index = idx;
//       button.classList.add('dot');

//       li.appendChild(button);
//       dotHolder.appendChild(li);
//     });
//     this.carousel.appendChild(dotHolder);
//     return dotHolder;
//   }
// }

// const carousel = new Carousel(carouselEl, {
//   images: [img1, img2, img3, img4, img5],
//   selected: 0,
//   leftHandle: leftHandleEl,
//   rightHandle: rightHandleEl,
//   isInfinite: false,
// });

// infiniteEl.addEventListener('change', () => {
//   carousel.setInfinite(infiniteEl.checked);
// });

// autoPlayEl.addEventListener('change', () => {
//   autoPlayIntervalEl.disabled = !autoPlayEl.checked;
//   carousel.setAutoPlay(autoPlayEl.checked, autoPlayIntervalEl.value);
// });

// autoPlayIntervalEl.addEventListener('change', () => {
//   carousel.setAutoPlay(autoPlayEl.checked, autoPlayIntervalEl.value);
// });

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';

const initializeCarousel = (carouselEl, images) => {
  let currentIndex = 0;

  // Create image frame and holder
  const imageFrame = document.createElement('div');
  imageFrame.className = 'img-frame';

  // Create basic structure
  const imageHolder = document.createElement('div');
  imageHolder.className = 'img-holder';

  // Add images
  images.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    imageHolder.appendChild(img);
  });

  // Structure: carousel > imageFrame > imageHolder > images
  imageFrame.appendChild(imageHolder);
  carouselEl.appendChild(imageFrame);

  // Reference the existing left and right buttons in HTML
  const leftBtn = carouselEl.querySelector('.left-handle');
  const rightBtn = carouselEl.querySelector('.right-handle');

  // Update image position
  const updatePosition = () => {
    imageHolder.style.transform = `translateX(${-currentIndex * 256}px)`;
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex === images.length - 1;
  };

  // Click handlers for existing buttons
  leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updatePosition();
    }
  });

  rightBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updatePosition();
    }
  });

  // Initialize position and dots
  updatePosition();
};

// Get carousel element and initialize
const carouselEl = document.getElementById('carousel');
initializeCarousel(carouselEl, [img1, img2, img3, img4, img5]);
