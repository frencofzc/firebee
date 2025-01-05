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

var main = new Splide( '#main-carousel', {
  type       : 'slide',
  pagination : false,
  arrows     : true,
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