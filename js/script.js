$(document).ready(function() {
 	"use strict";

//Slider************************************************************ 
 $('.owl-carousel').owlCarousel({
    margin: 5,
	nav: true,
	responsive:{
        0: {
          items: 1
        },
        550:{
            items:2
        },
        900:{
            items:3
        },
        1024:{
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
    $('.nav-search').css("transform", "translateY(-100%)");
  })

  //Open-Close feedback**************************************************************************
  $('#feedback__btn').on('click', function(e) {
    e.preventDefault;
    if ($('#feedback').hasClass('feedback__active')) {
        $('#feedback').removeClass('feedback__active');
    } else {
        $('#feedback').addClass('feedback__active');
    }
  });
  $('#feddback-close').on('click', function(e) {
    e.preventDefault;
    $('#feedback').css("transform", "translateX(110%)");
  });


});