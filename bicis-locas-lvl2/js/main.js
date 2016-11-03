var boxes = document.getElementsByClassName("input-box");
var i;
var removeSpan = document.getElementsByTagName("span");
//Funcion que llama a las funciones de validacion
function validateForm(){
	while(removeSpan.length > 1){
		for(var k = 0; k<removeSpan.length-1 ; k++){
			removeSpan[k].parentNode.removeChild(removeSpan[k]);
		}	
	}
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
	var regexNombre = /^[A-Z][a-z]*$/;
	//Validacion
	if(!(regexNombre.test(nombre))){
		//alert("Campo nombre incorrecto");
		var t = document.createTextNode("La primer letra debe ser mayúscula");
		crearSpan(t, 0);
		return false;
	}
	return true;
}

function validarApellido(){
	var espacio = /^\s+$/;
	var apellido = document.getElementById("lastname").value;
	var regexNombre = /^[A-Z][a-z]*$/;
	//Validación
	if(!(regexNombre.test(apellido))){
		//alert("Campo apellido incorrecto");
		i = 1;
		var t = document.createTextNode("La primer letra debe ser mayúscula");
		crearSpan(t,i);
		return false;
	}
	return true;
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
	i = 3;
	//Validación
	if(pass.length <6){
		//alert("Campo contraseña incorrecto"); 
		var t = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
		crearSpan(t,i);
		return false;
	} else if(pass == "password"){
		var t = document.createTextNode("La contraseña no puede ser 'password'");
		crearSpan(t,i);
		return false;
	} else if(pass === "123456"){
		var t = document.createTextNode("La contraseña no puede ser '123456'");
		crearSpan(t,i);
		return false;
	} else if(pass === "098754"){
		var t = document.createTextNode("La contraseña no puede ser '098754'");
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
		var t = document.createTextNode("Campo lista vacío");
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

