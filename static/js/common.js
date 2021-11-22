$(document).ready(function () {
  $('.header-area .main-nav .nav li a').click(function (e) {
    e.stopPropagation()
    e.preventDefault()
    $('html,body').animate({scrollTop:$($(this).attr("href")).offset().top + "px"}, 520)
  })
})