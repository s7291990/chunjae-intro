function pagePrev(){

	audioPlay('audio04');
	var pageListItem = ".paging li";
	if(currentPage > 0){
		currentPage--;
		$(".pop-item-wrap ul").removeClass("on").eq(currentPage).addClass("on");
		$(pageListItem).removeClass("on").eq(currentPage).addClass("on");
		$(pageListItem).eq(currentPage+1).removeClass("end");
		$(".question").removeClass("on").eq(currentPage).addClass("on");
	}
	pageStatus();
}
function pageNext(){
	audioPlay('audio04');

	var pageListItem = ".paging li";
	if(currentPage < 4){
		// 미완료 페이지 체크
		if(!pageValidation[currentPage]["status"]){
			if(!pageValidation[currentPage]["complete"]){
				popOpen('#pop-unidentified');
				//return false;
				return false;
			}

		}
		currentPage++;
		//pageInit(currentPage);
		$(".pop-item-wrap ul").removeClass("on").eq(currentPage).addClass("on");
		$(pageListItem).removeClass("on").eq(currentPage).addClass("on");
		$(pageListItem).eq(currentPage-1).addClass("end");
		$(".question").removeClass("on").eq(currentPage).addClass("on");
	}
	pageStatus();
}