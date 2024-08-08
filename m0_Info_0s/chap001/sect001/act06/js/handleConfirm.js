function handleConfirm(id){
  //audioPlay('audio01');

  var answer = $(id + " .answer-value").val();
  var selectValue = $(id + " .select-value").val();

  $(id + " .select-type-wrap").addClass("hide");
  if(selectValue === answer ){ // 정답일때
    $(id + " .result-o").addClass("on");
  }else{  // 오답일때
    $(id + " .result-x").addClass("on");
  }

  // 버튼 활성화
  $(id + " .btn-confirm").addClass("hide");
  $(id + " .btn-next").removeClass("hide");

}