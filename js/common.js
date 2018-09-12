$(document).ready(function() {
$(".mail-btn").on("click touchstart", function () {
    $(this).addClass("fly");
    that = this
    setTimeout(function() {
        $(that).removeClass("fly");
    }, 2400)
});

  $(".menu-small__burger_menu").on('click',function(){
    $(this).find(".menu-small__burger_menu-hambergerIcon").toggleClass("open");
  });
});
var btn = document.getElementById('show');
var nav = document.getElementById('nav');

btn.addEventListener('click', function() {
    nav.classList.toggle('active');
});

