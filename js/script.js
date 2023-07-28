
$(document).ready(function() {
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('_active');
   })
})

$(document).ready(function() {
   $('.header__close,.menu__link,section').click(function(event){
      $('.header__burger,.header__menu').removeClass('_active');
   })
})

