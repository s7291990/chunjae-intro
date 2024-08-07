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
	// if(n === 0){
	// 	$(pageListItem).removeClass("end");
	// }else if(n === 1){
	// 	$(pageListItem).removeClass("end");
	// 	$(pageListItem).eq(0).addClass("end");
	// }else if(n === 2){
	// 	$(pageListItem).removeClass("end");
	// 	$(pageListItem).eq(0).addClass("end");
	// 	$(pageListItem).eq(1).addClass("end");
	// }


	currentPage = n;
	$(pageListItem).removeClass("on").eq(currentPage).addClass("on");

	$(".question").removeClass("on").eq(currentPage).addClass("on");
	pageStatus();
}