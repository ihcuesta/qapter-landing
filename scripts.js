
// ANIMATIONS
$( window ).on( "load", function() {
  $(".loader").fadeOut("200");
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
    $(".menu-mob").toggleClass('menu-open');
  });
  
  $('.linkm').click(function(){
    $('#nav-icon3').toggleClass('open');
    $(".menu-mob").toggleClass('menu-open');
  });


  $(".vi1").click(function() {
    $(".vi").removeClass("visible-vid");
    $("#vid-player1").addClass("visible-vid");
    $(".vid-item").removeClass("vid-item-active");
    $(this).addClass("vid-item-active");
  });

  $(".vi2").click(function() { 
    $(".vi").removeClass("visible-vid");
    $("#vid-player2").addClass("visible-vid");
    $(".vid-item").removeClass("vid-item-active");
    $(this).addClass("vid-item-active");
  });

  $(".vi3").click(function() { 
    $(".vi").removeClass("visible-vid");
    $("#vid-player3").addClass("visible-vid");
    $(".vid-item").removeClass("vid-item-active");
    $(this).addClass("vid-item-active");
  });

  $(".vi4").click(function() { 
    $(".vi").removeClass("visible-vid");
    $("#vid-player4").addClass("visible-vid");
    $(".vid-item").removeClass("vid-item-active");
    $(this).addClass("vid-item-active");
  });

  $(".vi5").click(function() { 
    $(".vi").removeClass("visible-vid");
    $("#vid-player5").addClass("visible-vid");
    $(".vid-item").removeClass("vid-item-active");
    $(this).addClass("vid-item-active");
  });
  
  $(".vi6").click(function() { 
    $(".vi").removeClass("visible-vid");
    $("#vid-player6").addClass("visible-vid");
    $(".vid-item").removeClass("vid-item-active");
    $(this).addClass("vid-item-active");
  });

  $("#header-link").click(function() {
    $("#header-vid").fadeIn(500);
    $(".video-header iframe").css("display", "none");
    $("#vid1").css("display", "block");
  });

  $("#sync-link").click(function() {
    $("#header-vid").fadeIn(500);
    $(".video-header iframe").css("display", "none");
    $("#vid2").css("display", "block");
  });

  $("#x-header").click(function() {
    $("#header-vid").fadeOut(500);
  });

  $("#header-vid").click(function() {
    $(this).fadeOut(500);
  });


  $(".efficient").click(function() {
    $(".cont-features").fadeOut(500);
    $(".feature1").delay(400).fadeIn(500);
    $(".feature1 .img-feature").delay(1000).addClass("slideRight");
    
    $("#efficient").addClass("efficient-active feature-active");
    $("#efficient").removeClass("efficient feature");
    
    $("#intuitive").removeClass("intuitive-active feature-active");
    $("#transparent").removeClass("transparent-active feature-active");
    $("#flexible").removeClass("flexible-active feature-active");
    $("#multidevice").removeClass("multidevice-active feature-active");
    $("#intelligent").removeClass("intelligent-active feature-active");

    $("#intuitive").addClass("intuitive feature");
    $("#transparent").addClass("transparent feature");
    $("#flexible").addClass("flexible feature");
    $("#multidevice").addClass("multidevice feature");
    $("#intelligent").addClass("intelligent feature");
  });
  
  $(".intuitive").click(function() {
    $(".cont-features").fadeOut(500);
    $(".feature2").delay(400).fadeIn(500);
    $(".img-feature2").delay(1000).addClass("slideRight");
    
    $("#intuitive").addClass("intuitive-active feature-active");
    $("#intuitive").removeClass("intuitive feature");

    $("#efficient").removeClass("efficient-active feature-active");
    $("#transparent").removeClass("transparent-active feature-active");
    $("#flexible").removeClass("flexible-active feature-active");
    $("#multidevice").removeClass("multidevice-active feature-active");
    $("#intelligent").removeClass("intelligent-active feature-active");

    $("#efficient").addClass("efficient feature");
    $("#transparent").addClass("transparent feature");
    $("#flexible").addClass("flexible feature");
    $("#multidevice").addClass("multidevice feature");
    $("#intelligent").addClass("intelligent feature");
  });

  $(".transparent").click(function() {
    $(".cont-features").fadeOut(500);
    $(".feature3").delay(400).fadeIn(500);
    $(".feature3 .img-feature").delay(1000).addClass("slideRight");

    $("#transparent").addClass("transparent-active feature-active");
    $("#transparent").removeClass("transparent feature");

    $("#efficient").removeClass("efficient-active feature-active");
    $("#intuitive").removeClass("intuitive-active feature-active");
    $("#flexible").removeClass("flexible-active feature-active");
    $("#multidevice").removeClass("multidevice-active feature-active");
    $("#intelligent").removeClass("intelligent-active feature-active");

    $("#intuitive").addClass("intuitive feature");
    $("#efficient").addClass("efficient feature");
    $("#flexible").addClass("flexible feature");
    $("#multidevice").addClass("multidevice feature");
    $("#intelligent").addClass("intelligent feature");
  });

  $(".flexible").click(function() {
    $(".cont-features").fadeOut(500);
    $(".feature4").delay(400).fadeIn(500);
    $(".feature4 .img-feature").delay(1000).addClass("slideRight");

    $("#flexible").addClass("flexible-active feature-active");
    $("#flexible").removeClass("flexible feature");

    $("#efficient").removeClass("efficient-active feature-active");
    $("#intuitive").removeClass("intuitive-active feature-active");
    $("#transparent").removeClass("transparent-active feature-active");
    $("#multidevice").removeClass("multidevice-active feature-active");
    $("#intelligent").removeClass("intelligent-active feature-active");

    $("#intuitive").addClass("intuitive feature");
    $("#transparent").addClass("transparent feature");
    $("#efficient").addClass("efficient feature");
    $("#multidevice").addClass("multidevice feature");
    $("#intelligent").addClass("intelligent feature");
  });

  $(".multidevice").click(function() {
    $(".cont-features").fadeOut(500);
    $(".feature5").delay(400).fadeIn(500);
    $(".feature5 .img-feature").delay(1000).addClass("slideRight");

    $("#multidevice").addClass("multidevice-active feature-active");
    $("#multidevice").removeClass("multidevice feature");

    $("#efficient").removeClass("efficient-active feature-active");
    $("#intuitive").removeClass("intuitive-active feature-active");
    $("#transparent").removeClass("transparent-active feature-active");
    $("#flexible").removeClass("flexible-active feature-active");
    $("#intelligent").removeClass("intelligent-active feature-active");

    $("#intuitive").addClass("intuitive feature");
    $("#transparent").addClass("transparent feature");
    $("#flexible").addClass("flexible feature");
    $("#efficient").addClass("efficient feature");
    $("#intelligent").addClass("intelligent feature");
  });

  $(".intelligent").click(function() {
    $(".cont-features").fadeOut(500);
    $(".feature6").delay(400).fadeIn(500);
    $(".feature6 .img-feature").delay(1000).addClass("slideRight");

    $("#intelligent").addClass("intelligent-active feature-active");
    $("#intelligent").removeClass("intelligent feature");

    $("#efficient").removeClass("efficient-active feature-active");
    $("#intuitive").removeClass("intuitive-active feature-active");
    $("#transparent").removeClass("transparent-active feature-active");
    $("#flexible").removeClass("flexible-active feature-active");
    $("#multidevice").removeClass("multidevice-active feature-active");
    
    $("#intuitive").addClass("intuitive feature");
    $("#transparent").addClass("transparent feature");
    $("#flexible").addClass("flexible feature");
    $("#multidevice").addClass("multidevice feature");
    $("#efficient").addClass("efficient feature");
  });
 
if (window.matchMedia("(min-width: 992px)").matches) {
  $(".laptop").addClass("slideRight");
  $("#intro")
    .delay(1000)
    .fadeIn("5000");
} else if (window.matchMedia("(min-width: 1px)").matches) {
  $("#intro").fadeIn(1500);
  setTimeout(function(){ 
    $(".laptop").addClass("slideRight");
  }, 1000);   
}

    $(".more").click(function() {
      $(".notes-container").toggleClass("displayed");
      $(".more img").toggleClass("rotate");
      $(".more p").toggleClass("hidden");
    });
  
    $('select').on('change', function() {
      if ($(this).val()) {
    return $(this).css('color', '#333');
      } else {
    return $(this).css('color', '#AAAAAA');
      }
    });
  
});

// TYPEWRITTER
// $(document).scroll(function() {
//   var y = $(this).scrollTop();

 
  
// });
 
//       var i = 0;
//       var txt = "One-stop Digital Platform"; /* The text */
//       var speed = 50; /* The speed/duration of the effect in milliseconds */

//       function typeWriter() {
//         if (i < txt.length) {
//           document.getElementById("efficient").innerHTML += txt.charAt(i);
//           i++;
//           setTimeout(typeWriter, speed);
//         }
//       };

// Vivus, SVG animation


if (window.matchMedia("(min-width: 992px)").matches) {
      $(document).scroll(function() {
        
        var y = $(this).scrollTop();
        
        if (y > 400) {
          // $(".text-feature h3").css("display", "block");
          // typeWriter();
          $(".img-feature1").addClass("slideRight");
        }

        if (y > 1100) {
          $("#car").addClass("slideLeft");
          $(".count").addClass("slideUp")
        }

        if (y > 1150) {
         
          $(".count2").addClass("slideUp")
          
        }

        if (y > 1200) {
         
          $(".count3").addClass("slideUp")
          
        }

        if (y > 1700) {
          $(".cap-item").addClass("slideUp");
        }


        if (y > 3000) {
          llamada.play();
          $(".tb-1").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-1 .block-content").addClass("show");
          $(".timeline-line").css("height", "0px");
        }

        if (y > 3250) {
          identification.play();
          $(".tb-2").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-2 .block-content").addClass("show");
          $(".timeline-line").css("height", "250px");
        }

        if (y > 3500) {
          camera.play();
          $(".tb-3").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-3 .block-content").addClass("show");
          $(".timeline-line").css("height", "500px");
        }

        if (y > 3750) {
          repair.play();
          $(".tb-4").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-4 .block-content").addClass("show");
          $(".timeline-line").css("height", "750px");
        }

        if (y > 4000) {
          communications.play();
          $(".tb-5").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-5 .block-content").addClass("show");
          $(".timeline-line").css("height", "1000px");
        }

        if (y > 4700) {
          $(".sync-img").addClass("slideLeft");
        }

        if (y > 5200) {
          $(".go-img").addClass("slideRight");
        }

        if (y > 5700) {
          $(".connect-img").addClass("slideLeft");
        }

        if (y > 6200) {
          $(".tablet-img").addClass("slideRight");
        }
      });

    } else if (window.matchMedia("(min-width: 767px)").matches) {
      
      $(document).scroll(function() {
        
        var y = $(this).scrollTop();
        
        if (y > 500) {
          // $(".text-feature h3").css("display", "block");
          // typeWriter();
          $(".img-feature1").addClass("slideRight");
        }

        if (y > 1300) {
          $(".img-feature2").addClass("slideLeft");
        }

        if (y > 2100) {
          $(".img-feature3").addClass("slideRight");
        }

        if (y > 2900) {
          $(".img-feature4").addClass("slideLeft");
        }

        if (y > 3700) {
          $(".img-feature5").addClass("slideRight");
        }

        if (y > 4500) {
          $(".img-feature6").addClass("slideLeft");
        }

        if (y > 5600) {
          $(".count").addClass("slideUp")
        }

        if (y > 5800) {
          $(".count2").addClass("slideUp")
        }

        if (y > 6200) {
          $(".count3").addClass("slideUp")
        }

        if (y > 6700) {
          $(".cap-item").addClass("slideUp");
        }

        if (y > 8500) {
          llamada.play();
          $(".tb-1").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-1 .block-content").addClass("show");
          $(".timeline-line").css("height", "0px");
        }

        if (y > 8750) {
          identification.play();
          $(".tb-2").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-2 .block-content").addClass("show");
          $(".timeline-line").css("height", "250px");
        }

        if (y > 9000) {
          camera.play();
          $(".tb-3").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-3 .block-content").addClass("show");
          $(".timeline-line").css("height", "500px");
        }

        if (y > 9250) {
          repair.play();
          $(".tb-4").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-4 .block-content").addClass("show");
          $(".timeline-line").css("height", "750px");
        }

        if (y > 9500) {
          communications.play();
          $(".tb-5").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-5 .block-content").addClass("show");
          $(".timeline-line").css("height", "1000px");
        }

        if (y > 10300) {
          $(".sync-img").addClass("slideLeft");
        }

        if (y > 10600) {
          $(".go-img").addClass("slideRight");
        }

        if (y > 10900) {
          $(".connect-img").addClass("slideLeft");
        }

        if (y > 11200) {
          $(".tablet-img").addClass("slideRight");
        }
      });
    } else if (window.matchMedia("(min-width: 1px)").matches) {
      $(document).scroll(function() {
        
        var y = $(this).scrollTop();
        
        if (y > 500) {
          // $(".text-feature h3").css("display", "block");
          // typeWriter();
          $(".img-feature1").addClass("slideRight");
        }

        if (y > 1300) {
          $(".img-feature2").addClass("slideLeft");
        }

        if (y > 2100) {
          $(".img-feature3").addClass("slideRight");
        }

        if (y > 2900) {
          $(".img-feature4").addClass("slideLeft");
        }

        if (y > 3700) {
          $(".img-feature5").addClass("slideRight");
        }

        if (y > 4500) {
          $(".img-feature6").addClass("slideLeft");
        }

        if (y > 5600) {
          $(".count").addClass("slideUp")
        }

        if (y > 5800) {
          $(".count2").addClass("slideUp")
        }

        if (y > 6200) {
          $(".count3").addClass("slideUp")
        }

        if (y > 6700) {
          $(".cap-item").addClass("slideUp");
        }

        if (y > 10000) {
          llamada.play();
          $(".tb-1").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-1 .block-content").addClass("show");
          $(".timeline-line").css("height", "0px");
        }

        if (y > 10250) {
          identification.play();
          $(".tb-2").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-2 .block-content").addClass("show");
          $(".timeline-line").css("height", "250px");
        }

        if (y > 10500) {
          camera.play();
          $(".tb-3").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-3 .block-content").addClass("show");
          $(".timeline-line").css("height", "500px");
        }

        if (y > 10750) {
          repair.play();
          $(".tb-4").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-4 .block-content").addClass("show");
          $(".timeline-line").css("height", "750px");
        }

        if (y > 11000) {
          communications.play();
          $(".tb-5").css(
            "background",
            "url(img/bullet-orange.png) no-repeat 50%/100%"
          );
          $(".tblock-5 .block-content").addClass("show");
          $(".timeline-line").css("height", "1000px");
        }

        if (y > 11600) {
          $(".sync-img").addClass("slideLeft");
        }

        if (y > 12100) {
          $(".go-img").addClass("slideRight");
        }

        if (y > 12600) {
          $(".connect-img").addClass("slideLeft");
        }

        if (y > 13100) {
          $(".tablet-img").addClass("slideRight");
        }
      });
     }
       
