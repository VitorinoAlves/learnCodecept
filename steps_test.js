'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    listUsuario : [
      {usuario:'c.alves',senha:'123456'}],

    listOpcoesSexo : ['F','M'],
    
      login : function(){
        this.amOnPage('/login2');
        this.waitForText('GESC', 10);
        this.see('GESC');
        //name
        this.appendField('nomeusuario', this.listUsuario[0].usuario);
        // XPath
        this.appendField('//form/input[@name="password"]', this.listUsuario[0].senha);
        this.click('Entrar');
        this.waitForText('Associação de Promoção a Menina - APAM', 10);
        this.wait(5);
      },

      buscaDadosPFresp:function(){
        this.openNewTab();
        this.amOnPage('https://www.invertexto.com/gerador-de-pessoas');
        this.waitForVisible('//img[@src="/img/logo-pt.png"]');
        //this.checkOption('//input[@id="pontuacao_nao"]');
        // var aleatorio = this.randomiza(18,80);
        //this.selectOption('//select[@id="idade"]', ''+aleatorio+'');
        //this.selecionaAleatorio('//select[@id="idade"]');
        //this.selectOption('//select[@id="idade"]', '63');
        this.click('//button[@type="submit"]');
        this.wait(10);
        
      },

      async selecionaAleatorio(nCombo){
        let aleatorio = await this.randomiza(18,80);
        this.wait(1);
        this.selectOption(nCombo, ''+aleatorio+'');
        //this.wait(10);
      },

      async gerarPalavra(caracteres) {
        var text = "";
        var consoante = "BCDFGHJKLMNPQRSTVWXZ";
        var vogal = "AEIOUY";
      
        for (var i = 0; i < caracteres; i++){ 
          if (i%2 == 0 ) {
            text += consoante.charAt(Math.floor(Math.random() * consoante.length));  
          } else{
            text += vogal.charAt(Math.floor(Math.random() * vogal.length));
          }
        }
        return text;
      },

      randomiza(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    

      gerarDataNascimento() {
        var dia = this.randomiza(1,28);
        var mes = this.randomiza(1,12);
        var ano = this.randomiza(1970,2005);
        var dataNascimento = ano + '-' + mes + '-' + dia;
      
        return dataNascimento;
      },


      async gerarCpf(){
        var n = 9;
        var n1 = Math.round(Math.random()*n);
        var n2 = Math.round(Math.random()*n);
        var n3 = Math.round(Math.random()*n);
        var n4 = Math.round(Math.random()*n);
        var n5 = Math.round(Math.random()*n);
        var n6 = Math.round(Math.random()*n);
        var n7 = Math.round(Math.random()*n);
        var n8 = Math.round(Math.random()*n);
        var n9 = Math.round(Math.random()*n);
        var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
        d1 = 11 - ( d1 % 11) ;
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
        d2 = 11 - ( d2 % 11);
        if (d2>=10) d2 = 0;
        let retorno = '';
        retorno = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
        return retorno;
      },

      selecionaAleatorio:function(valueMax, valueMin, idCampo){
        var numSelecionado =  '' + this.randomiza(valueMin, valueMax) + '';
        this.selectOption(idCampo, numSelecionado);
      }

  });
}
