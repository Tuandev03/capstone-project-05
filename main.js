// var $ = document.querySelector.bind(document);
// var $$= document.querySelectorAll.bind(document)
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});




$('.back-to-top').click(function(){
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});



