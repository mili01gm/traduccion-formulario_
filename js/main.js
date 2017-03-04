var title = document.getElementById('form-signin-heading');
var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');
var remember = document.getElementsByTagName('span')[0];
var button = document.getElementsByClassName('btn')[0];

function translate(){
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.value = "Iniciar sesión";
}
translate();

button.addEventListener('click', function traduce(){
 document.getElementById('muestra').innerHTML =
                      "<h2>" + "Datos de formulario" + "</h2>"+"<br>" +
                      "El correo electrónico ingresado es:" +"<br>"+
                      email.value + "<br>" +
                      "La clave ingresada es:" + "<br>" +
                      password.value
});
