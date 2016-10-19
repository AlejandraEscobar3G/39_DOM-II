/*Para validación de la contraseña: 
Minimum 8 and Maximum 10 characters at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character: */
var boxes = document.getElementsByClassName("input-box");
var i;
//Funcion que llama a las funciones de validacion
function validateForm(){
	validarNombre();
	validarApellido();
	validarCorreo();
	validarPassword();
	validarLista();

}

//Funciones de validación

function validarNombre(){
	var nombre = document.getElementById("name").value;
	var espacio = /^\s+$/;
	var regexNombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	//Validacion
	if(!(regexNombre.test(nombre)) || (espacio.test(nombre))){
		//alert("Campo nombre incorrecto");
		i = 0;
		var t = document.createTextNode("Campo nombre incorrecto");
		crearSpan(t, i);
		return false;
	}
	return true;
}

function validarApellido(){
	var espacio = /^\s+$/;
	var apellido = document.getElementById("lastname").value;
	var regexNombre = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
	//Validación
	if(!(regexNombre.test(apellido)) || (espacio.test(apellido))){
		//alert("Campo apellido incorrecto");
		i = 1;
		var t = document.createTextNode("Campo apellido incorrecto");
		crearSpan(t,i);
		return false;
	}
}

function validarCorreo(){
	var correo = document.getElementById("input-email").value;
	var regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	//Validación
	if(!(regexEmail.test(correo))){
		//alert("Campo correo incorrecto");
		i = 2;
		var t = document.createTextNode("Campo email incorrecto");
		crearSpan(t,i);
		return false;
	}
	console.log("Correcto");
	return true;
}

function validarPassword(){
	var pass = document.getElementById("input-password").value;
	var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/;
	//Validación
	if(!(regexPassword.test(pass))){
		//alert("Campo contraseña incorrecto");
		i = 3; 
		var t = document.createTextNode("Campo contraseña incorrecto");
		crearSpan(t,i);
		return false;
	}
	console.log("Bien");
	return true;
}

function validarLista(){
	indice = document.querySelectorAll("SELECT")[0].selectedIndex;
	if( indice == null || indice == 0 ) {
  		//alert("Campo lista vacío");
  		i = 4;
		var t = document.createTextNode("Campo lista incorrecto");
		crearSpan(t,i);
  		return false;
	}
	console.log("Campo lista lleno");
	return true;
}

function crearSpan(t, i){
	var Span = document.createElement('span');
	Span.appendChild(t);
	boxes[i].appendChild(Span);
}