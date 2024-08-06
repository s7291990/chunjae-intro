function pageStatus(){
	//
	switch(currentPage) {
		case 0:
			$(".btn-back").prop("disabled", true);
			$(".btn-next").prop("disabled", false);
			break;
		case 1:
			$(".btn-back").prop("disabled", false);
			$(".btn-next").prop("disabled", false);
			break;
		case 2:
			$(".btn-back").prop("disabled", false);
			$(".btn-next").prop("disabled", true);
			break;
	}

}