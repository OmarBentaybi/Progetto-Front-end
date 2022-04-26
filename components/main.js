let menu = document.querySelector(".icone-menu");
let navbar = document.querySelector('.menu');
let bell= document.querySelector('.notifiche');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    bell.classList.remove('active');
}

document.querySelector('#campanello').onclick= () => {

    bell.classList.toggle('active');

}
var swiper = new Swiper(".trending-content", {
    loop: true,
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });

  window.onscroll = function() {mufunction()};



  function mufunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
  }