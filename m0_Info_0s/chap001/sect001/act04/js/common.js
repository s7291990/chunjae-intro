var currentPage = 0;
var zoom = 1;
var isFirst = true;
var isPrevData = true;

var pageValidation = []

window.onload = () => {

	contentResize();
	$("mjx-container").each(function(i){
		$(this).attr("tabindex", "-1");
	});
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

function handleSelect(id, n){
  //audioPlay('audio01');
  $(id + " .select-value").val(n);
  $(id + " .select-cont-wrap button").removeClass("on");
  $(id + " .select-cont-wrap button").eq(n-1).addClass("on");
  $(id+" .btn-confirm").prop("disabled", false);
}

function handleOut(){
	history.back();
}