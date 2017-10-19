$(document).ready(function(){
	
	
	//Size animation script
    $(".sizeAnimationTrigger").click(function(){
        $(".sizeAnimationBox").animate({
			width: "+=30px",
			height: "+=30px"
		});
    });
	
	//Position animation script
    $(".positionAnimationTrigger").click(function(){
        $(".positionAnimationBox").animate({
			left: "+=100px"

		});
	});	
	
	//Background Position animation script
    $(".bgPostionAnimationTrigger").click(function(){
        $(".bgPostionAnimationBox").animate({
			backgroundPositionX: "+=100px", 
            backgroundPositionY: "+=200px"
		});
	});		

	//Opacity animation script
    $(".opacityAnimationTrigger").click(function(){
        $(".opacityAnimationBox").animate({
			opacity:"-=0.4"			
		});
    });	

	//Border animation script
    $(".borderAnimationTrigger").click(function(){
        $(".borderAnimationBox").animate({
			borderWidth: "+=10px"			

		})	;
    });		

	//Margin animation script
    $(".marginAnimationTrigger").click(function(){
        $(".marginAnimationBox").animate({
			margin: "+=10px"		

		});
    });	

	//Padding animation script
    $(".paddingAnimationTrigger").click(function(){
        $(".paddingAnimationBox").animate({
			padding: "+=10px"			

		});
    });	

	//Font size animation script
    $(".fontSizeAnimationTrigger").click(function(){
        $(".fontSizeAnimationBox").animate({
			fontSize: "+=5px"			

		});
    });	

	//Font spacing animation script
    $(".fontSpacingAnimationTrigger").click(function(){
        $(".fontSpacingAnimationBox").animate({
			letterSpacing: "+=5px",			//Between letter
			wordSpacing: "+=5px",				//Between word
			lineHeight: "+=5px",				//Between line
			textIndent: "+=5px"				//Paragraph begin indent size 

		});
    });		
});

