var work = [
	/*기타*/
  { "cate": "m01", "dep01": "냥냥붕어빵", "dep02": "인트로", "url": "chap001/sect001/game/index.html", "date": "2024-08-08", "status": ""
  },
	{ "cate": "m01", "dep01": "냥냥붕어빵", "dep02": "수와 연산 소인수분해", "url": "chap001/sect001/act01/index.html", "date": "2024-08-07", "status": ""
	},

  { "cate": "m02", "dep01": "당꾸를 찾아라", "dep02": "인트로", "url": "chap001/sect002/game/index.html", "date": "2024-08-08", "status": ""
  },
	{ "cate": "m02", "dep01": "당꾸를 찾아라", "dep02": "1. 소인수분해", "url": "chap001/sect002/act01/index.html", "date": "2024-08-07", "status": ""
	},
	{ "cate": "m02", "dep01": "당꾸를 찾아라", "dep02": "2. 최대공약수와 최소공배수", "url": "chap001/sect002/act02/index.html", "date": "2024-08-08", "status": ""
	},
	{ "cate": "m02", "dep01": "당꾸를 찾아라", "dep02": "3. 정수와 유리수의 뜻과 대소 관계", "url": "chap001/sect002/act03/index.html", "date": "2024-08-08", "status": ""
	},

  { "cate": "m03", "dep01": "테트라스퀘어로 몬드리안 따라하기", "dep02": "인트로", "url": "chap001/sect003/game/index.html", "date": "2024-08-08", "status": ""
  },
	{ "cate": "m03", "dep01": "테트라스퀘어로 몬드리안 따라하기", "dep02": "01", "url": "chap001/sect003/act01/index.html", "date": "2024-08-07", "status": ""
	},

  { "cate": "m04", "dep01": "에라토스테네스의 체", "dep02": "인트로", "url": "chap001/sect004/game/index.html", "date": "2024-08-08", "status": ""
  },
	{ "cate": "m04", "dep01": "에라토스테네스의 체", "dep02": "01", "url": "chap001/sect004/act01/index.html", "date": "2024-08-07", "status": ""
	},

  { "cate": "m05", "dep01": "소수 찾기", "dep02": "인트로", "url": "chap001/sect005/game/index.html", "date": "2024-08-08", "status": ""
  },
	{ "cate": "m05", "dep01": "소수 찾기", "dep02": "01", "url": "chap001/sect005/act01/index.html", "date": "2024-08-08", "status": ""
	},

  { "cate": "m06", "dep01": "마법의 색칠 대모험", "dep02": "인트로", "url": "chap001/sect006/game/index.html", "date": "2024-08-08", "status": ""
  },
	{ "cate": "m06", "dep01": "마법의 색칠 대모험", "dep02": "01", "url": "chap001/sect006/act01/index.html", "date": "2024-08-08", "status": ""
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
