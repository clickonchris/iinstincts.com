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
				$('body').animate({scrollTop: $('#error').offset().top -50}, 600);
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
	
	var menuExpanded = false;
	
	$('button.menu').on('touchstart', function(e) {
		if (!menuExpanded) {
			$('#nav a').css('display','block');
			$('#nav').css('height', 'auto');
			menuExpanded = true;
		} else {
			$('#nav a').css('display', 'none');
			$('#nav').removeAttr('style');
			menuExpanded = false;
		}

	});
	
});
