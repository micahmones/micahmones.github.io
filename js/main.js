// ----------------------------------------------
// --------- PROJECT SCROLLING FUNCTION ---------
$('.projects').click(function () {
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
});

// set browser to top position
if (window.location.hash)
  scroll(0, 0);
setTimeout(function () {
  scroll(0, 0);
}, 1);

$(function () {
  $('.projects').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top + 'px'
    }, 1000, 'swing');
  });

  // if anchor exists in the url
  if (window.location.hash) {
    // smooth scroll to the anchor id
    $('html,body').animate({
      scrollTop: $(window.location.hash).offset().top + 'px'
    }, 1000, 'swing');
  }
});
// ----------------------------------------------
$('.page-header-main>a').mouseover(function () {
  $(this).css('color', '#282828');
});

$('.page-header-main>a').mouseout(function () {
  $(this).css('color', '#a7abb2');
});

$('.page-footer-section>ul>li').mouseover(function () {
  $(this).css('margin-top', '-10px');
})

$('.page-footer-section>ul>li').mouseout(function () {
  $(this).css('margin-top', 'initial');
})

//HOME PAGE SCROLL DOWN BUTTON FUNCTIONS
$('.scroll-down').mouseenter(function () {
  $(this).animate({
    width: '+=25',
  }, 250)
})

$('.scroll-down').mouseleave(function () {
  $(this).animate({
    width: '-=25'
  }, 250)
})

$('.scroll-down').click(function () {
  $('html, body').animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
});
//-----------------------------------------