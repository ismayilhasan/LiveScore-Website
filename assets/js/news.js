const sidebar = document.querySelector('#Sidebar')
const menuIcons = document.querySelectorAll('#menuIcon')

for (const menuIcon of menuIcons ) {
    menuIcon.addEventListener('click', (event) => {
        sidebar.classList.add('active-sidebar')
    })
    
    closeIcon.addEventListener('click', (event) => {
        sidebar.classList.remove('active-sidebar')
    
    })
    
}

// Slider Settings
$('.categories').slick({
    dots: false,
    infinite: false,
    speed: 550,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: '.next-button',
    prevArrow: '.prev-button',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});