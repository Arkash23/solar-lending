$(document).ready(function(){
	$(".slide__inner").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
	})

	$(".green-info-nav-item.one").click(function(event) {
		$(".slide__inner").slick("goTo",0)
	})
	$(".green-info-nav-item.two").click(function(event) {
		$(".slide__inner").slick("goTo",1)
	})
	$(".green-info-nav-item.three").click(function(event) {
		$(".slide__inner").slick("goTo",2)
	})

	$(".clients__slider").slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
	})
})


