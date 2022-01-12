function primeiroNivelHank() {
    var pergunta = prompt("1- Se aproximar e ouvir o segredo \n 2- Ignorar e seguir em frente");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 2) {
        window.location.href = "hankParte2.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 1) {
        window.location.href = "gameoverHankParte1.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }