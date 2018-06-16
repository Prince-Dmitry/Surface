$(document).ready(function(){

    if ($('#player_3').is(':checked')){
      $('.player__connection').css("display","none");
      $('.player__collaboration').css("display","none");
      $('.player__growth').css("display","block");
    }

    $('#player_1').click(function(){
      $('.player__connection').css("display","block");
      $('.player__collaboration').css("display","none");
      $('.player__growth').css("display","none");
    })

    $('#player_2').click(function(){
      $('.player__connection').css("display","none");
      $('.player__collaboration').css("display","block");
      $('.player__growth').css("display","none");
    })

    $('#player_3').click(function(){
      $('.player__connection').css("display","none");
      $('.player__collaboration').css("display","none");
      $('.player__growth').css("display","block");
  })
});

