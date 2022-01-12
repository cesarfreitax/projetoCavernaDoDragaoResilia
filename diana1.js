function primeiroNivelDiana() {
    var pergunta = prompt("1- Diana se aproxima do sapo \n 2- Ignorar e seguir em frente");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 1) {
        window.location.href = "dianaParte2.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 2) {
        window.location.href = "gameoverDianaParte1.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }