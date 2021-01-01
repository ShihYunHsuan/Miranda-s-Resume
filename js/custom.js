$(document).ready(function(){

	// header color change
	window.addEventListener('scroll',function(){
		const header = document.querySelector('.js-header');
		header.classList.toggle("sticky", window.scrollY > 80);
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