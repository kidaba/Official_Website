$(document).ready(function () {
    
/*******Toggle navigation********/

   $('.toggle-icon').click(function (e) {
   e.preventDefault();
   $('.nav-side').toggleClass('nav-open');
    $('.title').toggleClass('opaque');
});

$('.list').click(function () {
   $('.nav-side').toggleClass('nav-open');
});
 

/*******Smooth scroll********/

     $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 2000);
            return false;
          }
        }
      });
    });
    
}); //Ready function