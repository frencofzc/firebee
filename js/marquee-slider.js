// class MarqueeSlider extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.setupMarquee();
//   }

//   setupMarquee() {
//     // Read settings from data attributes
//     const slidesToShow = parseInt(this.dataset.slidesToShow) || 3;
//     const speed = parseFloat(this.dataset.speed) || 1;

//     // Duplicate children for the infinite loop effect
//     const gliderContainer = document.createElement('div');
//     gliderContainer.classList.add('glider');
//     gliderContainer.innerHTML = this.innerHTML + this.innerHTML;

//     // Clear current content and append glider container
//     this.innerHTML = '';
//     this.appendChild(gliderContainer);

//     // Initialize Glider.js
//     const glider = new Glider(gliderContainer, {
//       slidesToShow: slidesToShow,
//       draggable: false,
//       duration: 0.5,
//     });

//     // Implement the marquee effect
//     const startMarquee = () => {
//       let scrollPosition = gliderContainer.scrollLeft;
//       gliderContainer.scrollLeft += speed;

//       if (gliderContainer.scrollLeft >= gliderContainer.scrollWidth / 2) {
//         gliderContainer.scrollLeft = 0;
//       }
//       requestAnimationFrame(startMarquee);
//     };

//     startMarquee();
//   }
// }

// // Define the custom element
// customElements.define('marquee-slider', MarqueeSlider);

// class MarqueeSlider extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.setupMarquee();
//   }

//   setupMarquee() {
//     // Read settings from data attributes
//     const slidesToShow = parseInt(this.dataset.slidesToShow) || 3;
//     const slidesToShowMobile = parseInt(this.dataset.slidesToShowMobile) || 1; // Mobile-specific slides
//     const speed = parseFloat(this.dataset.speed) || 1;

//     // Duplicate children for the infinite loop effect
//     const gliderContainer = document.createElement('div');
//     gliderContainer.classList.add('glider');
//     gliderContainer.innerHTML = this.innerHTML + this.innerHTML;

//     // Clear current content and append glider container
//     this.innerHTML = '';
//     this.appendChild(gliderContainer);

//     // Initialize Glider.js with responsive settings
//     const glider = new Glider(gliderContainer, {
//       slidesToShow: slidesToShowMobile,
//       draggable: false,
//       duration: 0.5,
//       responsive: [
//         {
//           // For screens below 768px
//           breakpoint: 768,
//           settings: {
//             slidesToShow: slidesToShow,
//           },
//         },
//       ],
//     });

//     // Variable to track pause state
//     let isPaused = false;

//     // Implement the marquee effect
//     const startMarquee = () => {
//       if (!isPaused) {
//         gliderContainer.scrollLeft += speed;

//         if (gliderContainer.scrollLeft >= gliderContainer.scrollWidth / 2) {
//           gliderContainer.scrollLeft = 0;
//         }
//       }
//       requestAnimationFrame(startMarquee);
//     };

//     // Pause on hover and resume on mouse leave
//     this.addEventListener('mouseenter', () => (isPaused = true));
//     this.addEventListener('mouseleave', () => (isPaused = false));

//     // Start the marquee
//     startMarquee();
//   }
// }

// // Define the custom element
// customElements.define('marquee-slider', MarqueeSlider); 


// class MarqueeSlider extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.setupMarquee();
//   }

//   setupMarquee() {
//     const speed = parseFloat(this.dataset.speed) || 1;

//     // Create a container for slides
//     const gliderContainer = document.createElement('div');
//     gliderContainer.classList.add('glider');

//     // Duplicate slides for infinite looping
//     gliderContainer.innerHTML = this.innerHTML + this.innerHTML;

//     // Replace the inner content with the glider container
//     this.innerHTML = '';
//     this.appendChild(gliderContainer);

//     // Variables for scrolling logic
//     let isPaused = false;

//     // Marquee scrolling logic
//     const startMarquee = () => {
//       if (!isPaused) {
//         gliderContainer.scrollLeft += speed;

//         // Reset when scrolling reaches the end of the first set of slides
//         if (gliderContainer.scrollLeft >= gliderContainer.scrollWidth / 2) {
//           gliderContainer.scrollLeft = 0;
//         }
//       }
//       requestAnimationFrame(startMarquee);
//     };

//     // Pause on hover and resume on mouse leave
//     this.addEventListener('mouseenter', () => (isPaused = true));
//     this.addEventListener('mouseleave', () => (isPaused = false));

//     // Start scrolling
//     startMarquee();
//   }
// }

// // Register the custom element
// customElements.define('marquee-slider', MarqueeSlider);