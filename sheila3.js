function terceiroNivelSheila() {
    var pergunta = prompt("1- Atacar o monstro por trás com mais bombas \n 2- Aproveitar para escapar e sair da caverna");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 2) {
        window.location.href = "sheilaGanhou.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 1) {
        window.location.href = "gameoverSheilaParte3.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }