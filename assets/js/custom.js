(function( $ ){

	jQuery(window).bind('scroll', function () {
    		if ($(window).scrollTop() > 150) {

		        $('#header').addClass('fixed-nav');
		        
			    } else {
			    $('#header').removeClass('fixed-nav');
			}
		});

		
		var lastId,
		topMenu = $(".menu"),
		topMenuHeight = topMenu.outerHeight()+13,
		menuItems = topMenu.find('a[href^=\\#]'),
		scrollItems = menuItems.map(function(){
		  var item = $($(this).attr("href"));
		  if (item.length) { return item; }
		});

		menuItems.click(function(e){
		  var href = $(this).attr("href"),
		      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+22;
		  jQuery('html, body').stop().animate({ 
		      scrollTop: offsetTop
		  }, 1500);
		  e.preventDefault();
		});

		jQuery(window).scroll(function(){
		   var fromTop = $(this).scrollTop()+topMenuHeight;
		   
		   var cur = scrollItems.map(function(){
		     if ($(this).offset().top < fromTop)
		       return this;
		   });
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   
		   if (lastId !== id) {
		       lastId = id;
		       menuItems
		         .parent().removeClass("active")
		         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
		   }           
		})


	    $('#google-map').click(function () {

		    $('#google-map iframe').css("pointer-events", "auto");

		});
		
		$("#google-map").mouseleave(function() {

		  $('#google-map iframe').css("pointer-events", "none"); 

		});

		jQuery('.menu').on('click', 'li a', function() {
		  $('.navbar .in').collapse('hide');
		});
	
})( jQuery );


  
	