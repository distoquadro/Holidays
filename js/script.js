$(document).ready(function() {
    $('#carousel-1').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:2
            },
            1352:{
                items:3
            }
        }
    })
    $('#carousel-2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1379:{
                items:1
            },
            1400:{
                items:2
            }
        }
    })
    $('#carousel-3').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1100:{
                items:3
            }
        }
    })
    $( function() {
        $( "#datepicker" ).datepicker();
      } );
      $( function() {
        $( "#datepicker-2" ).datepicker();
      } );
    
    $('.mobile-tab').hide();
    $('#burg').on('click',function(){
        $('.mobile-tab').slideToggle(100);
    })
    });
