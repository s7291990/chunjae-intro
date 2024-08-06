var work = [
	/*기타*/
	{ "cate": "m01", "dep01": "교과학습", "dep02": " 1차시-활동2", "url": "e0_info_0s/tbset/chap001/sect001/act02/index.html", "date": "2024-06-09", "status": ""
	},

	{ "cate": "m01", "dep01": "교과학습", "dep02": " 2차시-활동2", "url": "e0_info_0s/tbset/chap001/sect002/act02/index.html", "date": "2024-06-27", "status": ""
	},




	//{ "cate": "m03", "dep01": "특별학습", "dep02": "-", "url": "-", "date": "-", "status": "" },


];


$(function () {
	listTable(".siteNavi li", ".siteNavi li .num");
});

function listTable(cls, num) {
	var tr;
	for (i = 0; i < work.length; i++) {

		tr += "<tr class=" + work[i].cate + ">";
		tr += "<td>" + work[i].dep01 + "</td>";
		tr += "<td>" + work[i].dep02 + "</td>";
		tr += "<td><a href='./" + work[i].url + "' target='_blank'>보기</a></td>";
		var apiLink = work[i].url.replace('index','goorm');
		tr += "<td><a href='./" + apiLink + "' target='_blank'>테스트</a></td>";
		tr += "<td class='ac " + work[i].status + "'>" + work[i].date + "</td>";
		tr += "</tr>";
	}
	$("table tbody").append(tr);

	$(num).each(function (z) {
		if (z === 0) {
			$(num).eq(z).text("(" + work.length + "p)");
		} else {
			$(num).eq(z).text("(" + $('.m0' + z).length + "p)");
		}
	});
	$("body").on("click", cls, function () {
		$(cls).removeClass("on");
		$(this).addClass("on");
		$("table tbody tr").hide();
		if ($(this).index() === 0) {
			$("table tbody tr").show();
		} else {
			$(".m0" + $(this).index()).show();
		}
	});
}  
