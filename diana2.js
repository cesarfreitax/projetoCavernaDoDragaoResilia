function segundoNivelDiana() {
    var pergunta = prompt("1- Lutar ao lado da guerreira mesmo estando em desvantagem \n 2- Evitar o confronto e tentar um caminho alternativo");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 1) {
        window.location.href = "dianaParte3.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 2) {
        window.location.href = "gameoverDianaParte2.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }