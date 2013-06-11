$(function() {
	
	var menuExpanded = false;
	
	 // initiate page scroller plugin
      $('body').pageScroller({
        navigation: '#nav',
        keyboardControl: true,
        deepLink: true,
        animationBefore: function() {
        	if (menuExpanded) {
        		collapseMenu();
        	}
        }
      });
      
	
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

	$('.menu').on('touchstart', function(e) {
		$('.menu').addClass('active');
		if (!menuExpanded) {
			expandMenu();
		} else {
			collapseMenu();
		}

	});
	$('.menu').on('touchend', function(e) {
		$('.menu').removeClass('active');
	});
	
	var expandMenu = function() {
		$('#nav a').css('display','block');
		$('#nav').css('height', 'auto');
		menuExpanded = true;
	};
	
	var collapseMenu = function() {
		$('#nav a').css('display', 'none');
		$('#nav').removeAttr('style');
		menuExpanded = false;
	};
	
});
