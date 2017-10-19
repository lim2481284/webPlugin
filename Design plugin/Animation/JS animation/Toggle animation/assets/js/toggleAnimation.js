$(document).ready(function(){
	
	//Size animation script
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
	
	
	//Size animation script
    $(".sizeAnimationTrigger").click(function(){
        $(".toggleSize").animate({
			width: "toggle",
			height: "toggle"
		},"slow");
    });
	
	//Position animation script
    $(".positionAnimationTrigger").click(function(){
        $(".togglePosition").animate({
			width: "toggle",
			height: "toggle",
			opacity:"toggle"			
		});
	});	

	//Position Slide animation script
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
	
	//Opacity animation script
    $(".opacityAnimationTrigger").click(function(){
        $(".toggleOpacity").animate({
			opacity:"toggle"			
		},"slow");
    });	

	//Border animation script
    $(".borderAnimationTrigger").click(function(){
        $(".toggleBorder").animate({
			borderWidth: "toggle"

		})	;
    });		

	//Margin animation script
    $(".marginAnimationTrigger").click(function(){
        $(".toggleMargin").animate({
			margin: "toggle"		

		});
    });	

	//Padding animation script
    $(".paddingAnimationTrigger").click(function(){
        $(".togglePadding").animate({
			padding: "toggle"			

		});
    });	

	//Font size animation script
    $(".fontSizeAnimationTrigger").click(function(){
        $(".toggleFontSize").animate({
			fontSize: "toggle"		

		});
    });	

	//Font spacing animation script
    $(".fontSpacingAnimationTrigger").click(function(){
        $(".toggleFontSpace").animate({
			letterSpacing: "toggle",			//Between letter
			wordSpacing:  "toggle",				//Between word
			lineHeight:  "toggle",				//Between line
			textIndent:  "toggle"			//Paragraph begin indent size 

		});
    });		
});

