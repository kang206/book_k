$(function () {
	function prev() {
		$('.inter_list>li:last').prependTo('.inter_list');
		$('.inter_list').css('margin-left', -560);
		$('.inter_list').stop().animate({
			marginLeft: 0
		}, 1000);

	}



	function next() {
		$('.inter_list').stop().animate({
			marginLeft: -560
		}, function () {
			$('.inter_list>li:first').appendTo('.inter_list');
			$('.inter_list').css({
				marginLeft: 0
			});
		});
	}



	function slide() {
		$('.inter_list').stop().animate({
			marginLeft: -560
		}, function () {
			$('.inter_list li:first').appendTo('.inter_list');
			$('.inter_list').css({
				marginLeft: 0
			});
		});
	}


	setInterval(slide, 3000);



	$('#inprev').click(function () {
		prev();
	});

	$('#innext').click(function () {
		next();
	});

})