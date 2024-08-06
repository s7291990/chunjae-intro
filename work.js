var work = [
	/*기타*/
	{ "cate": "m01", "dep01": "중등UDL", "dep02": "냥냥붕어빵", "url": "m0_Info_0s/chap001/sect001/act01/index.html", "date": "2024-08-07", "status": ""
	},

	{ "cate": "m01", "dep01": "중등UDL", "dep02": "당꾸를 찾아라", "url": "m0_Info_0s/chap001/sect002/act01/index.html", "date": "2024-08-07", "status": ""
	},

	{ "cate": "m01", "dep01": "중등UDL", "dep02": "테트라스퀘어로 몬드리안 따라하기", "url": "m0_Info_0s/chap001/sect003/act01/index.html", "date": "2024-08-07", "status": ""
	},

	{ "cate": "m01", "dep01": "중등UDL", "dep02": "에라토스테네스의 체", "url": "m0_Info_0s/chap001/sect004/act01/index.html", "date": "2024-08-07", "status": ""
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
		tr += "<td><a href=" + work[i].url + " target='_blank'>보기</a></td>";
		var apiLink = work[i].url.replace('index','goorm');
		//tr += "<td><a href=" + apiLink + "'chap001' target='_blank'>테스트</a></td>";
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
