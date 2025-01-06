// var splide = new Splide( '#main-carousel', {
//   pagination: false,
// } );

// var thumbnails = document.getElementsByClassName( 'thumbnail' );
// var current;

// for ( var i = 0; i < thumbnails.length; i++ ) {
//   initThumbnail( thumbnails[ i ], i );
// }

// function initThumbnail(thumbnail, index) {
//   thumbnail.addEventListener('click', function () {
//     splide.go(index);
//   });

//   thumbnail.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter' || event.key === ' ') {
//       splide.go(index);
//     }
//   });
// }

// splide.on('mounted move', function () {
//   var thumbnail = thumbnails[splide.index];

//   if (thumbnail) {
//     if (current) {
//       current.classList.remove('is-active');
//       current.removeAttribute('aria-current');
//     }

//     thumbnail.classList.add('is-active');
//     thumbnail.setAttribute('aria-current', 'true');
//     current = thumbnail;
//   }
// });

// splide.mount();

class AccordionTab extends HTMLElement {
  constructor() {
    super();

    this.details = this.querySelector('details');
    this.summary = this.querySelector('summary');
    this.content = this.querySelector('.accordion__content');

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;

    // Use IntersectionObserver to initialize when visible
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.init();
          observer.disconnect(); // Stop observing once initialized
        }
      });
    }, {
      root: null, // Observe in the viewport
      threshold: 0.1 // Initialize when 10% visible
    });

    this.observer.observe(this);
  }

  init() {
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();

    this.details.style.overflow = 'hidden';
    if (this.isClosing || !this.details.open) {
      this.open();
    } else if (this.isExpanding || this.details.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const summaryStyle = window.getComputedStyle(this.summary);
    const startHeight = `${this.details.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + parseInt(summaryStyle.marginTop)}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.details.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 250,
      easing: 'ease'
    });

    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    this.details.style.height = `${this.details.offsetHeight}px`;
    this.details.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const summaryStyle = window.getComputedStyle(this.summary);
    const startHeight = `${this.details.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + parseInt(summaryStyle.marginTop) + this.content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.details.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });
    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open) {
    this.details.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.details.style.height = this.details.style.overflow = '';
  }
}

customElements.define('accordion-tab', AccordionTab);


var main = new Splide( '#main-carousel', {
  type       : 'slide',
  pagination : false,
  arrows     : false,
  cover      : true,
} );

var thumbnails = new Splide( '#main-carousel-thumbnails', {
  rewind          : true,
  fixedWidth      : 100,
  fixedHeight     : 100,
  isNavigation    : true,
  gap             : 26,
  pagination      : false,
  cover           : true,
  arrows          : false,
  // focus           : 'center',
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
  breakpoints : {
    640: {
      fixedWidth  : 54,
      fixedHeight : 54,
      gap         : 13,
    },
  },
} );

main.sync( thumbnails );
main.mount();
thumbnails.mount();