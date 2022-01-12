function terceiroNivelDiana() {
    var pergunta = prompt("1- Convencer a guerreira que a melhor opção é retornar para a saída da caverna \n 2- Seguir com a guerreira até a origem das luzes coloridas");
        
    while (pergunta != 2 || pergunta != 1) {
    
    if (pergunta == 2) {
        window.location.href = "dianaGanhou.html";
        
    /*para finalizar e direcionar para o html acima caso escolha 1 ---> */ 
       break;
      } else if (pergunta == 1) {
        window.location.href = "gameoverDianaParte3.html";
        
     /*para finalizar e direcionar para o html acima caso escolha 2 ---> */   
       break;
      } 
    }
    }