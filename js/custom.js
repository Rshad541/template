$(function(){

  'use strict';
  // Trigger Nice scroll plugin
  $('html').niceScroll({
    cursorcolor:'#f7600e',
    cursorwidth:10,
    cursorborderradius:10,
    cursorborder:'1px solid #f7600e'
  });

  // change header height

  $('.header').height($(window).height());

  // scroll to Features
  $('.chevron').click(function(){

    $('html, body').animate({

      scrollTop: $('.features').offset().top

    },1000);

  });

  $('.hire').click(function(){

        $('html, body').animate({

          scrollTop: $('.our-team').offset().top

        },1000);

  });
  $('.works').click(function(){

        $('html, body').animate({

          scrollTop: $('.our-work').offset().top

        },1000);

  });

  // show hidden pic from our works

  $('.show-more').click(function(){
    $('.our-work .hidden').fadeIn(2000);
  });


  // Check Testimonials

  var leftArrow = $('.testim .left');
  var rightArrow = $('.testim .right');

  function checkClients()
  {
      $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn() ;
      $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn() ;
  }

  checkClients();

  $('.testim .right').click(function(){
        $('.testim .active').fadeOut(100, function(){
            $(this).removeClass('active').next('.client').addClass('active').fadeIn();
            checkClients();
        });
  });
  $('.testim .left').click(function(){
        $('.testim .active').fadeOut(100, function(){
            $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
            checkClients();
        });
  });

});
