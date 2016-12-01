$(".smooth-scroll").click(function() {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);
});


// This is for scrolling back up
$(document).ready(function() {
  $("#return-to-top").click(function() {
    $('html, body').animate({
      scrollTop: $("#Start").offset().top
    }, 1000);
  });

  $(window).scroll(function() {
    var windowsHeight = $(document).height() - $(window).height();
    var currentScroll = $(window).scrollTop();
    if (((currentScroll * 100) / windowsHeight) > 98) {
      jQuery('#return-to-top').css('bottom', '120px');
    } else {
      jQuery('#return-to-top').css('bottom', '20px');
    }
  });
});