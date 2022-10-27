$(document).ready(function(){  	
	$('.btnMenu').on('click', function(e){
		e.preventDefault();
		$('#gnbMo').fadeIn();
	})
	
	$('#gnbMo').on('click', function(e){
		e.preventDefault();
		$(this).fadeOut();
	})
});

















