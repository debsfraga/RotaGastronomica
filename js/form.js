//Obtém o botão do formulário
var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    //Captura o formulário
    var form = document.querySelector("#frmContato");

    //Verifica se o usuário preencheu e-mail ou telefone
    if(form.email.value==='' && form.telefone.value===''){
        return alert('Por favor, preencha um e-mail e/ou um telefone para que possa retornar o seu contato.');
    } else {
        //Monta o texto de retorno
        msgRetorno=form.nomeCompleto.value + ", sua mensagem já tá no nosso cardápio de prioridades! 😉 <br><br> Agradecemos o contato e vamos retornar em breve com uma resposta saborosa!"

        //Abre a div de retorno
        document.getElementById('formRetorno').style.display="block";
        //Efetua o retorno
        document.getElementById('textoRetorno').innerHTML=msgRetorno;
        //Fecha o formulário
        document.getElementById('formulario').style.display="none";
        return;
    }
    
});