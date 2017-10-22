$(document).ready(function() {
	
    $('.sample-question').click(function(e) {  
		var message = $(this).find('.question-content').html();
		if(message =="I want to buy contract.")
		{
			localStorage.setItem("contract", "1");
		}
		if(message ==" I want to view some stock market news.")
		{
			localStorage.setItem("news", "1");
		}
		if(message ==" I want to view stock market statistic. ")
		{
			localStorage.setItem("stock", "1");
		}

			$('#message-input-field').val(message);
			$('#question-form').submit();

		
    });
	if(localStorage.getItem("stock")=='1')
	{
			$('.sample-question').hide();
			$('.contract-list').show();
			localStorage.setItem("stock", "2");
	}
	
	if(localStorage.getItem("news")=='1')
	{
			localStorage.setItem("news", "3");
			$('.speech-bubble').html("<a href='http://economictimes.indiatimes.com/markets/stocks/news/capital-international-to-buy-40-in-interglobe-tech-quotient-for-200-million/articleshow/60888617.cms' target='_blank'> Capital International to buy 40% in InterGlobe Tech Quotient for $200 million </a><br><br><a href='http://economictimes.indiatimes.com/markets/stocks/news/foreign-funds-turn-off-supply-leave-indian-markets-gasping/articleshow/60888445.cms' target='_blank'> Foreign funds turn off supply, leave Indian markets gasping </a><br><br><a href='http://economictimes.indiatimes.com/markets/stocks/news/fixed-income-market-wary-about-government-borrowing-spike/articleshow/60889955.cms' target='_blank'> Fixed income market wary about government borrowing spike </a><br><br>");		
			$('.sample-question').hide();
			$('.news-list').show();
			$('.speech-bubble ').css('height','25%');


	}
	if(localStorage.getItem("contract")=='2')
	{
			localStorage.setItem("contract", "3");		
			$('.sample-question').hide();
			$('.contract-list').hide();


	}
	if(localStorage.getItem("contract")=='1')
	{
			$('.sample-question').hide();
			$('.contract-list').show();
			localStorage.setItem("contract", "2");
	}

});

function checkContract()
{
		if(localStorage.getItem("stock")=='2')
		{	
			$('.speech-bubble').html("<center><img style='width:100%;' src='public/assets/img/statistic.png'/></center>");	
			$('.speech-bubble ').css('height','45%');	
			$('.speech-bubble ').css('top','150');	
			$('#message-input-field').val('');				
			$('.sample-question').hide();
			localStorage.setItem("stock", "3");
			$('.contract-list').hide();
			$('.news-list').hide();
			return false;
		}
		
		if(localStorage.getItem("contract")=='3')
		{
			
			$('.speech-bubble').html("Done, thanks for buying.");
			localStorage.setItem("contract", "0");	
			$('#message-input-field').val('');			
			$('.sample-question').show();
			$('.contract-list').hide();
			$('.news-list').hide();
			return false;

		}
		else 
			return true
}
