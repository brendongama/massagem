window.onload = function() {

    if (confirm('Eae vidona, esta se sentindo com o corpo cansado ?')) {        
        if (confirm('Quer uma massagem do seu morenudo gostosão ?')) {
            if (confirm('Posso passar na sua casa assim que eu sair do serviço para te levar ali em um lugar maior bom ?')) {
                if (confirm('Confirmado então, passo ai, e vou levar um creminho para te fazer uma massagem topzera')) {
                    var clicou = this.document.getElementById('link');
                    clicou.click();
                  } else {
                    this.alert("Ué, tu quer mais não ? Uma massagem gostosinha ?");
                  }
              } else {
                this.alert("Então me manda uma msg com o horario pelo whats lindona");
              }
          } else {
            this.alert("ahh pensei que queria uma massagem minha, mas se quiser mudar de idéia é só recarregar a pagina e voltar nas perguntas em");
          }
      } else {
        this.alert("ahh pensei que estava, ja ia propor uma massagem para você, mas se quiser mudar de idéia é só recarregar a pagina e voltar nas perguntas em");
      }
};