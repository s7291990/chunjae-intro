var currentPage = 0;
var zoom = 1;
var isFirst = true;
var isPrevData = true;

var pageValidation = [
	{
		status : false,
		cnt : 0, // 항목 빈값 갯수
		errorCnt: 0, // 에러 항목 갯수
		wrongCnt: 3,  // 오답 횟수
		complete: false, // 정답 맞추면 완료처리
		score: 10,
	},
	{
		status : false,
		cnt : 0, // 항목 빈값 갯수
		errorCnt: 0, // 에러 항목 갯수
		wrongCnt: 3,  // 오답 횟수
		complete: false, // 정답 맞추면 완료처리
		score: 10,
	},
	{
		status : false,
		cnt : 0, // 항목 빈값 갯수
		errorCnt: 0, // 에러 항목 갯수
		wrongCnt: 3,  // 오답 횟수
		complete: false, // 정답 맞추면 완료처리
		score: 10,
	},
	{
		status : false,
		cnt : 0, // 항목 빈값 갯수
		errorCnt: 0, // 에러 항목 갯수
		wrongCnt: 3,  // 오답 횟수
		complete: false, // 정답 맞추면 완료처리
		score: 10,
	},
	{
		status : false,
		cnt : 0, // 항목 빈값 갯수
		errorCnt: 0, // 에러 항목 갯수
		wrongCnt: 3,  // 오답 횟수
		complete: false, // 정답 맞추면 완료처리
		score: 10,
	}
]

window.onload = () => {

	contentResize();


};


function audioPlay(id) {
	var audio = document.getElementById(id);
	audio.play();
}

function popOpen(id){
	$(id).find(".popMsg").remove();
	if(id === "#pop-dim"){
		$(id).prepend('<span class="popMsg hidden">다시 하기 버튼을 눌러야 편집이 가능합니다.</span>');
	}else{
		$(id).prepend('<span class="popMsg hidden">팝업 시작</span>');
	}
	modalFocus(id);
	$(id).addClass("on");
	$(".contents").attr("aria-hidden","true");
}
function popClose(id){
	$(id).find(".popMsg").remove();
	$(id).prepend('<span class="popMsg hidden">팝업 끝</span>');

	if(id === "#pop-right-answer"){
		setTimeout(function(){
			$(".btn-reset").focus();
		},200)
	}else if(id === "#pop-commentary"){
		setTimeout(function(){
			$(".btn-commentary").focus();
		},200)
	}
	//audioPlay('audio01');
	$(id).removeClass("on");
	if(id == "#pop-again"){
		$("#page0"+(currentPage+1)+ " .inp").prop("disabled", false);
		$("#page0"+(currentPage+1)+ " .inp").removeClass("error");
		$("#page0"+(currentPage+1)+ " .inp").val("");
    $("#page0"+(currentPage+1)+ " .value").text("");
	}
	$(".contents").attr("aria-hidden","false");
}

