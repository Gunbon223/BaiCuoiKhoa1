$(document).ready(function(){
});


$('.owl-carousel').owlCarousel({
  loop:true, 
  margin:12, //kc giua cac ptiu slider
  nav:true,  
  dots:false,
  autoplay:true,
  autoplayTimeout:4000,
  navText : ["<i class='fa-solid fa-chevron-left fa-lg' style='color:rgba(30, 40, 50, 0.25);'></i></i>","<i class='fa-solid fa-chevron-right fa-lg' style='color:rgba(30, 40, 50, 0.25);'>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})