jQuery.fn.exists = function(callback) {
  var args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

/*----------------------------------------------------
/* Scroll to top
/*--------------------------------------------------*/
jQuery(document).ready(function($) {
	//move-to-top arrow
	jQuery("body").prepend("<div id='move-to-top' class='animate '><i class='fa fa-chevron-up'></i></div>");
	var scrollDes = 'html,body';  
	/*Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing*/
	if(navigator.userAgent.match(/opera/i)){
		scrollDes = 'html';
	}
	//show ,hide
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 160) {
			jQuery('#move-to-top').addClass('filling').removeClass('hiding');
		} else {
			jQuery('#move-to-top').removeClass('filling').addClass('hiding');
		}
	});
	// scroll to top when click 
	jQuery('#move-to-top').click(function () {
		jQuery(scrollDes).animate({ 
			scrollTop: 0
		},{
			duration :500
		});
	});
});

/*----------------------------------------------------
/* Remove active state for nav links which uses #
/*--------------------------------------------------*/
jQuery(document).ready(function($){
    jQuery('.primary-navigation .menu-item').each(function() {
        var $this = jQuery(this);
        if ($this.find('a').first().attr('href').indexOf("#") != -1) {
            $this.removeClass('current-menu-item');
        }
    });
});

/*----------------------------------------------------
/* Responsive Navigation
/*--------------------------------------------------*/
jQuery(document).ready(function($){
    var menu_wrapper = jQuery('.primary-navigation')
    .clone().attr('class', 'mobile-menu')
    .wrap('<div id="mobile-menu-wrapper" />').parent().hide()
    .appendTo('body');

    jQuery('.toggle-mobile-menu').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (jQuery('body').hasClass('mobile-menu-active')) {
        	//setTimeout(function() { jQuery('#mobile-menu-wrapper').hide(); }, 500);
        	jQuery('body').removeClass('mobile-menu-active');
        } else {
			jQuery('#mobile-menu-wrapper').show();
        	jQuery('body').addClass('mobile-menu-active');
        }
        
    });
    
    // prevent propagation of scroll event to parent
    $(document).on('DOMMouseScroll mousewheel', '#mobile-menu-wrapper', function(ev) {
        var $this = $(this),
            scrollTop = this.scrollTop,
            scrollHeight = this.scrollHeight,
            height = $this.height(),
            delta = (ev.type == 'DOMMouseScroll' ?
                ev.originalEvent.detail * -40 :
                ev.originalEvent.wheelDelta),
            up = delta > 0;
    
        var prevent = function() {
            ev.stopPropagation();
            ev.preventDefault();
            ev.returnValue = false;
            return false;
        };
    
        if (!up && -delta > scrollHeight - height - scrollTop) {
            // Scrolling down, but this will take us past the bottom.
            $this.scrollTop(scrollHeight);
            return prevent();
        } else if (up && delta > scrollTop) {
            // Scrolling up, but this will take us past the top.
            $this.scrollTop(0);
            return prevent();
        }
    });
}).click(function() {
    if (jQuery('body').hasClass('mobile-menu-active')) {
    	setTimeout(function() { jQuery('#mobile-menu-wrapper').hide(); }, 500);
    	jQuery('body').removeClass('mobile-menu-active');
    }
});

/*----------------------------------------------------
/*  Dropdown menu
/* ------------------------------------------------- */
jQuery(document).ready(function($) {
	$('#navigation ul.sub-menu, #navigation ul.children').hide(); // hides the submenus in mobile menu too
	$('#navigation li').hover(
		function() {
			$(this).children('ul.sub-menu, ul.children').slideDown('fast');
		},
		function() {
			$(this).children('ul.sub-menu, ul.children').hide();
		}
	);
});

/*----------------------------------------------------
/* Social button scripts
/*---------------------------------------------------*/
jQuery(document).ready(function($){
	(function(d, s) {
      var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.src = url; js.id = id;
		fjs.parentNode.insertBefore(js, fjs);
	  };
	jQuery('span.facebookbtn, .facebook_like').exists(function() {
	  load('//connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
	});
	jQuery('span.gplusbtn').exists(function() {
	  load('https://apis.google.com/js/plusone.js', 'gplus1js');
	});
	jQuery('span.twitterbtn').exists(function() {
	  load('//platform.twitter.com/widgets.js', 'tweetjs');
	});
	jQuery('span.linkedinbtn').exists(function() {
	  load('//platform.linkedin.com/in.js', 'linkedinjs');
	});
	jQuery('span.pinbtn').exists(function() {
	  load('//assets.pinterest.com/js/pinit.js', 'pinterestjs');
	});
	jQuery('span.stumblebtn').exists(function() {
	  load('//platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
	});
	}(document, 'script'));
});

jQuery(window).load(function() { 
	setTimeout( function() { jQuery(window).scrollTop(jQuery(window).scrollTop()+1);
}, 500 ); });