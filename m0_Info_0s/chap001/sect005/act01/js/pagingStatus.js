function pageStatus(){
	//
	if(currentPage === 0){
		$(".btn-back").prop("disabled", true);
		$(".btn-next").prop("disabled", false);
	}else if(currentPage === 6){
		$(".btn-back").prop("disabled", false);
		$(".btn-next").prop("disabled", true);
	}else{
		$(".btn-back").prop("disabled", false);
		$(".btn-next").prop("disabled", false);
	}

}