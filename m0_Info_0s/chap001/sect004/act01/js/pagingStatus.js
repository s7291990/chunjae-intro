function pageStatus(){
	//
	var _back = $(".btn-back");
	var _next = $(".btn-next");
	switch(currentPage) {
		case 0:
			_back.prop("disabled", true);
			_next.prop("disabled", false);
			break;
		case 1:
			_back.prop("disabled", false);
			_next.prop("disabled", false);
			break;
		case 2:
			_back.prop("disabled", false);
			_next.prop("disabled", false);
			break;
		case 3:
			_back.prop("disabled", false);
			_next.prop("disabled", false);
			break;
		case 4:
			_back.prop("disabled", false);
			_next.prop("disabled", true);
			break;
	}

}