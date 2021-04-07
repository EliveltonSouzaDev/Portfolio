// Faz o scroll suave da página com Jquery
$(document).ready(function () {

  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {

      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })

  })

})


// faz o menu oculto/toggle na versão mobile
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menuicon").addEventListener("click", function (e) {
    e.preventDefault();
    var navi = document.querySelector(".section-links");
    var navi_ativo = navi.dataset.ativo;
    navi.setAttribute("data-ativo", navi_ativo == "true" ? "false" : "true");
  });
});