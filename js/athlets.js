$(document).ready(function(){


    if ($('#athlet_2').is(':checked')){
      $('.athlet__connection').css("display","none");
      $('.athlet__collaboration').css("display","block");
      $('.athlet__growth').css("display","none");
    }

    $('#athlet_1').click(function(){
      $('.athlet__connection').css("display","block");
      $('.athlet__collaboration').css("display","none");
      $('.athlet__growth').css("display","none");
    })

    $('#athlet_2').click(function(){
      $('.athlet__connection').css("display","none");
      $('.athlet__collaboration').css("display","block");
      $('.athlet__growth').css("display","none");
    })

    $('#athlet_3').click(function(){
      $('.athlet__connection').css("display","none");
      $('.athlet__collaboration').css("display","none");
      $('.athlet__growth').css("display","block");
    })
});

