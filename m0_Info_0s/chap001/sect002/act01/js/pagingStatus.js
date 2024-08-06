function pageStatus(){
	//
	switch(currentPage) {
		case 0:
			if(pageValidation[0].status){
				$(".btn-back").prop("disabled", true);
				$(".btn-next").prop("disabled", false);
			}else{
				$(".btn-back").prop("disabled", true);
				$(".btn-next").prop("disabled", true);
			}
			break;
		case 1:
			if(pageValidation[1].status){
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", false);
			}else{
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", true);
			}
			break;
		case 2:
			if(pageValidation[2].status){
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", false);
			}else{
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", true);
			}
			break;
		case 3:
			if(pageValidation[3].status){
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", false);
			}else{
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", true);
			}
			break;
		case 4:
			if(pageValidation[4].status){
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", true);
			}else{
				$(".btn-back").prop("disabled", false);
				$(".btn-next").prop("disabled", true);
			}
			break;
	}
	if(!pageValidation[currentPage]["status"]){
		popClose('#pop-dim');
		if(pageValidation[currentPage]["wrongCnt"] === 0){
			popOpen('#pop-dim');
		}
	}else{
		popOpen('#pop-dim');
		if(!pageValidation[currentPage]["dim"]){
			popClose('#pop-dim');
		}
	}
}