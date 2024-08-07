$(function(){
	$("body").on("keyup", ".paging ul li", function(e){
		if(e.keyCode === 13){
			e.preventDefault();
			var _page = parseInt($(this).attr("data-page"));
			pagingEvent(_page)
		}
	});
});
function pagingEvent(n){
	//audioPlay('audio04');

	var _paging = ".paging ul li";
	$(_paging).find(".current").attr("aria-hidden", "true");
	$(_paging).find(".move").attr("aria-hidden", "false");
	$(_paging).eq(n).find(".current").attr("aria-hidden", "false");
	$(_paging).eq(n).find(".move").attr("aria-hidden", "true");


	var pageListItem = ".paging li";



	currentPage = n;
	$(pageListItem).removeClass("on").eq(currentPage).addClass("on");

	$(".question").removeClass("on").eq(currentPage).addClass("on");
	pageStatus();
}