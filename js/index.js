$(function () {
	$(".btn-gnavi").on("click", function () {
		// ハンバーガーメニューの位置を設定するための変数
		var rightVal = 0;
		if ($(this).hasClass("open")) {
			// 質問　class名にopenがあればrightValを0にすると書いてあるが、どこのopenを指定しているかわからない

			// 質問　各所にあるthisはどこを指しているのか？

			// 「open」クラスを持つ要素はメニューを開いた状態に設定
			rightVal = -300;
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).removeClass("open");
		} else {
			// 「open」クラスを持たない要素はメニューを閉じた状態に設定 (rightVal は0の状態 )
			// メニューを開いたら次回クリック時は閉じた状態になるよう設定
			$(this).addClass("open");
		}

		$("#global-navi").stop().animate({
			right: rightVal
		}, 200);
	});
});
