//DOM event loader
$(document).ready(function() {


    fallingDiamond();

    function fallingDiamond() {

        var stop = setInterval(function() {
            $('.diamond').css({ 'top': '+=10px' });
            //
            console.log($('#flex-container').innerHeight())
            if ($('.diamond').offset().top > $('#flex-container').innerHeight()) {
                clearInterval(stop);
            }
        }, 100);

    }


    dJewels();

    function dJewels() {

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
    $('#score').html('Score: ' + counter);
    if (counter === 10) {
        // $('#endscore').html(counter);
        $('.dia').off('click', runCounter);

    }
    // connect both


}



// time count
var sec = 0;
//start timer at 0

$('#clock').html('Clock: ' + sec);
//by one second
var end = setInterval(function() {
    sec = sec + 1;
    // adding value by 1
    $('#clock').html('Clock: ' + sec);
    if (sec === 10) {
        //if value is equal to 10
        // $('#endgame').show('medium');
        //display value
        $('#endgame').html(sec);
        clearInterval(end);
        //stop timer
    }
}, 1000);

//event listener for diamonds
$('.diamond1').click();
