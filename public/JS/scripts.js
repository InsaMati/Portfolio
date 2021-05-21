$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});

function DownLoadCV() {
  let botonCV = document.getElementById("btnCV");

  botonCV.addEventListener("click", function () {
    alert("CV no disponible");
  });
}

DownLoadCV();
