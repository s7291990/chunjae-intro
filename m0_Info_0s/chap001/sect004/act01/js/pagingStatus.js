function pageStatus(){
	//
	var _back = $(".btn-back");
	var _next = $(".btn-next");

	if(currentPage === 0){
		_back.prop("disabled", true);
		_next.prop("disabled", false);
	}else if(currentPage === 8){
		_back.prop("disabled", false);
		_next.prop("disabled", true);
	}else{
		_back.prop("disabled", false);
		_next.prop("disabled", false);
	}

	$(".btn-green").addClass("hide");

	if(currentPage > 1){
		$(".btn-green").removeClass("hide");
	}


}