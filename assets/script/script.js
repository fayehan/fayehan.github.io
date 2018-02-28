
$(document).ready(function() {

$('#grid').hide().fadeIn(800, function() {});
$('#intro').hide().fadeIn(800, function() {});
$('#socialmedias').hide().fadeIn(800, function() {});



$("#name").hover(
   function(){
      // hover code
      $(this).html("<span style = 'color:black;'>Gefei <i>(Ge·<span style = 'color:#00B23B;'>Faye</span>)</i></span>");
   }, function(){
      // unhover code 
      $(this).html("Faye");
   }
);


$(".grid-item").hover(
   function(){
      // hover code
      $(this).children().first().css("opacity","1");
   }, function(){
      // unhover code 
      $(this).children().first().css("opacity","0");
   }
);

  

});

