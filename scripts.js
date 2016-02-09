$(document).ready(function(){
  // var height = parseInt(prompt("How tall are you?"));

  $('.userinput form').submit(function(event){
    var height = parseInt($("input#height").val());
    event.preventDefault();

    if(height === 1){
      $('#rides').show();
      $('.merrygoround').show();
      $('.rollercoaster').hide();
      $('.ferriswheel').show();
      $('.bumpercars').hide();
      $('.freefall').hide();
      $('.tallspinthing').hide();
      $('.height').hide();
      $('.goback').show();
    }else if(height === 2){
      $('#rides').show();
      $('.merrygoround').show();
      $('.rollercoaster').show();
      $('.ferriswheel').show();
      $('.bumpercars').hide();
      $('.freefall').hide();
      $('.tallspinthing').hide();
      $('.height').hide();
      $('.goback').show();
    }else if(height === 3){
      $('#rides').show();
      $('.merrygoround').show();
      $('.rollercoaster').show();
      $('.ferriswheel').show();
      $('.bumpercars').hide();
      $('.freefall').hide();
      $('.tallspinthing').hide();
      $('.height').hide();
      $('.goback').show();
    }else if(height === 4){
      $('#rides').show();
      $('.merrygoround').show();
      $('.rollercoaster').show();
      $('.ferriswheel').show();
      $('.bumpercars').hide();
      $('.freefall').hide();
      $('.tallspinthing').hide();
      $('.height').hide();
      $('.goback').show();
    }else if(height === 5 ){
      $('#rides').show();
      $('.merrygoround').hide();
      $('.rollercoaster').show();
      $('.ferriswheel').show();
      $('.bumpercars').show();
      $('.freefall').show();
      $('.tallspinthing').show();
    }else if(height === 6 ){
      $('#rides').show();
      $('.merrygoround').hide();
      $('.rollercoaster').show();
      $('.ferriswheel').show();
      $('.bumpercars').show();
      $('.freefall').show();
      $('.tallspinthing').show();
      $('.height').hide();
      $('.goback').show();
    }else if(height === 7 ){
      $('#rides').show();
      $('.merrygoround').hide();
      $('.rollercoaster').show();
      $('.ferriswheel').show();
      $('.bumpercars').hide();
      $('.freefall').show();
      $('.tallspinthing').show();
      $('.height').hide();
      $('.goback').show();
    }

    $('input.rideme').click(function(){
      $('#rides').hide();
      $('.height').hide();
      $('.goback').show();
      $('.sorry').show();
    })
  });
});
