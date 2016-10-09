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
});
