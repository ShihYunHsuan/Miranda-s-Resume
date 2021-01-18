$(document).ready(function(){

	// header color change
	window.addEventListener('scroll',function(){
		const header = document.querySelector('.js-header');
		header.classList.toggle("sticky", window.scrollY > 80);
	})

	//smooth scrolling
	var scrollLink = $('.scroll');
	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1000);
	})

	//active link switching
	$(window).scroll(function(){
		var scrollbarLocation = $(this).scrollTop();
		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top - 30;

			if(sectionOffset <= scrollbarLocation){
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		})
	})

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}

	// fancybox plugin options
	$('[data-fancybox="group"]').fancybox({
		loop: true,
		buttons: [
		    //"download",
		    "thumbs",
		    "close"
  		]
	})

	// skill bar
	$('.skill__per-2').each(function(){
		var $this = $(this);
		var per = $this.attr('per');
		$this.css("width",per+"%");
		$({animatedValue: 0}).animate({animatedValue: per},{
			duration: 1000,
			offset: 1000,
			step: function(){
				$this.attr('per', Math.floor(this.animatedValue) + '%');
			},
			complete: function(){
				$this.attr('per', Math.floor(this.animatedValue) + '%');
			}
		})
	});


})

function toggleMenu(){
		const menu__toggle = document.querySelector('.menu__toggle');
		const menu = document.querySelector('.menu');
		menu__toggle.classList.toggle('active');
		menu.classList.toggle('active');
	}


// gsap
gsap.from('.navbar__logo',{opacity: 0, duration: 2, delay: 0.8, y:25, ease: 'expo.out'})
gsap.from('.menu__toggle',{opacity: 0, duration: 1, delay: 0.3, x:20, ease: 'expo.out'})
gsap.from('.menu__item',{opacity: 0, duration: 2, delay: 1.5, y:25, ease: 'expo.out', stagger: 0.2})
gsap.from('.gsap-btn',{opacity: 0, duration: 2, delay: 3.5, x:-25, ease: 'expo.out'})
gsap.from('.gsap-icon-btn',{opacity: 0, duration: 2, delay: 4, y:25, ease: 'expo.out', stagger: 0.2})
gsap.from('.gsap-detail',{opacity: 0, duration: 2, delay: 3.5, y:25, ease: 'expo.out', stagger: 0.2})


