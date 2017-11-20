$(document).ready(function() {







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