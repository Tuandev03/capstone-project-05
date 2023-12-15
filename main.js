// var $ = document.querySelector.bind(document);
// var $$= document.querySelectorAll.bind(document)
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
         $(".header").removeClass("active");
      }
  });
});




$('.back-to-top').click(function(){
  $('html, body').animate({ scrollTop: 0 }, 100);
  return false;
});



