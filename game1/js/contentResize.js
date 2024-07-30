var isFirst = true;
window.onload = function(){
  contentResize();

  $("body").on("click", ".select-value", function(){
  	var ck = $(this).hasClass("on");
  	if(ck){
  		$(this).removeClass("on");
		}else{
      $(this).addClass("on");
		}
	});
  $("body").on("click", ".select-list-wrap a", function(){
  	var _val = $(".select-value").find("span").text();
    $(".select-value").removeClass("on");
    $(".select-value").find("span").text($(this).text());
    $(this).text(_val);
  });
}
function contentResize(){
	const wrap = document.querySelector('.container');
	const ratio = 1920 / 1080;
	const windowRatio = window.innerWidth / window.innerHeight;
	if (windowRatio < ratio) {
		zoom = window.innerWidth / 1920; // 가로가 더 좁은 경우
	} else {
		zoom = window.innerHeight / 1080; // 세로가 더 좁은 경우
	}
	wrap.style.transform = 'scale(' + zoom + ')';

	if(isFirst){
		isFirst = false;
		$(".wrapper").addClass("active");
	}
}