
/*let registros = [
//    { correo: "aaa", contrasena: "aaa" },
    { correo: "bbb", contrasena: "bbb" },
    { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
    { correo: "carlos@gmail.com", contrasena: "SecurePassword123" }
];*/

let registros = [
   { correo: "juan@gmail.com", contrasena: "SecurePassword123" },
];
//let registros =[];

function login(){
    var InCorreo = document.getElementById("username/correo").value;
    var InContrasena = document.getElementById("contrasena").value;
    var InCaptcha = document.getElementById("captcha").value;

    if (validarCAPTCHA(InCaptcha)){
        var rsCorreo = registros.find( user => user.correo === InCorreo );
        if (!(typeof rsCorreo === 'undefined')){
            if (rsCorreo.contrasena===InContrasena){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}


function agregarRegistro(){
    function usuario(correo,contrasena){
        this.correo = correo;
        this.contrasena = contrasena;
    }

    var corHtml = document.getElementById("correo").value;
    var contHtml = document.getElementById("contrasena").value;

    let newusuario = new usuario(corHtml,contHtml);
    registros.push (newusuario);
};

function validarCAPTCHA(valor) {
    var cap=valor.replace(/[^a-zA-Z ]/g, "");
    if(cap.toLowerCase() == 'budapest'){
        return true;
    }else{
        return false;
    }
};


module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;


