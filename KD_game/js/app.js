window.onload = function() {
  if (window.jQuery) {  
    $('.btn').on('click', function() {
      // animate content
    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
  });
  
    // on click show page after 1500ms
    $('.home').click(function() {
      setTimeout(function() {
        $('.home').addClass('fadeIn');
      }, 1500);
    });
    
    $('.projects_link').click(function() {
      setTimeout(function() {
        $('.projects').addClass('fadeIn');
      }, 1500);
    });
    
    $('.skills_link').click(function() {
      setTimeout(function() {
        $('.skills').addClass('fadeIn');
      }, 1500);
    });
    
    $('.about_link').click(function() {
      setTimeout(function() {
        $('.about').addClass('fadeIn');
      }, 1500);
    });
    
    $('.contact_link').click(function() {
      setTimeout(function() {
        $('.contact').addClass('fadeIn');
      }, 1500);
    });
  
  } else {
      // jQuery is not loaded
      alert("Doesn't Work");
  }
}

 


