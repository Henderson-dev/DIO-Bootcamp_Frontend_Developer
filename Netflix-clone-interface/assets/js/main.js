
// abre e feche o menu hamburguer
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


// controle do carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    // center: true,
    responsive:{
        0:{
            items:1.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:5.5
        }
    }
});

// Add call for Owl carousel
// documentation: https://owlcarousel2.github.io/OwlCarousel2/


// Video Background Destaque Home
jQuery(function($){
    var myPlayer;
    jQuery(function(){
        var options = {
            mobileFallbackImage: '',
            playOnlyIfVisible: false
        };
        myPlayer = jQuery('.video-intro').YTPlayer(options); 
    });
});    