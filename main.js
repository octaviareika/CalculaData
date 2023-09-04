var formulario = document.querySelector(".formulario");
var botaoEnviar = document.querySelector(".envio");
var campo = document.querySelectorAll(".campo");
var mensagemErro = document.querySelector(".mensagem-erro");

formulario.addEventListener("submit", (evento)=> {

    evento.preventDefault();


    const listas = {
        ano: evento.target.elements['Ano'].value, // valor que ta no campo
        mes: evento.target.elements['Mes'].value,
        dia:  evento.target.elements['Dia'].value,
    }
  

    //||
    
    if (!verificaCampo(listas.ano) || !verificaCampo(listas.mes) || !verificaCampo(listas.dia)){
        return;
    }

    else {

        mensagemErro.textContent = "";
        
        var campoAno = document.querySelector('.anos');
        var campoMeses = document.querySelector('.meses');
        var campoDias = document.querySelector('.dias');

        

        var dataAtual = new Date();

        var dataAtualAno = dataAtual.getUTCFullYear();
        var dataAtualMes = dataAtual.getUTCMonth();
        var dataAtualDia = dataAtual.getUTCDate();


        if ((parseInt(listas.ano) > dataAtualAno)){
            mensagemErro.textContent = "Ano válido, por favor";
            formulario.reset();
            return;
        }

        if (parseInt(listas.mes) > 12 || parseInt(listas.mes) < 1){
            mensagemErro.textContent = "Preencha um mês válido";
            formulario.reset();
            return;
        }

        if (parseInt(listas.dia) < 1 || parseInt(listas.dia) > 31){
            mensagemErro.textContent = "Preencha um dia válido";
            formulario.reset();
            return; 
        }
        
        campoAno.textContent = dataAtualAno - parseInt(listas.ano);
        campoMeses.textContent = dataAtualMes - parseInt(listas.mes);
        campoDias.textContent = (31 + parseInt(listas.dia)) - dataAtualDia;


        if (parseInt(listas.mes) > dataAtualMes){
            campoMeses.textContent = parseInt(listas.mes) - dataAtualMes - 1;
        }

        if (parseInt(listas.dia) > dataAtualDia){ // se o dia que a gente digita for maior que o dia atual
            campoDias.textContent = (31 + parseInt(listas.dia)) - dataAtualDia;
            if (parseInt(listas.mes) > dataAtualMes){
                campoMeses.textContent = parseInt(listas.mes) - dataAtualMes - 1;
            }
            else {
                campoMeses.textContent = dataAtualMes - parseInt(listas.mes);
            }
            
        }


    }

    formulario.reset(); 

});


function verificaCampo(campo){


    var mensagem = 'Preencha todos os campos.';



    if (campo.length == 0){
       mensagemErro.textContent= mensagem;
        return false;
    }

    mensagemErro.textContent == "";
    return true;

    
}



