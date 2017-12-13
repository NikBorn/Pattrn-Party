
$('.main-content-container').on('click', '.accordion', function () {
  $(this).toggleClass("active");
  $(this).siblings('.accordion').removeClass('active');
  var panel = this.nextElementSibling;
  $(panel).toggleClass('display-none');
  $(panel).siblings('.panel').addClass('display-none');
});



