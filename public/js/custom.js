//preloading for page
$(window).on('load', function() { // se asegura de que todo el sitio este cargado
	var status = $('#status');
	var preloader = $('#preloader');
	var body = $('body');
	status.fadeOut(); // primero se desvanecera la animacion de carga
	preloader.delay(0).fadeOut('fast'); //se desvanecera poner el DIV blanco que cubre el sitio web. 
	body.delay(0).css({'overflow':'visible'});
	var vidDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<vidDefer.length; i++) {
		if(vidDefer[i].getAttribute('data-src')) {
			vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
		} 
	}
})
$(function(){
	'use strict';
	// js para menú desplegable
	var windowWidth = $(window).width();
	if(windowWidth > 1024){
		var dropdown = $( '.dropdown');
		dropdown.hover(
	        function(){
	            $(this).children('.dropdown-menu').fadeIn(300);
	        },
	        function(){
	            $(this).children('.dropdown-menu').fadeOut(300);
	        }
	    );	   
	}else{
		var dropdownClick = $('.navbar a.dropdown-toggle');
		dropdownClick.on('click', function(e) {
			var $el = $(this);
			var $parent = $(this).offsetParent(".dropdown-menu");
			var $open = $('.nav li.open');
			$(this).parent("li").toggleClass('open');

			if(!$parent.parent().hasClass('nav')) {
				$el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
			}
			$open.not($(this).parents("li")).removeClass("open");
			return false;
		});
	}
	//js para nav icon 
	var clickMenubtn = $('#nav-icon1');
	clickMenubtn.on('click', function(){
		$(this).toggleClass('open');
	});
	//js para pestañas
	var tabsClick = $('.tabs .tab-links a, .tab-links-2 a, .tab-links-3 a');
	var multiItem = $('.slick-multiItem');
	var multiItem2 = $('.slick-multiItem2');
	tabsClick.on('click', function(e)  {
		var currentAttrValue = $(this).attr('href');
		var tabsCurrent = $('.tabs ' + currentAttrValue);
		// mostrar / ocultar pestañas
		tabsCurrent.show().siblings().hide();
		// cambiar / quitar pestaña actual a activa
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
		//restablecer la posición de las pestañas
		multiItem.slick('setPosition');
		multiItem2.slick('setPosition');
	});
	// js para la cuenta regresiva del tiempo
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'dias': days,
	    'horas': hours,
	    'minutos': minutes,
	    'segundos': seconds
	  };
	}
	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  if( clock != null){
		var daysSpan = clock.querySelector('.dias');
		var hoursSpan = clock.querySelector('.horas');
		var minutesSpan = clock.querySelector('.minutos');
		var secondsSpan = clock.querySelector('.segundos');
		var updateClock = function() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	  }
	}
	var deadline = new Date(Date.parse(new Date()) + 25 * 24 * 60 * 60 * 1000);
	initializeClock('clockdiv', deadline);

	//js para twitter
	var tweets = jQuery(".tweet");
	jQuery(tweets).each( function( t, tweet ) { 
    var id = jQuery(this).attr('id');
    twttr.widgets.createTweet(
      id, tweet, 
      {
        conversation : 'none',    // or all
        cards        : 'hidden',  // or visible 
        linkColor    : 'default', // default is blue
        theme        : 'light'    // or dark
      });
    }); 

	//control deslizante para películas y programas de tv en home 2
	multiItem2.slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		arrows: false,
		// autoplay: true ,
		// autoplaySpeed: 2000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	//control deslizante para películas y programas de tv en home 1, 3
	multiItem.slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		draggable:true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	//controls deslizante principal home 1
	var multiItemSlider = $('.slick-multiItemSlider');
	multiItemSlider.slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		draggable:true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
	//control deslizante para home v3 y home v2, control deslizante de twitter home 1, 2
	var singleItem = $('.slider-single-item');
	singleItem.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		// autoplaySpeed: 2000,
		dots: true,
		draggable:true,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	      }
	    }
	  ]
	});
	//control deslizante para tweeter
	var slickTw = $('.slick-tw');
	slickTw.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
		// autoplaySpeed: 2000,
		dots: true,
		draggable:true,
		arrows: false,
		responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,

	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	      }
	    }
	  ]
	});
	//para home v3
	var slidefor = $('.slider-for');
	var slidenav = $('.slider-nav');
	slidefor.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav',
	});
	slidenav.slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  // centerMode: true,
	  focusOnSelect: true,

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: true
	      }
	    }
	  ]
	});
	//para trailer v1 y 2
	var slidefor2 = $('.slider-for-2');
	var slidenav2 = $('.slider-nav-2');
	slidefor2.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav-2',
	});
	slidenav2.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for-2',
		dots: false,
		arrows: true,
		// centerMode: true,
		focusOnSelect: true,
		vertical: true,
		// autoplay: true,
		// autoplaySpeed: 2000
	});
	//== js para caja de luz de video
	var fancyboxmedia = $('.fancybox-media');
	fancyboxmedia.fancybox({
		openEffect  : 'float',
		closeEffect : 'none',
		helpers : {
			media : {},
			overlay: {
		        locked: false
		    }
		}
	});	
	//==js para mostrar el botón anterior / siguiente en la caja de luz del video
	fancyboxmedia
	    .attr('rel', 'playlist')
	    .fancybox({
	    openEffect: 'none',
	    closeEffect: 'none',
	    prevEffect: 'none',
	    nextEffect: 'none',
	    helpers: {
	        media: {}
	    },
	    youtube: {
	        autoplay: 1,
	        hd: 1,
	        wmode: 'opaque', // espectaculos X para cerrar
	        vq: 'hd720' // defecto 720p hd calidad
	    }
	});
	//== js para caja de luz de imagen
	var imglightbox = $(".img-lightbox");
	imglightbox.fancybox({
		helpers: {
			title : {
				type : 'float'
			},
			overlay: {
				locked: false
			}
		}
	});
	//== js para visible siguiente / anterior fancybox
	imglightbox.fancybox({
        // bucle: false, // la galeria puede no ser cíclica 
        afterShow: function () {
            // inicializar algunas variables
            var gallerySize = this.group.length,
                next, prev;
            if (this.index == gallerySize - 1) {
                // este es el último elemento de la galeria as que el siguiente es el primero
                next = imglightbox.eq(0).attr("title"),
                prev = imglightbox.eq(this.index - 1).attr("title");
            } else if (this.index == 0) {
                // esta es la primera imagen de la galeria asi que la anterior es la ultima
                next = imglightbox.eq(this.index + 1).attr("title"),
                prev = imglightbox.eq(gallerySize - 1).attr("title");
            } else {
                // de lo contrario simplemente agregue o reste al indice
                next = imglightbox.eq(this.index + 1).attr("title"),
                prev = imglightbox.eq(this.index - 1).attr("title");
            }
            // establecer atributos de título en img-lightbox selectores siguiente / anterior
            var lightboxnext = $(".img-lightbox-next");
            var lightboxprev = $(".img-lightbox-prev");
            lightboxnext.attr("title", next);
            lightboxprev.attr("title", prev);
        }
    });
	//==js para iniciar sesion y registrarse
	var loginLink = $(".loginLink");
	var signupLink = $(".signupLink");
	var loginct = $( "#login-content" );
	var signupct= $("#signup-content");
	var loginWrap = $(".login-wrapper");
	var overlay = $(".overlay");
	loginWrap.each( function(){
		$(this).wrap('<div class="overlay"></div>')
	});
	//ventana emergente para el formulario de inicio de sesion
    loginLink.on('click', function(event){
    	event.preventDefault();
    	loginct.parents(overlay).addClass("openform");
		$(document).on('click', function(e){
		var target = $(e.target);
		if ($(target).hasClass("overlay")){
				$(target).find(loginct).each( function(){
					$(this).removeClass("openform");
				});
				setTimeout( function(){
					$(target).removeClass("openform");
				}, 350);
			}	
		});
    });
    //ventana emergente para el formulario de registro
    signupLink.on('click', function(event){
    	event.preventDefault();
    	signupct.parents(overlay).addClass("openform");
		$(document).on('click', function(e){
		var target = $(e.target);
		if ($(target).hasClass("overlay")){
				$(target).find(signupct).each( function(){
					$(this).removeClass("openform");
				});
				setTimeout( function(){
					$(target).removeClass("openform");
				}, 350);
			}	
		});
    });
    // cerrar ventana emergente para movil
    var closebt = $(".close");
   	closebt.on('click', function(e){
		e.preventDefault();
		var overlay = $(".overlay");
		overlay.removeClass("openform");
	});	
    //js para multiples seleccionados
    var multiselect = $(".ui.fluid.dropdown");
    multiselect.dropdown({
		allowLabels:true
	})
	multiselect.dropdown({'set selected': 'Role1,Role2'});
	//== función de desplazamiento para una sola pagina
	$(window).scroll(function(event) {
		/* actuar en el evento */
		var scrollPos = $(window).scrollTop(),
		header = $('header');
		//sticky para menu
		if(scrollPos > 300){
			header.addClass('sticky');
		}else{
			header.removeClass('sticky');
		}
	});		
	//volver arribajs
	var backtotop = $('#back-to-top');
    backtotop.on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

   // desplazarse hacia abajo en la pagina de destino
	var scrolldownlanding = $('#discover-now');
    scrolldownlanding.on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(document).height()-$(window).height()
        }, 700);
    });

	//sticky sidebar
	if(windowWidth > 1200){
		var stickySidebar = $('.sticky-sb');
		var mainCt = $('.main-content');
		if (stickySidebar.length > 0) {	
			var stickyHeight = stickySidebar.height(),
			sidebarTop = stickySidebar.offset().top;
		}
		// en desplazamiento mover la barra lateral
		$(window).scroll(function () {
		  if (stickySidebar.length > 0) {	
		    var scrollTop = $(window).scrollTop();
		            
		    if (sidebarTop < scrollTop) {
		      stickySidebar.css('top', scrollTop - sidebarTop+ 80);

		      // detener la barra lateral en el pie de la pagina para evitar superposición
		      var sidebarBottom = stickySidebar.offset().top + stickyHeight,
		        stickyStop = mainCt.offset().top + mainCt.height();
		      if (stickyStop < sidebarBottom) {
		        var stopPosition = mainCt.height() - stickyHeight + 130;
		        stickySidebar.css('top', stopPosition);
		      }
		    }
		    else {
		      stickySidebar.css('top', '0');
		    } 
		  }
		});
		$(window).resize(function () {
		  if (stickySidebar.length > 0) {	
		    stickyHeight = stickySidebar.height();
		  }
		});
	}
	// $(window).on('load',function() {

	// });

});
