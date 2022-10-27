var menu = document.querySelector('#menu');
var drawer = document.querySelector('nav');
var oscurecer = document.querySelector('.oscurecer');

menu.addEventListener('click', function (e) {
  /*Abrir menu*/
  drawer.classList.toggle('open');

  /* Oscurecer contenido al abrir el menu */
  oscurecer.style.display = 'block';

  /*Evitar que se haga scroll*/
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  e.stopPropagation();
});
oscurecer.addEventListener('click', function () {
  /* Cerrar menu */
  drawer.classList.remove('open');

  /* Aclarar contenido al cerrar el menu */
  oscurecer.style.display = 'none';

  /*Activar scroll*/
  document.getElementsByTagName("html")[0].style.overflow = "auto";
});


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}