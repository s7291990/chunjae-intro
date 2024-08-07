var currentPage = 0;
var zoom = 1;
var isFirst = true;
var isPrevData = true;

var pageValidation = []

window.onload = () => {

	contentResize();

};


function audioPlay(id) {
	var audio = document.getElementById(id);
	audio.play();
}

function popOpen(id){
	$(id).addClass("on");
	$(".contents").attr("aria-hidden","true");
}
function popClose(id){
	$(id).removeClass("on");
	$(".contents").attr("aria-hidden","false");
}

function handleRadio(id){
	//audioPlay('audio01');
	var selectValue = $(id + " input:checked").val();
	if(selectValue !== ''){
		$(id+" .btn-confirm").prop("disabled", false);
	}
}

function handleOut(){
  history.back();
}