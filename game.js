function rainingDiamonds() {
    var shineBright = $(),
        qt = 20;
    for (var i = 0; i < qt; ++i) {
        var tiffanyDiamond = $('.diamond');
        $tiffanyDiamond.css({
            'top': (Math.random() * ('#store').width()) + 'px',
            'left': (-Math.random() * ('#store').width()) + 'px'

        });
          var shineBright = $shineBright.add($tiffanyDiamond);
    }
    $('#store').prepend($tiffanyDiamond);
}






/*
This was to check if it was moving.

function movingDiamond(){
var $diamond = $('#diamond');
var distance = 1200;
setInterval(function(){
  $diamond.css('bottom', distance + 'px');
  if(distance < -300){
    distance = 1200;
  } else {
    distance -= 5;
  }
}, 10);
};

$(document).ready(function(){
movingDiamond();
})
*/
