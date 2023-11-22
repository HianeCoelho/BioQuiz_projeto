let quest = 0;
let num = 0;

function correct() {
    quest += 1;
    console.log('Value of quest: ' + quest);
}

var g_iCount = 30;

function contagem(){
    var prg = document.getElementById('progresso-da-barra');
    var mostraContagem = document.getElementById('mostracontagem');

    if(g_iCount >= 1){
        mostraContagem.innerText = g_iCount;
    
        var tempo_restante = (g_iCount / 30) * 100;
        
        prg.style.width = tempo_restante + '%';

        if(g_iCount <= 20 && g_iCount > 10){
            prg.style.backgroundColor = "#f8ca3f"
        }
        else if(g_iCount <= 10){
            prg.style.backgroundColor = "#d75151"
        }

        g_iCount--;
    
        setTimeout(contagem, 1000);
    }
    else{
        window.location.href = '#.html';  // colocar a página de explicação da resposta aqui 
    }
}
