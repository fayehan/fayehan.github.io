
$(document).ready(function() {


// jQuery Function Number 1
$('#grid').hide().fadeIn(800, function() {});
// jQuery Function Number 2
$('#intro').hide().fadeIn(800, function() {});
$('#socialmedias').hide().fadeIn(800, function() {});


// jQuery Function Number 3
$("#name").hover(
   function(){
      // hover code
      // jQuery Function Number 4
      $(this).html("<span style = 'color:black;'>Gefei <i>(Ge·<span style = 'color:#00B23B;'>Faye</span>)</i></span>");
   }, function(){
      // unhover code 
      $(this).html("Faye");
   }
);


$(".grid-item").hover(
   function(){
      // hover code
      // jQuery Function Number 5
      $(this).children().first().css("opacity","1");
   }, function(){
      // unhover code 
      // jQuery Function Number 6
      $(this).children().first().css("opacity","0");
   }
);

  

});

