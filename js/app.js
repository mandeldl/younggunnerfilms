$(document).ready(function() {
  var menu = $('.centered-navigation-menu');
  var menuToggle = $('.centered-navigation-menu-button');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });

// Accordion Tabs

  $('.accordion-tabs-minimal').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });

  // Navigating to Previous Work
  $('.prev-work').on('click', 'li > a', function(event) {
    event.preventDefault();
    //Get the target tab link from the a href, store in clicktarget
    var targetTab = $(this).attr('href');
    var $targetTab = $(""+targetTab+"");
    // Store accordion tabs ul in accordionTabs
    var accordionTabs = $('accordion-tabs-minimal');
    if (!$targetTab.hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $targetTab.closest('.accordion-tabs-minimal')
      accordionTabs.find('.is-open').removeClass('is-open').hide();
      $targetTab.next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $targetTab.addClass('is-active');
    } else {
      event.preventDefault();
    }

  });

// FitVids - targetting .video-wrapper class, parent class of .video has max-width of 560px.

  $('.video-wrapper').fitVids();

});