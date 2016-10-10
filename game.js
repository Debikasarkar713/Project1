//DOM event loader
$(document).ready(function() {



   /* runThrough();

    function runThrough() {



      for (var i = 0; i < .length ; i++) {

      }

        }
*/



    fallingDiamond();



    function fallingDiamond() {

        var stop = setInterval(function() {
            $('.diamond').css({ 'top': '+=10px' });
            console.log($('#flex-container').innerHeight())
            if ($('.diamond').offset().top > $('#flex-container').innerHeight()) {
                clearInterval(stop);
            }
        }, 100);

    }
    $('.diamante').click(runCounter);
});
//defining counter when clicked
var counter = 0;
//function that runs when clicked diamond
function runCounter() {
  counter++;
  // debugger
}

//even listener for diamonds
