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

var firebaseConfig = {
  apiKey: "AIzaSyBHxXM3egKldQVjZ4xuI9zTafRsiZux9Bk",
  authDomain: "probandofirebase-a9522.firebaseapp.com",
  projectId: "probandofirebase-a9522",
  storageBucket: "probandofirebase-a9522.appspot.com",
  messagingSenderId: "919979696763",
  appId: "1:919979696763:web:02441f407cbfc66e0938de",
  measurementId: "G-GV7D0P59P4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("messages");

// Formulario CORREO

document.getElementById("contacForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Obtener valores

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Guardando mensaje
  saveMessage(name, email, message);

  // Mostrar Alerta

  document.querySelector(".alertxd").style.display = "block";

  // Ocultar alerta

  setTimeout(function () {
    document.querySelector(".alertxd").style.display = "none";
  }, 3000);
}

// Funcion para obtener el valor de los forms

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Guardar mensaje

function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();

  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
