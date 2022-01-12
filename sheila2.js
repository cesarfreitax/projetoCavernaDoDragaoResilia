function segundoNivelSheila() {
    var pergunta = prompt("1- Jogar explosivos no canto para dispersar a atenção do monstro e fugir \n 2- Jogar explosivos na cabeça do monstro para deixá-lo sem visão");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 2) {
        window.location.href = "sheilaParte3.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 1) {
        window.location.href = "gameoverSheilaParte2.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }