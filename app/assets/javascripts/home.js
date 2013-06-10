$(function() {
	
	$('#contact_form').on('submit', function(e) {
		e.preventDefault();
		
		$('.submit').attr('disabled','disabled');
		$('#error').hide();
		$('#success').hide();
		
		$.post('/home/contact', $('#contact_form').serialize(), function(data) {
			if (data != "OK") {
				$('#error').html(data).show();
				$('.submit').removeAttr('disabled');
			} else {
				$('#success').html("Your message was sent sucessfully").show();
				$('#contact_form').hide();
				$(document).scrollTop(0);
				setTimeout(function() {
					$('#success').fadeOut(1000);
				}, 5000);
				
			}
		});
	});
	
});
