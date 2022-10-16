// Variables
const menuIcons = document.querySelectorAll('#menuIcon')
const sidebar = document.querySelector('#Sidebar')
const closeIcon = document.querySelector('#closeIcon')
let scrollBtn = document.querySelector('#scrollBtn')
for (const menuIcon of menuIcons ) {
    menuIcon.addEventListener('click', (event) => {
        sidebar.classList.add('active-sidebar')
    })
    
    closeIcon.addEventListener('click', (event) => {
        sidebar.classList.remove('active-sidebar')
    
    })
    
}
// Events


window.onscroll = function()
{
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  {
    let scrool_btn = document.querySelector('#scrollBtn');
    scrool_btn.style.opacity = '1'; 
    
  }
  else{
    let scrool_btn = document.querySelector('#scrollBtn');
    scrool_btn.style.opacity = '0';
  }
}

scrollBtn.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0});
});

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


