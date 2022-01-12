function primeiroNivelSheila() {
    var pergunta = prompt("1- Se esconder \n 2- Esperar e encarar");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 1) {
        window.location.href = "sheilaParte2.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 2) {
        window.location.href = "gameoverSheilaParte1.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }