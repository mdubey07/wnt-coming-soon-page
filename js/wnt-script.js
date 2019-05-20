

// Animate Delay
setTimeout(function(){ jQuery("#wnt-content").show().addClass('animated fadeIn'); }, 250);

// Reseize
function resize(){
	$('head').append("<style id='form-style' type='text/css'></style>");
	$('#form-style').html('.wnt .input-group-btn, .wnt .input-group{display:block;width:100%;}.wnt #wnt-subscribe-btn{margin-left:0;width:100%;display:block;}.wnt .input-group .form-control:first-child, .wnt .input-group-addon:first-child, .wnt .input-group-btn:first-child>.btn, .wnt .input-group-btn:first-child>.dropdown-toggle, .wnt .input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {border-bottom-right-radius: 4px;border-top-right-radius: 4px;}.wnt .input-group .form-control:last-child, .wnt .input-group-addon:last-child, .wnt .input-group-btn:last-child>.btn, .wnt .input-group-btn:last-child>.dropdown-toggle, .wnt .input-group-btn:first-child>.btn:not(:first-child) {border-bottom-left-radius: 4px;border-top-left-radius: 4px;}');
}

$('#wnt-content').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
	function(){
		var width = $('#wnt-field-wrapper').width();
		if(width < 480 && width != 0){
			resize();
		}
	}
);


$(function () {
    var body = $('html');
    var backgrounds = [
      'url(./img/bg/4.jpg)', 
      'url(./img/bg/5.jpg)',
      'url(./img/bg/1.jpg)',
      'url(./img/bg/2.jpg)',
      'url(./img/bg/3.jpg)'];
    var current = 0;

    function nextBackground() {
        body.css(
            'background',
        backgrounds[current = ++current % backgrounds.length]);

        setTimeout(nextBackground, 5000);
    }
    setTimeout(nextBackground, 5000);
    body.css('background', backgrounds[0]);
});