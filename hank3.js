function terceiroNivelHank() {
    var pergunta = prompt("1- Continua adentrando a caverna mesmo nervoso \n 2- Decide voltar e buscar ajuda");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 2) {
        window.location.href = "hankGanhou.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 1) {
        window.location.href = "gameoverHankParte3.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }