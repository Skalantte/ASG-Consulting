let registros=[];

function agregarRegistro(){
    function Usuario(username,correo,contrasena){
     this.username=username;
     this.correo=correo;
     this.contrasena=contrasena;
    }
    var usernameForm = document.getElementById("username").value;
    var correoForm = document.getElementById("correo").value;
    var contrasenaForm = document.getElementById("contrasena").value;
    let nuevoUsuario = new Usuario(usernameForm,correoForm,contrasenaForm);
    registros.push(nuevoUsuario);
}


function obtenerUsername(arreglo){
    let filtroUserName = arreglo.filter((usuario)=>{
        if (/\d/.test(usuario.username)){
          return usuario;
        }
  
        });
        console.log(filtroUserName);
        return filtroUserName;
}

function filtrarCorreo(arreglo){
    let filtroEmail = arreglo.filter((usuario)=>{
        if(usuario.correo.includes("hotmail.com")){
          return usuario;
        }
      });
      console.log(filtroEmail);
      return filtroEmail;
}


module.exports.registros=registros;
module.exports.filtrarCorreo=filtrarCorreo;
module.exports.obtenerUsername=obtenerUsername;
module.exports.agregarRegistro=agregarRegistro;

