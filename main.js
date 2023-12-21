// var $ = document.querySelector.bind(document);
// var $$= document.querySelectorAll.bind(document)
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
          $(".header").addClass("active");
      } else {
         $(".header").removeClass("active");
      }
  });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});







