$(function () {
	$(".partca>li").mouseover(function () {
		var i = $(this).index();
		$(".partca>li").removeClass("on");
		$(".partca>li").eq(i).addClass("on");
		$(".pabooks>li").stop().hide();
		$(".pabooks>li").eq(i).stop().show();
	})
});