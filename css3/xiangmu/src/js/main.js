$(function(){
	//设置网页宽高

	+function(){
		setHw();
		$(window).resize(function(){
			setHw();
			waterfall();
		});
		function setHw(){
			var Height=$(this).innerHeight();
			var Width=$(this).innerWidth();
		  $(".main").height(Height);
		  $(".main").width(Width);	
		}
	}()
	//轮播
	+function(){
		var index=0;
		var timer;
		var $banLi=$(".banPath li");
		$banLi.eq(0).animate({opacity:'1'},0);
		$(".hd li").hover(function(){
			clearInterval(timer);
			index=$(this).index();
			show();
			setTime()
		});
		 setTime()
		 function setTime(){
			timer=setInterval(function(){
				index++;
				if(index==4){
					index=0;
				}
			show();
			},3000)	
		}
		function show(){
			$(".hd li").eq(index).addClass("on").siblings().removeClass("on");
			$banLi.eq(index).animate({opacity:'1'},500);
			//$banLi.eq(index-1).animate({opacity:'0'},0);
			$banLi.eq(index).show().siblings('li').animate({opacity:'0'},0).hide();
		}
	}()
	//菜单按钮
	+function(){
		var i=0;
		var $span=$("#menue span");
		$("#menue").click(function(){
			if(i==0){
				$span.eq(0).css("top","25px");
				$span.eq(1).hide();
				$span.eq(2).css("top","25px");
				setTimeout(function(){
				$span.eq(0).css("transform","rotate(-45deg)");
				$span.eq(2).css("transform","rotate(45deg)");
				},500)
				$(".navPath").addClass("navAct");
				$(".main_con").css("left","170px");
				i++;
			}else{
				$span.eq(0).css("transform","rotate(0)");
				$span.eq(2).css("transform","rotate(0)");
				$span.eq(1).show();
				setTimeout(function(){
					$span.eq(0).css("top","18px");
					$span.eq(2).css("top","32px");
				},500)
				$(".navPath").removeClass("navAct");
				$(".main_con").css("left","0px")
				//ani_show($(".content").eq(0));
				changWide(-107,30,30,30,30)
			i=0;
			}
		})
	}()
	//菜单对应点击
	+function(){
		var $span=$(".navMen span").not(".xian");
		var $content=$(".content");
		var n=0;
		$content.eq(0).show();
		$(".navMen").on("click",function(e){
			if(e.target!==e.currentTarget){
				var children=$span.toArray();
				for(var i=0,len=children.length;i<len;i++){
					if(e.target===children[i]){
						ani_show($content.eq(i));
						if(i==0){
							if(n=0){
								changWide(30,30,30,30,30)
								n+1;
							}else{
								changWide(-107,30,30,30,30)
							}
						}else if(i==1){
							changWide(30,-107,30,30,30)
						}else if(i==2){
							changWide(30,30,-107,30,30)
						}else if(i==3){
							changWide(30,30,30,-107,30)
						}else if(i==4){
							changWide(30,30,30,30,-107)
						}
						return;	
					}
				}
			}
		});
	}()
	//team页的效果
	+function(){
		 		waterfall();
		 		$(".imgBox").hover(function(){
		 			$(this).find("img").css("transform","scale(1.1)")
		 		},function(){
          $(this).find("img").css("transform","scale(1)")
		 		})
		   
       
	}()	
		
	 function waterfall(){
      var box=$(".team_show");//这里是区块名称
      var team_Info=$(".team_Inf");
   	 	var totalHeight; 
   	 	var box_W;
   	 	var top_hei;
   	 	var box_H;
   	 	var num;
      var w=[];//记录区块高度的数组
      var totalW=$(".team").width();
        box_W =box.eq(0).width();
      if(box_W>100){
      	box_W=box_W;
      }else{
      	box_W=totalW*(box_W/100)
      }
      var n = document.documentElement.offsetWidth/box_W|0;
   		box_H = ($(team_Info[0]).innerHeight()+241*box_W/363).toFixed(2)
    	for(var i = 0;i < box.length;i++) {//有多少个li就循环多少次
       if(i < n) {//n是一行最多的li，所以小于n就是第一行了
          w[i]=i * box_W;
         	box.eq(i).css("top",0);//第一行的Li的top值为0
          box.eq(i).css("left",i * box_W);//第i个li的左坐标就是i*li的宽度
        }else{
    			num=parseInt(i/n)
					top_hei= num*box_H ;//加上新高度后更新高度值
          box.eq(i).css("top",top_hei);//先得到高度最小的Li，然后把接下来的li放到它的下面
          box.eq(i).css("left",w[i-4]);    //第i个li的左坐标就是i*li的宽度
          totalHeight=top_hei;
        }
       }
       $(".team_bot").css({"height":totalHeight})
    };
    var $span=$(".navMen span").not(".xian");
    function changWide(a,b,c,d,e){
			$span.eq(0).css("background-position",a+"px -3px");
			$span.eq(1).css("background-position",b+"px -25px");
			$span.eq(2).css("background-position",c+"px -47px");
			$span.eq(3).css("background-position",d+"px -69px");
			$span.eq(4).css("background-position",e+"px -91px");
		};
		function ani_show(element){
			element.css({"transform-origin":"center top 0px" ,"transform":"rotateX(-180px)"}).removeClass("ani_hide").show().addClass("ani_show");
			element.siblings(".content").css({"transform-origin":"center bottom 0"}).removeClass("ani_show").addClass("ani_hide");
			setTimeout(function(){
					element.siblings(".content").hide();
			},500)
		}

	
});
