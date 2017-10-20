$(document).ready(function(){

	//Toggle callback script
    $(".callbackAnimationTrigger").click(function(){
        $(".toggleCallback").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},1000,function(){			
			alert("Toggle done");
		});			
	
    });

	//Speed Toggle script
    $(".speedVerySlowAnimationTrigger").click(function(){			
        $(".toggleSpeed").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},2000);	
    });
    $(".speedSlowAnimationTrigger").click(function(){			
        $(".toggleSpeed").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"slow");	
    });
    $(".speedFastAnimationTrigger").click(function(){			
        $(".toggleSpeed").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"fast");	
    });
    $(".speedVeryFastAnimationTrigger").click(function(){			
        $(".toggleSpeed").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},100);	
    });

	
	//Queue Toggle script
    $(".queueToggleTrigger").click(function(){	
		
		$(".queueAnimationBox").animate({			
			height: "400px",
			width:"400px",			
		},"slow");
        $(".toggleQueue").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"slow");
		$(".queueAnimationBox2").animate({			
			paddingLeft:"400px"
		},"slow");		
		$(".queueAnimationBox").css("height","100px");
		$(".queueAnimationBox").css("weight","100px");
		$(".queueAnimationBox2").css("padding","0");
    });

	//Multiple Element toggle script
    $(".element1AnimationTrigger").click(function(){
		
        $(".toggleElement1").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"slow");
    });
    $(".element2AnimationTrigger").click(function(){
		
        $(".toggleElement2").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"slow");
    });
    $(".element3AnimationTrigger").click(function(){
		
        $(".toggleElement3").animate({			
			height: "toggle",
			width:"toggle",
			margin:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"slow");
    });

	
	//Element toggle script
    $(".elementAnimationTrigger").click(function(){
		
        $(".toggleElement").animate({			
			height: "toggle",
			width:"toggle",
			border:"toggle",
			padding:"toggle",
			opacity:"toggle",
			fontSize:"toggle"
		},"slow");
    });
	
	
	//Size toggle script
    $(".sizeAnimationTrigger").click(function(){
        $(".toggleSize").animate({
			width: "toggle",
			height: "toggle"
		},"slow");
    });
	
	//Position toggle script
    $(".positionAnimationTrigger").click(function(){
        $(".togglePosition").animate({
			width: "toggle",
			height: "toggle",
			opacity:"toggle"			
		});
	});	

	//Position Slide toggle script
    $(".positionSlideRightAnimationTrigger").click(function(){
		$(".positionSlideAnimationBox").animate({
			left: "100%"		
		});
        $(".togglePositionSlide").toggle();
	});	
    $(".positionSlideLeftAnimationTrigger").click(function(){
		$(".positionSlideAnimationBox").animate({
			left: "-100%"		
		});
        $(".togglePositionSlide").toggle();
	});		
	
	//Opacity toggle script
    $(".opacityAnimationTrigger").click(function(){
        $(".toggleOpacity").animate({
			opacity:"toggle"			
		},"slow");
    });	

	//Border toggle script
    $(".borderAnimationTrigger").click(function(){
        $(".toggleBorder").animate({
			borderWidth: "toggle"

		})	;
    });		

	//Margin toggle script
    $(".marginAnimationTrigger").click(function(){
        $(".toggleMargin").animate({
			margin: "toggle"		

		});
    });	

	//Padding toggle script
    $(".paddingAnimationTrigger").click(function(){
        $(".togglePadding").animate({
			padding: "toggle"			

		});
    });	

	//Font size toggle script
    $(".fontSizeAnimationTrigger").click(function(){
        $(".toggleFontSize").animate({
			fontSize: "toggle"		

		});
    });	

	//Font spacing toggle script
    $(".fontSpacingAnimationTrigger").click(function(){
        $(".toggleFontSpace").animate({
			letterSpacing: "toggle",			//Between letter
			wordSpacing:  "toggle",				//Between word
			lineHeight:  "toggle",				//Between line
			textIndent:  "toggle"			//Paragraph begin indent size 

		});
    });		
});

