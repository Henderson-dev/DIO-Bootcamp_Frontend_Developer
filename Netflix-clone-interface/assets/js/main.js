$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
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


jQuery(function($){
    // Video Background Destaque Home
    var myPlayer;
    jQuery(function(){
        var options = {
            mobileFallbackImage: '',
            playOnlyIfVisible: false
        };
        myPlayer = jQuery('.video-intro').YTPlayer(options); 
    });
});    