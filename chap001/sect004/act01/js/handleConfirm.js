function handleConfirm(n){
	//audioPlay('audio01');
	var _button = $(".find-type-wrap button");
	_button.removeClass("on");
	_button.eq(n-1).addClass("on");
	var answer = $(".answer-value").val();

	if(n === 1){ // 30 선택시
		//$(id + " .result-o").addClass("on");
	}else if(n === 2){  // 50 선택시
		//$(id + " .result-x").addClass("on");
	}else if(n === 3){  // 100 선택시
		//$(id + " .result-x").addClass("on");
	}

	// 버튼 활성화
	//$(id + " .btn-confirm").addClass("hide");
	//$(id + " .btn-next").removeClass("hide");

}