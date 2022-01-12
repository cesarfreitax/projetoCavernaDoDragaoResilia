function segundoNivelHank() {
    var pergunta = prompt("1- Atirar Dardos de Prata com o seu arco e flecha \n 2- Atirar Dardos de Fogo com o seu arco e flecha");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 1) {
        window.location.href = "hankParte3.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 2) {
        window.location.href = "gameoverHankParte2.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }