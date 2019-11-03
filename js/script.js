$(document).ready(function() {
 	"use strict";

//Slider************************************************************ 
 $('.owl-carousel').owlCarousel({
    margin: 5,
	nav: true,
	responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
 });


 let g_top = 0;
  $(window).scroll(function() {
    let top = $(this).scrollTop();
    if ( top < g_top ) {
      $('header').css("position", "fixed").css("z-index", "200").css("transform", "translateY(0)");
    } else {
      $('header').css("position", "absolute").css("transform", "translateY(-100px)");
    }
    g_top = top;    
  });

});