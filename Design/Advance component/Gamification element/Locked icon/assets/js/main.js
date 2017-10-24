$(function (){
  
  // Cache vars
  var $gallery = $('.gallery'),
      $lightbox = $('.lightbox'),
      $figure = $('figure'),
      $close = $('.close');
  
  
  $.getJSON(url, function(data) {
    // Handle item click
    $('.item').on('click', function() {
      
      var full = $(this).attr('data-full');
      
      toggleLightbox(full);
      
      console.log(full);
          
    });
    
    // Toggle lightbox
    function toggleLightbox(url) {
      
      if ($lightbox.is('.open')) {
        
        $lightbox
          .removeClass('open')
          .fadeOut(200);
        
      } else {
                
        $figure.css('background-image', 'url(' + url + ')');
        $lightbox
          .addClass('open')
          .fadeIn(200);
        
      }
      
    }
    
    // Close 
    $lightbox.on('click', toggleLightbox);

});
  
});