jQuery(document).ready(function() {

	jQuery(".menu_trigger").click(function() {

		jQuery(".menu").slideToggle(600, function() {
			jQuery(this).toggleClass("nav_expanded").css('display', '');
		}); 
			
	})

});