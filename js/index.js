$(document).ready(function(){


  // BOTÓN DESPLAZAR HACIA ABAJO (PORTADA)
  $(document).ready(function(){


    // BOTÓN DESPLAZAR HACIA ABAJO (PORTADA)
    $(".circle_fill_blue").on("click", function(){

      var top_novedades = $('.portada').offset().top - 60; // -60px para ver el titulo de la seccion novedades
  
      $("html, body").animate({ scrollTop: $(window).height() }, 850, 'swing');
  
    });
  
  
  });
  


});
