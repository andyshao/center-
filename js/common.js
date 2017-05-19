(function(){
	$(".toggles").click(function() {
			var nav = $(this).siblings(".collapse");
			if(nav.is(":visible")) {
				$(this).find(".icon").removeClass("icon-angle-up").addClass("icon-angle-down");
			} else {
				$(this).find(".icon").addClass("icon-angle-up").removeClass("icon-angle-down");
			}
		})
})()
function modifyPic() {
		var pic = $(".picUpload").find(".media-left");
		pic.mouseenter(function() {
			$(this).find(".modifyPic").stop(true, false).fadeIn();

		}).mouseleave(function() {
			$(this).find(".modifyPic").stop(true, false).fadeOut();
		})
	}
function showDiv(){
		$(".st").click(function(){
			var ifshow=$(this).siblings(".ifshow")
			if(ifshow.is(":visible")){
				$(this).find(".icon").removeClass("icon-angle-up").addClass("icon-angle-down");
				ifshow.slideUp();
			}else{
				$(this).find(".icon").addClass("icon-angle-up").removeClass("icon-angle-down");
				ifshow.slideDown();
			}
		})
	}
function showReply(){
		$(".replyButton").click(function(){
			var replybox=$(this).closest("p").siblings(".replyBox");
			replybox.show();
		})
		$(".replyBox").find(".clsoe").click(function(){
			$(this).closest(".replyBox").hide();
		})
	}
	//以上为首页JS代码
(function(){
	$(window).on("load resize",function(){
		$(".Content").css({"min-height":($(window).height()-$(".header").height())})
	})
})()
//商家中心 tale
function Table2() {
		var len = $(".Table tbody").find("tr").length;
		var $tr = $(".Table tbody").find("tr");
		for(var i = 0; i < len; i++) {
			if(i % 2 == 0) {
				$tr.eq(i).css({
					"background": "#f4f4f4"
				});
			} else {
				$tr.eq(i).css({
					"background": "#fff"
				});
			}
		}
	} //每次AJAX动态增加表单时候可以调用该函数
//资产 中心 taBle
function Table() {
		var len = $(".Table  .table tbody").find("tr").length;
		var $tr = $(".Table  .table tbody").find("tr");
		for(var i = 0; i < len; i++) {
			if(i % 2 == 0) {
				$tr.eq(i).css({
					"background": "#fff"
				});
			} else {
				$tr.eq(i).css({
					"background": "#f4f4f4"
				});
			}
		}
	} //每次AJAX动态增加表单时候可以调用该函数
function pagation() {
	$(".pagination").delegate("li:has(a)", "click", function() {
		$(this).addClass("active").siblings('li').removeClass('active');
	})
}

