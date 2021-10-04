# 4. Projeto de Interface 

 O projeto de interface foi concebido com o intuito do cliente agendar o mais rápido possível, porém, ciente de todos os detalhes do procedimento, assim evitando cancelamentos de horários.
 
## Fluxo do Usuário 

O processo de fluxo de usuário, bem como a completa navegação entre as telas está disponível no MarvelApp, clicando [Aqui](https://marvelapp.com/prototype/2bf2261g)

## Wireframes
Segue abaixo descrição detalhada de cada tela e sua função no sistema.
	
 ### Tela Home - Page
 
 ![image](https://user-images.githubusercontent.com/91165583/135900997-b38cb4a8-9e51-4b8b-9f68-22847586281e.png)
 
 Na tela Home-Page, o usuário tem a visualização dos seguintes itens:

##### Saiba mais sobre os procedimentos:  
Área onde o dono da clínica escolhe mostrar mais informações (pequeno texto explicativo e vídeo) sobre determinado procedimento. Para facilitar o agendamento caso o usuário se interesse pelo procedimento, é possível agendar clicando no botão “Quero Agendar”, logo abaixo da parte textual do procedimento.

##### Botão cadastrar: 

Ao clicar nesse botão, o usuário é redirecionado para uma tela de cadastro, conforme modelo abaixo: 

![image](https://user-images.githubusercontent.com/91165583/135901395-3db7b057-5bf2-4ada-9922-16c73bb69eaf.png)

Após cadastro, usuário é redirecionado para a tela “Home-Page”

##### Botão entrar: 
Ao clicar nesse botão, o usuário é redirecionado para a tela de “login/entrar”, conforme modelo abaixo:

 ![image](https://user-images.githubusercontent.com/91165583/135901705-2a1fe375-c1eb-4545-913d-7a8ecde16807.png)
 
 ##### Menu Procedimento: 
 Para o usuário consultar os procedimentos disponíveis para serem realizados, foi colocado uma    lista dropdown, que ao clicar, o usuário pode selecionar um procedimento e acessar mais informações sobre ele.
 
![image](https://user-images.githubusercontent.com/91165583/135901823-6dd9cbcd-c94f-4a5d-8a0f-5ceaf72e07a3.png)

 ## Tela – Procedimento:

Nessa tela o usuário tem acesso a um vídeo explicativo e a um pequeno texto sobre o procedimento selecionado. Segue descrição de alguns itens dessa tela.

##### Botão Agendar:

Botão para que o usuário vá para a próxima etapa do agendamento

##### Lista Procedimentos:

Assim como na tela home-page, o usuário tem acesso a um menu dropdown que permite o acesso a outros procedimentos. Ao selecionar outro procedimento por essa tela, aparece outro vídeo e texto relativo a escolha

##### Logo + Nome da Clínica:

Ao clicar nessa figura, o usuário retorna a tela home-page.

![image](https://user-images.githubusercontent.com/91165583/135902228-0ca9ae67-db0c-4904-929b-a91383150493.png)

## Tela - Tempo Procedimento:

 Nessa tela, aparece uma mensagem de aviso sobre o tempo do procedimento selecionado. Caso o usuário concorde com o tempo, ele clica no botão “Concordo” e é direcionado a próxima etapa do agendamento. Caso não concorde, ele é direcionado a tela home-page.

![image](https://user-images.githubusercontent.com/91165583/135902273-da00d6dc-9f03-4fb8-b4c0-3388d6315819.png)

## Tela - Questionário Clinico

Após concordar com o tempo do procedimento, o usuário é direcionado a página de “Questionário Clinico”, onde serão respondidas perguntas que avaliarão se o cliente tem condições ou não de realizar aquele procedimento.

![image](https://user-images.githubusercontent.com/91165583/135902317-93998c83-fd13-4e6b-8a6b-ec29e202e784.png)

## Tela - Questionário OK

Caso o usuário esteja apto para realizar o procedimento, aparece o botão “AQUI”, que permite que o usuário dê continuidade ao agendamento.

![image](https://user-images.githubusercontent.com/91165583/135902354-f7a925a6-9eed-4723-8c05-8877f4d32c67.png)

## Tela – Questionário Não-OK

Caso o usuário não esteja apto a realizar o procedimento, aparece uma mensagem orientando que o mesmo entre em contato com clínica, clicando no link no canto inferior da tela

![image](https://user-images.githubusercontent.com/91165583/135902409-7f763ace-bb53-4365-a866-d98842c47a97.png)


## Tela - Escolha Dia

Nessa tela, o usuário já consegue selecionar um dia disponível para realizar o procedimento.

![image](https://user-images.githubusercontent.com/91165583/135902466-5b779483-1831-4a08-be19-728813b09296.png)

## Tela - Horários disponíveis

Após selecionar o dia, um menu dropdown expõe os horários disponíveis. Ao lado de cada horário há um botão verde que permite o usuário escolher aquele horário.

![image](https://user-images.githubusercontent.com/91165583/135902522-3b41a892-e088-4a95-b15f-2e445bcab72f.png)

## Tela - Finalizar agendamento

Após selecionar o horário, o usuário pode finalizar o agendamento clicando no botão “Finalizar agendamento”

![image](https://user-images.githubusercontent.com/91165583/135902544-b1419c7b-2027-4602-8816-124a5ed1c054.png)

## Tela - Agendamento Confirmado

![image](https://user-images.githubusercontent.com/91165583/135904301-646f8be1-5076-421e-bcad-83557f5dade1.png)


Após o agendamento ter sido confirmado, o usuário é redirecionado para uma tela com o resumo do agendamento, contendo os seguintes tópicos. 

#### Procedimento: 
Apresenta o nome do procedimento agendado
#### Horário: 
Mostra o horário agendado
#### Data: 
Mostra a data agendada

#### Local: 
Local da clínica, com o nome da Rua, Bairro e Cidade.

Caso seja do interesse do usuário, é possível mandar uma mensagem para o whatsapp da clínica como uma segunda forma de confirmação. Basta o usuário clicar no botão “Confirmar também pelo whastsapp”, que ele será redirecionado para a página externa pela API de mensagens automáticas do Whatsapp.

![image](https://user-images.githubusercontent.com/91165583/135904479-05b64d24-c76e-45a4-8c06-4fa1492b6c45.png)



