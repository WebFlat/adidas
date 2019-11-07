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

//Show nav-bar***************************************************************************
 let g_top = 0;
  $(window).scroll(function() {
    let top = $(this).scrollTop();
    if ( top < g_top ) {
      $('.header').css("position", "fixed").css("z-index", "20").css("transform", "translateY(0)");
    } else {
      $('.header').css("position", "absolute").css("transform", "translateY(-100px)");
    }
    g_top = top;    
  });


//Open-Close search*****************************************************************************
  $('.nav-bottom__search').on('click', function(e) {
		e.preventDefault;
		$('.nav-search').css("transform", "translateY(0)").css("position", "fixed");

	});
  $('.nav-search__close').on('click', function(e) {
    e.preventDefault;
    $('.nav-search').css("transform", "translateY(-2000px)");
  })

});