/* -- Menu -- */

/* -- Login -- */
var usuario = document.querySelector('#usuarioLogin');
var labelUsuario = document.querySelector('#labelUsuarioLogin');
var validUser = false;

var senha = document.querySelector('#senhaLogin');
var labelSenha = document.querySelector('#labelSenhaLogin');
var validSenha = false;

var msgSuccess = document.querySelector('#msgSuccess');
var msgError = document.querySelector('#msgError');


/* Ver Senha */
var verSenha = document.querySelector('#verSenhaLogin');
verSenha.addEventListener('click',()=>{

    verSenha.classList.toggle('fa-eye-slash');

    if(senha.getAttribute('type') == 'password'){
        senha.setAttribute('type','text');
    }else{
        senha.setAttribute('type', 'password');
    }
})

/* Entrar */

function entrar(){

    var listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item)=>{
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.usuarioCad,
                senha: item.senhaCad
            }
        }

    })

    if(usuario.value != userValid.user || usuario.value == false && senha.value != userValid.senha || senha.value == false){

        usuario.setAttribute('style','border-color: red');
        labelUsuario.setAttribute('style', 'color: red');
        validUser = false;

        senha.setAttribute('style','border-color: red');
        labelSenha.setAttribute('style','color: red');
        validSenha = false;

        msgError.setAttribute('style','display: block');
        msgSuccess.setAttribute('style','display: none');

        usuario.focus();

    }else{
        msgSuccess.setAttribute('style','display: block');

        usuario.setAttribute('style','border-color: green');
        labelUsuario.setAttribute('style', 'color: green');
        validUser = true;

        senha.setAttribute('style','border-color: green');
        labelSenha.setAttribute('style','color: green');
        validSenha = true;

        msgError.setAttribute('style','display: none');

        setTimeout(()=>{
           window.location.href = 'http://127.0.0.1:5500/agenda.html';
        }, 2000)

        var token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token',token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));
    }
}
