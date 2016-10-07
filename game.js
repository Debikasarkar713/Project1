$(document).ready(function(){


});



  /*var $Diamonds = $('.diamond');
  var contain = $('.everything');

setInterval(function() {
   for(var i = 1; i < 4; i++) {
      $Diamonds.add(CreateDiamonds());
      MoveDiamonds();
   }
}, 2000);

function CreateDiamonds(){
   var $D =  $('</div>').addClass('.diamond');
    .css(
      top:Math.floor(Math.random()*450 ),


    1000)

   .appendTo(contain);



}

function MoveDiamonds() {
   $Diamonds.each(function() {
      var x = Math.floor(Math.random() * 990);
      var y = Math.floor(Math.random() * 560);

      $('div').animate({"left": x + "px"}, "slow");
      $('div').animate({"top": y + "px"}, "slow");
   })
}


//         var $shineBright = $(), qt = 20;

//         for (var i = 0; i < qt; ++i) {
//             var $diamond = $('<div id="diamond"></div>');
//             $diamond.css({
//                 'left': (Math.random() * $('#site').width()) + 'px',
//                 'top': (- Math.random() * $('#site').height()) + 'px'
//             });
//
//             $shineBright = $shineBright.add($diamond);
//         }
//         $('#store').prepend($shineBright);

//         $shineBright.animate({
//             top: "500px",
//             opacity : "0",
//         }, Math.random() + 5000, function(){
//             $(this).remove();
//             if (--qt < 1) {
//                 rainingDiamonds();
//             }
//         });
  //   }
//     rainingDiamonds();
});










