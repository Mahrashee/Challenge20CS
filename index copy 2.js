console.log("JavaScript file loaded!");

$(document).ready(function() {
  $('.resume-button').click(function(e) {
    e.preventDefault();
    
    $('html, body').animate({
      scrollTop: $('.grid-container').offset().top
    }, 2000);
  });
});
$(window).on('load', function() {
    setTimeout(function() {
      $('#preloader').fadeOut(500);
    }, 1000); // Adjust the duration (in milliseconds) as needed
  });
  
  $(document).ready(function() {
    $(".animate-heading").fadeIn(2000); // Fade in the heading over 2 seconds
    $(".animate-heading").slideDown(2000); // Slide down the heading over 2 seconds
  });
  