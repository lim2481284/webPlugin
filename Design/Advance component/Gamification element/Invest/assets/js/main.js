var timeoutId = 0;

$('.clickHoldBtn').on('mousedown', function() {
	var count = 0;
		timeoutId = setInterval(function(){ $('.test').append('a'); count ++ }, 1000);
		
		if(count == 5 )
		{
			
			timeoutId = setInterval(myFunction, 100);
		}
		
}).on('mouseup mouseleave', function() {
		clearInterval(timeoutId);
});

function myFunction()
{
	$('.test').append('a');
}
myFunction();