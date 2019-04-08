function aplyValidations(){
  event.preventDefault();
  validarNombre();
  validarApellido();
  validarDocumento();
  validarFechaN();
  validarDireccion();
  validarTelefono();  
  validarRadioButton(); 
  validarSelectCiudad();  
  validarCorreo();
 
  
}


function validarNombre(){
  var validarNombre = document.getElementById('nombre').value;

  if (validarNombre==""){
      alert("Campo nombre vacio");
      return false;
    }
}



function validarApellido(){
  var apellido = document.getElementById('apellido').value;

  if (apellido ==""){
    alert("Campo apellido vacio");
    return false;
  }
}

function validarDocumento(){
  var validarDocumento = document.getElementById('dni').value;

  if (validarDocumento==0){
      alert("Campo Documento de Identificación vacio");
      return false;
    }
}

function validarFechaN(){
  var validarFechaN = document.getElementById('fechanacimiento').value;

  if (validarFechaN ==""){
      alert("Campo Fecha Nacimiento vacio");
      return false;
    }
}


function validarDireccion(){
  var validarDireccion = document.getElementById('direccionpersona').value;

  if (validarDireccion ==""){
      alert("Campo Dirección vacio");
      return false;
    }
}


function validarTelefono(){
  var validarTelefono = document.getElementById('telefono').value;

  if (validarTelefono ==""){
      alert("Campo Telefono vacio");
      return false;
    }
}

function validarSelectCiudad(){
var pais = document.getElementById('pais').value;
  if (pais=="0") {
      alert("Faltó seleccionar una ciudad");
      return false;
  }
}

function validarCorreo(valor){
  var correo = document.getElementById('correo').value;
  var expresionRegular = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (expresionRegular.test(valor)) {
    alert("Campo correo vacio");
    return false;
  }
}

function validarRadioButton(){
  var  hombre = document.getElementById('hombre').checked;
  var mujer = document.getElementById('mujer').checked;
  var otro = document.getElementById('otro').checked;
 
  if ((hombre==false) && (mujer==false) && (otro==false)) {
    alert("Seleccion su genero");
  }
  return false;
}
