# Programação de Funcionalidades

7.	Funcionalidades do Sistema (Telas)
Nesta seção são apresentadas as telas desenvolvidas para cada uma das funcionalidades do sistema. 

Cadastro de Usuário 

A tela de cadastro pode acessada através da tela inicial. Os usuário são armazenadas no LocalStorage com estruturas dados baseada em JSON. Um exemplo da tela é apresentada na Figura a seguir. 

![cadastro1](https://user-images.githubusercontent.com/85761080/139952216-7967c803-7387-4920-a171-a332c689372f.png)

Login do Usuário

Após o usuário efetuar o cadastro, ele será redirecionado para tela de login e poderá efetuar o login logo em seguida.

![login](https://user-images.githubusercontent.com/85761080/139953498-e6038386-0ab8-43e1-945a-b96f31215544.png)

function cadastrar(){
            
        
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
                }, 2000)

            }else{
                msgError.setAttribute('style','display: block');
                msgError.innerHTML = '*Preencha todos os campos*'
                msgSuccess.setAttribute('style','display: none')
                msgSuccess.innerHTML = '';
            }

        }
       
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
           window.location.href = 'http://127.0.0.1:5500/telaLogado.html'
        }, 2000)

        var token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
        localStorage.setItem('token',token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));
    }
}


<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
