// jQuery(document).ready(function() {
//   "use strict";







// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 65)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 70
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 70
        }
    });


    $('#slider-carousel').carouFredSel({
      responsive:true,
      width:'100%',
      circular:true,
      scroll:{
        items:1,
        duration:500,
        pauseOnHover:true,
      },
      auto:true,
      items: {
        visible:{
          min:1,
          max:1
        },
        height:"variable"
      },
      pagination:{
        container:".sliderpager",
        anchorBuilder:false
      }
    });

})(jQuery); // End of use strict
