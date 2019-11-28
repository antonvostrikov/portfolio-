$(document).ready(function(){
	
	$(".list-menu_header > li > a[href*='#'], .list_my-menu > li > a[href*='#']").on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault();
			return false;
	});
	
	$("#my-menu").mmenu({
		"extensions": [
			"fx-menu-slide",
			"pagedim-black",
			"theme-dark"
	 	], 
	 	navbar: {
    	title: "<span class='title-mmenu'>Меню</span>"
  	}
	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
});	
