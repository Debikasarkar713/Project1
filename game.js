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

    fallingD();



    function fallingD() {

        var stop = setInterval(function() {
            $('.diamond1').css({ 'top': '+=10px' });
            console.log($('.flex-items').innerHeight())
            if ($('.diamond1').offset().top > $('#flex-container').innerHeight()) {
                clearInterval(stop);
            }
        }, 100);

    }



    $('.dia').click(runCounter);
});
//defining counter when clicked
var counter = 0;
//function that runs when clicked diamond
function runCounter() {
    counter++;
    if ()

}


// time count
var sec = 0;
$('#clock span').html(sec);
//by one second
var end = setInterval(function() {
    sec = sec + 1;
    $('#clock span').html(sec);
    if (sec == 10) {
        $()
    }
}, 1000);

//event listener for diamonds
