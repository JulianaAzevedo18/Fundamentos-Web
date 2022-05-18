/*
Case Sensitive: reconhece letras maiusculas e minusculas

por Tag -> getElementTagName()
por Id -> getElementById()
por Nome -> getElementByName()
por classe -> getElementsByClassName()
por seletor -> querySelector() - mais utilizado
 */

/*A linguagem JavaScript é orientado a funções (function)*/

let nome = window.document.getElementById('nome')
let email = window.document.getElementById('email')
let assunto = window.document.getElementById('assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

/*Essa função irá validar se o nome tem pelo menos 3 letras*/
function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome ok'
        txtNome.style.color = 'green'
        nomeOk = true 
    }
}

/*Essa função irá validar se o email possui o "@" e o "."*/
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
    
}

/*Essa função irá validar se o assunto tem até 100 caracteres*/
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length>100)
    {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres...'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        
    }
    assuntoOk = true
}

/*Essa função irá validar se todos os campos foram preenchidos corretamente antes de enviar os dados*/
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Seus dados foram enviados com sucesso!!!')
    }
    else{
        alert('Dados inválidos. Faça o preenchimento novamente.')
    }
}

/*Essa função faz com que o mapa aumente seu tamanho quando o mouse passar sobre ele*/
function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

/*Essa função faz com que o mapa volte ao seu tamanho normal quando o mouse não estiver mais sobre ele*/
function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}