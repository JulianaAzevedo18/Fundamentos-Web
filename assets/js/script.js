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

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Seus dados foram enviados com sucesso!!!')
    }
    else{
        alert('Dados inválidos. Faça o preenchimento novamente.')
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal(){
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}