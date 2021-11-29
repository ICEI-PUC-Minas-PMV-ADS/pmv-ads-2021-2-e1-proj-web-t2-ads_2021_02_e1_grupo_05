

/*Validação*/
        var nome = document.querySelector('#nome');
        var labelNome = document.querySelector('#labelNome');
        var validNome = false;

        var usuario = document.querySelector('#usuario')
        var labelUsuário = document.querySelector('#labelUser');
        var validUsuario = false;

        var senha = document.querySelector('#senha');
        var labelSenha = document.querySelector('#labelSenha');
        var validSenha = false;

        var confirmarSenha = document.querySelector('#confirmSenha')
        var labelConfirmSenha = document.querySelector('#labelConfirmSenha');
        var validConfirmSenha = false;

        /*Nome */
        nome.addEventListener('keyup',function(){
            if(nome.value.length <= 2){
            labelNome.setAttribute('style', 'color: red');
            labelNome.innerHTML = '<h6>Nome *Insira no mínimo 3 carateres</h6>';
            nome.setAttribute('style', 'border-color: red');
            validNome = false;
        }else{
            labelNome.setAttribute('style', 'color: green');
            labelNome.innerHTML = 'Nome';
            nome.setAttribute('style', 'border-color: green')
            validNome = true;
        }
        })
        /*Usuario*/
        usuario.addEventListener('keyup', ()=>{
            if(usuario.value.length <= 4){
                labelUsuário.setAttribute('style', 'color: red');
                labelUsuário.innerHTML = '<h6>Usuário *Insira no mínimo 4 caracteres</h6>';
                usuario.setAttribute('style', 'border-color: red');
                validUsuario = false;
            }else{
                labelUsuário.setAttribute('style', 'color: green');
                labelUsuário.innerHTML = 'Usuário';
                usuario.setAttribute('style', 'border-color: green');
                validUsuario = true;
            }
        })
        /*Senha*/
        senha.addEventListener('keyup', ()=>{
            if(senha.value.length <= 5 || senha.value.length == ''){
            labelSenha.setAttribute('style', 'color: red');
            labelSenha.innerHTML = '<h6>Senha *Insira no mínimo 6 carateres</h6>';
            some.setAttribute('style', 'border-color: red');
            validSenha = false;
            }else{
                labelSenha.setAttribute('style', 'color: green');
                labelSenha.innerHTML = 'Senha';
                senha.setAttribute('style', 'border-color: green');
                validSenha = true;
            }
           
        })
        /*Confirmar Senha*/
        confirmarSenha.addEventListener('keyup', ()=>{
            if(confirmarSenha.value.length != senha.value.length){
            labelConfirmSenha.setAttribute('style', 'color: red');
            labelConfirmSenha.innerHTML = '<h6>Senha *Senhas diferentes</h6>';
            some.setAttribute('style', 'border-color: red');
            validConfirmSenha = false;
            }else{
            labelConfirmSenha.setAttribute('style', 'color: green');
            labelConfirmSenha.innerHTML = 'Confirmar Senha';
            senha.setAttribute('style', 'border-color: green');
            validConfirmSenha = true;
            }
           
        })
        
        /*Visualizar Senha*/
        const btnEyeSenha = document.querySelector('#verSenha');

        btnEyeSenha.addEventListener('click', function mostrarSenha(){
            btnEyeSenha.classList.toggle('fa-eye-slash');
            let senha = document.getElementById('senha');

            if(senha.getAttribute('type') == 'password' ){
                senha.setAttribute('type', 'text');
            }else{
                senha.setAttribute('type', 'password');
            }
        })

        const btnEyeConfirmSenha = document.querySelector('#verConfirmSenha');

        btnEyeConfirmSenha.addEventListener('click', function mostrarSenha(){
            btnEyeConfirmSenha.classList.toggle('fa-eye-slash');
            let confirmarSenha = document.getElementById('confirmSenha');

            if(confirmarSenha.getAttribute('type') == 'password' ){
                confirmarSenha.setAttribute('type', 'text');
            }else{
                confirmarSenha.setAttribute('type', 'password');
            }
        })

        /*Cadastrar*/
        var msgSuccess = document.querySelector('#msgSuccess');
        var msgError = document.querySelector('#msgError');

        function cadastrar(){
            
            /*Validar usuario*/

            if(validNome && validUsuario && validSenha && validConfirmSenha){
                
                let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]'); 

                listaUser.push(
                    {
                        nomeCad: nome.value,
                        usuarioCad: usuario.value,
                        senhaCad: senha.value
                    }
                )

                localStorage.setItem('listaUser', JSON.stringify(listaUser));

                msgSuccess.setAttribute('style','display: block');
                msgSuccess.innerHTML = 'Usuário adastrado com sucesso!';
                msgError.setAttribute('style','display: none')
                msgError.innerHTML = '';
                    
                setTimeout(()=>{
                    window.location.href = 'http://127.0.0.1:5500/login.html';
                }, 2000);

            }else{
                msgError.setAttribute('style','display: block');
                msgError.innerHTML = '*Preencha todos os campos*'
                msgSuccess.setAttribute('style','display: none')
                msgSuccess.innerHTML = '';
            }

        }
        

