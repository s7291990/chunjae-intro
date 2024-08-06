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