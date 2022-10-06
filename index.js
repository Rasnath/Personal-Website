var lastScrollTop = 0;

$(document).scroll(function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    $(".navbar").slideUp()
  } else {
    $(".navbar").slideDown()
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

// $(".sun").animate( {top: 143px}, [1000])


  $( ".sun" ).animate({
    top: 143,
  }, 2500);
