(function(){

  var $slideshow = $(".slideshow");
  var $wraper = $("#wrap_slideshow");
  var wraperWidth = $wraper.children().length * 100;
  var mov = "";
  var desplazamiento = 0;
  var imgActiva = 0;          // Número que identifica el número de la imagen correspondiente en el array
  var elemActivo = null;
  var originalWidth = null;
  var originalHeight = null;
  var desiredWwidth = null;
  var desiredHeight = null;
  var nuevaAltura = null;     // La altura de la imagen una vez ha sido adaptada al ancho del contenedor
  var nuevaAnchura = null;    // La anchura de la imagen una vez ha sido adaptada al ancho del contenedor

  escalarImagen(imgActiva);

  //    Ancho container slideshow
  $wraper.css("width", wraperWidth + "vw");

  //    On Click Arrow Left/Right
  $(".btn_slideshow").on("click", function(){
    //    Reset interval
    clearInterval(interval);
    interval = setInterval(function(){ cambiarImagen("sig"); }, 3500);
    //    <--  ||  -->
    mov = $(this).data("mov");
    cambiarImagen(mov);
  });

  //    Cambiar deimagen
  function cambiarImagen(mov){

    if( mov === "sig" ){
      desplazamiento -= 100;
      imgActiva += 1;
    }else if( mov === "ant" ){
      desplazamiento += 100;
      imgActiva -= 1;
    }

    //    Excepciónes - Última y Primera imágen
    if( desplazamiento > 0 ){
      desplazamiento = (( wraperWidth - 100 ) * -1);                            // (( wraperWidth - 100 ) * -1) --> Última imagen
    }else if( desplazamiento < (( wraperWidth - 100 ) * -1 ) ){
      desplazamiento = 0;
    }

    //    El mismo proceso pero coon el número de 'imgActiva'
    if( imgActiva > (( wraperWidth - 100 ) / 100 )){                            // (( wraperWidth - 100 ) / 100 ) --> Última imagen
      imgActiva = 0;
    }else if( imgActiva < 0 ){
      imgActiva = (( wraperWidth - 100 ) / 100 );
    }

    escalarImagen(imgActiva);

    //    Animación opacidad
    $wraper.clearQueue();
    $wraper.animate({
      opacity : 0
    }, 400, function(){
      $(this).css("margin-left", desplazamiento + "vw");
    }).animate({
      opacity : 1
    }, 400);

  }

  //    Reproducir slideshow automáticamente, resize que se autoajuste, apañar listas css responsive
  //var interval = setInterval(function(){ cambiarImagen("sig"); }, 3500);

  //    Escalar imágen al contenedor
  function escalarImagen(imgActiva){

    elemActivo = $wraper.children().eq(imgActiva).children();
    originalWidth = elemActivo.width();
    originalHeight = elemActivo.height();

/*
----------------------------------------------------------------------------------------------------------------------------------
 ASÍ ES COMO SE AJUSTAN LOS TAMAÑOS DE LAS IMAGENES PROPORCIONALMENTE, PERO NO SE AJUSTAN DENTRO DEL CONTENEDOR ( CASO PRÁCTICO )
----------------------------------------------------------------------------------------------------------------------------------
    //    Comprobar si es necesario escalar la imagen a lo ancho
    if( $slideshow.width() < originalWidth ){
      desiredWidth = ( $slideshow.height() * originalWidth ) / originalHeight;
      elemActivo.css({
        width : desiredWidth + "px",
        marginLeft : (($slideshow.width() - desiredWidth) / 2) + "px",          //   Centrar la imagen escalada al contenedor
        marginRight : (($slideshow.width() - desiredWidth) / 2) + "px"
      });
      console.log("a1");
    }else{
      elemActivo.css({
        width : originalWidth + "px",
        marginLeft : (($slideshow.width() - originalWidth) / 2) + "px",         //   Centrar la imagen escalada al contenedor
        marginRight : (($slideshow.width() - originalWidth) / 2) + "px"
      });
      console.log("a2");
    }

    //    Comprobar si es necesario escalar la imagen a lo alto
    if( $slideshow.height() < originalHeight ){
      desiredHeight = ( $slideshow.width() * originalHeight ) / originalWidth;
      elemActivo.css({
        height : desiredHeight + "px",
        marginTop : (($slideshow.height() - desiredHeight) / 2) + "px",
        marginBottom : (($slideshow.height() - desiredHeight) / 2) + "px"
      });
      console.log("b1");
    }else{
      elemActivo.css({
        height : originalHeight + "px",
        marginTop : (($slideshow.height() - originalHeight) / 2) + "px",        //   Centrar la imagen escalada al contenedor
        marginBottom : (($slideshow.height() - originalHeight) / 2) + "px"
      });
      console.log("b2");
    }
*/
    //    Comprobar si es necesario escalar la imagen a lo ancho
    if( $slideshow.width() < originalWidth ){
      elemActivo.css({
        width : $slideshow.width() + "px"
      });
    }else{
      elemActivo.css({
        width : originalWidth + "px",
        marginLeft : (($slideshow.width() - originalWidth) / 2) + "px",         //   Centrar la imagen escalada al contenedor
        marginRight : (($slideshow.width() - originalWidth) / 2) + "px"
      });
    }

    nuevaAltura = $wraper.children().eq(imgActiva).children().height();         //   Se debe volver a realizar ya que en el proceso a variado el valor y éste no ha cambiado en su respectiva variable
    //    Comprobar si es necesario escalar la imagen a lo alto
    if( $slideshow.height() > nuevaAltura ){
      elemActivo.css({
        height : nuevaAltura + "px",
        marginTop : (($slideshow.height() - nuevaAltura) / 2) + "px",           //   Centrar la imagen escalada al contenedor
        marginBottom : (($slideshow.height() - nuevaAltura) / 2) + "px"
      });
    }else{
      elemActivo.css({
        width : "auto",
        height : $slideshow.height() + "px",
      });

      nuevaAnchura = $wraper.children().eq(imgActiva).children().width();       //   Se debe volver a realizar ya que en el proceso a variado el valor y éste no ha cambiado en su respectiva variable

      elemActivo.css({
        marginLeft : (($slideshow.width() - nuevaAnchura) / 2) + "px",          //   Centrar la imagen escalada al contenedor
        marginRight : (($slideshow.width() - nuevaAnchura) / 2) + "px"
      });
    }

  }

  $(window).resize(function(){

    // Autoajuste de las imagenes
    

  });

})();
