$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
  
    $('.logo img').css({
      'transform': 'scale(1.6) rotate(0deg)',
      'transition': 'transform 0.5s ease-in-out',
      'transform-origin': 'center'
    }).delay(1000).queue(function() {
      $(this).css({
        'transform': 'scale(1) rotate(360deg)',
        'transition': 'transform 2s linear infinite'
      });
    });
  });
