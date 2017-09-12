
/**********************/
/** Slider Plugin Active **/ 
/**********************/

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})  
});




/**********************/
/** Portfolio Images **/ 
/**********************/ 

$(document).ready(function(){
    var containerEl = document.querySelector('.portfolio_images');

    var mixer = mixitup(containerEl); 
});


$(document).ready(function(){

  $('.skills-one').animate({
  	width:$(".skills-one").attr("aria-valuenow")+ '%'}
  , 1000);  
  $('.skills-two').animate({
  	width:$(".skills-two").attr("aria-valuenow")+ '%'}
  , 1000);  
  $('.skills-three').animate({
  	width:$(".skills-three").attr("aria-valuenow")+ '%'}
  , 1000);  
  $('.skills-four').animate({
  	width:$(".skills-four").attr("aria-valuenow")+ '%'}
  , 1000);  
  $('.skills-five').animate({
  	width:$(".skills-five").attr("aria-valuenow")+ '%'}
  , 1000);

});