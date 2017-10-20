$(document).ready(function(){

	/***************************************
			Advance animation
	***************************************/
		
	

	//Queue animation script
    $(".queueAnimationTrigger").click(function(){
		
		var animateElement =  $(".queueAnimationBox");		
        animateElement.animate({	left: '100px'	});
		animateElement.animate({	left: '200px'	});
		animateElement.animate({	left: '500px'	});
		animateElement.animate({	width: '300px', height: '300px'	});
		animateElement.animate({	width: '30px', height: '30px'	});
    });		

	//Animation speed script
    $(".speedAnimationTrigger").click(function(){
		var animateElement =  $(".speedAnimationBox");		
        animateElement.animate({	left: '100px'	},"fast");
		animateElement.animate({	left: '200px'	},"slow");	
		animateElement.animate({	left: '400px'	},100);	
		animateElement.animate({	left: '700px'	},10000);	
    });

	//Animation stop script
    $(".startAnimationTrigger").click(function(){
		loop_stop();	
    });	
    $(".stopAnimationTrigger").click(function(){
		var animateElement = $(".stopAnimationBox");
		animateElement.stop();
	
    });
	function loop_stop(){	
		var animateElement = $(".stopAnimationBox");		
		animateElement.animate({	left:"+=1000px"	},10000);							
	}		
	
	//Animation callback script
    $(".callbackAnimationTrigger").click(function(){
		var animateElement =  $(".callbackAnimationBox");	
		animateElement.animate({	left:"+=100px"	},1000,function(){
			alert("Animation done");
		});	
	
    });
		
		
	//Animation loop script
    $(".loopAnimationTrigger").click(function(){
		var animateElement =  $(".loopAnimationBox");		
		loop(animateElement);
    });
	function loop(animateElement){		
		animateElement.animate({	width: '200px',height:'200px'	},"slow");		
		animateElement.animate({	width: '10px',height:'10px'	},"slow");		
		loop(animateElement);
	}	
	
	//Animation easing script
    $(".easingAnimationTrigger").click(function(){
		var animateElement =  $(".easingAnimationBox");		
        animateElement.animate({	left: '500px'	},500,"swing");
		animateElement.animate({	left: '1000px'	},500,"linear");	
    });
	

	/***************************************
			Basic animation
	***************************************/

	
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

