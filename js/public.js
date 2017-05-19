$(function(){
	//搜索切换
  $("#toggle li").click(function(){
  	 $(this).addClass("on").siblings().removeClass("on");
  });

  //搜索下拉
  $("#position_1").hover(function(){
  	 $(this).find("#hide").slideDown();
  },function(){
  	 $(this).find("#hide").slideUp();
  });
 $("#hide ul li").click(function(){
 	$("#example").text($(this).find(".inner").text());
 });

 //购物车
 $("#myCart").hover(function(){
     $("#position_2").fadeIn().removeClass("hide");
 },function(){
     $("#position_2").fadeOut().addClass("hide");
 });

 //分类
 $("#allClass .position ul li").hover(function(){
     $(this).find("dd").removeClass("hide");
 },function(){
     $(this).find("dd").addClass("hide");
 });
 
 //分页分类下拉
 $("#allClass").hover(function(){
     $(this).children(".pagination").removeClass("hide");
 },function(){
     $(this).children(".pagination").addClass("hide");
 });
 
	//focusblur 
	jQuery.focusblur = function(focusid) { 
		var focusblurid = $(focusid); 
		var defval = focusblurid.val(); 
		focusblurid.focus(function(){ 
			var thisval = $(this).val(); 
				if(thisval==defval){ 
				$(this).val(""); 
			} 
		}); 
	focusblurid.blur(function(){ 
		var thisval = $(this).val(); 
		if(thisval==""){ 
			$(this).val(defval); 
			} 
		}); 
	}; 

 //快讯
 function news(){
 	var j = 0,top = 0;
 	var _height = $("#middleTip ul li").height();
 	var _length = $("#middleTip ul li").length;
 	if (_length < 6) {
 		return false;
 	};
    for (var i = 0; i < 6; i++) {
       $("#middleTip ul").append($("#middleTip ul li").eq(i).clone());
    };

    var timer = setInterval(function(){
    	letGo();
    },2000);

    function letGo(){
       j++;
       if (j > _length) {
       	 j = 0;
       	 $("#middleTip ul").css({"top":"5px"});
       	 j++;
       };
        top = -j*_height + 5 +'px';
       	$("#middleTip ul").animate({"top":top},500);
    };

    $("#middleTip").hover(function(){
    	clearInterval(timer);
    },function(){
    	timer = setInterval(function(){
    	   letGo();
        },2000);
    });

 }
 news();

 function scrollAdv(){
    var j = 0,n = 0,left = 0;
 	var _width = $("#BottomTip .clearfix li").width();
 	var _length = $("#BottomTip .clearfix li").length;
 	$("#BottomTip .clearfix").append($("#BottomTip ul li").eq(0).clone());
    var timer_2 = setInterval(function(){
    	goLeft();
    },4000);

    $("#BottomTip").hover(function(){
        clearInterval(timer_2);
        $("#control").fadeIn();
     },function(){
    	timer_2 = setInterval(function(){
    	  goLeft();
        },4000);
        $("#control").fadeOut();
    });

    function goLeft(){
       j++;
       if (j > _length) {
       	 j = 0;
       	 j++;
       	 $("#BottomTip .clearfix").css({"left": 0});
       };
       left =  -j*_width + 'px';
       $("#BottomTip .clearfix").animate({"left": left}, 800);
    }

    $("#control .pre").click(function(){
    	 j--;
    	 if (j < 0) {
       	  j = _length;
       	 $("#BottomTip .clearfix").css({"left": -j*_width + 'px'});
       	  j--;
       };
       left =  -j*_width + 'px';
       $("#BottomTip .clearfix").animate({"left": left}, 500);
    });

    $("#control .next").click(function(){
    	 goLeft();
    });
 }

 scrollAdv();

 //asideLeft
 function getEach(id){
 	$.each(id,function(i,val){
       $(this).hover(function(){
       	  $(this).find(".getBg").css({"backgroundColor":"#dd2727"});
       	  $(this).find(".hideText").stop().animate({"right": "30px"},300);
       },function(){
       	  $(this).find(".getBg").css({"backgroundColor":"#dd2727"});
       	  $(this).find(".hideText").stop().animate({"right": "-120px"},300);
       });
 	})

 };
  getEach($("#asideLeft ul li"));

  $("#goTop").click(function(){
     $("html,body").animate({"scrollTop": '0px'},800);
  });

  $("#weChat").hover(function(){
  	 $(this).css({"backgroundColor":"#fff"});
  	 $(this).find(".img").slideDown();
  },function(){
  	 $(this).css({"backgroundColor":"#eee"});
  	 $(this).find(".img").slideUp();
  });

  // 楼层控制
  var heightList = [600,965,1255,1740,2225,2715,3150,10000];
  setInterval(function(){
     var getTop = $(window).scrollTop();
     if ( getTop > 600 && getTop < 3080) {
        $(".asideRight").removeClass("hide");
     } else{
        $(".asideRight").addClass("hide");
     };

   },50);

  $.each(heightList,function(i,val){
      $(".asideRight ul li").eq(i).click(function(){
         $("html,body").animate({"scrollTop": heightList[i] +'px'},300);
      });
  });

 $.each($(".asideRight ul li"),function(i,val){
     $(this).hover(function(){
          $(this).find("a").css({
			"background":"-webkit-linear-gradient(left top, #ff4444 , #ff9302)", 
			"background":"-o-linear-gradient(bottom right, #ff4444 , #ff9302)",
			"background":"-moz-linear-gradient(bottom right, #ff4444 , #ff9302)", 
			"background":"linear-gradient(to bottom right, #ff4444 , #ff9302)",
			"color":"#fff"
           }).stop().animate({"top":"-50px"},300);
      },function(){
         $(this).find("a").css({
             "background":"#f7f7f7",
             "color":"#333"
           }).stop().animate({"top":"0"},300);
      });
  })
  
  
  
  
  
  
  
  // 楼层控制2
  var heightList2 = [600,965,1255,1740,2225,2715,3150,10000];
  setInterval(function(){
     var getTop = $(window).scrollTop();
     if ( getTop > 600 && getTop < 3080) {
        $(".asideRight2").removeClass("hide");
     } else{
        $(".asideRight2").addClass("hide");
     };

   },50);

  $.each(heightList2,function(i,val){
      $(".asideRight2 ul li").eq(i).click(function(){
         $("html,body").animate({"scrollTop": heightList2[i] +'px'},300);
      });
  });

});