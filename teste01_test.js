
Feature('login');

Scenario('teste login', async (I) => {
    I.login();
    //ACESSO AO CADASTRO DE RESPONSÁVEL
    I.click('Matriculas');
    I.click('Nova Matrícula');
    I.waitForVisible('//select[@name="dtResponsavel_length"]', 10);
    I.click('Novo Responsável');
    I.waitForText('Responsável 01', 10);
    //PREENCHE O CAMPO NOME
    let primeiroNome = await I.gerarPalavra(8);
    let segundoNome = await I.gerarPalavra(10);
    var nomeCompleto = primeiroNome + ' ' + segundoNome;
    I.fillField('//input[@name="nomeresp1"]', nomeCompleto);
    //PREENCHE O CAMPO DATA
    I.executeScript(function() {
        var ano = Math.floor((Math.random() * 55) + 1950);
        var dia = Math.floor((Math.random() * 28) + 1).toString();
        var mes = Math.floor((Math.random() * 11) + 1).toString();
        var diaF = (dia.length == 1) ? '0'+dia : dia;
        var mesF = (mes.length == 1) ? '0'+mes : mes;
        var dataNascimento = ano + '-' + mesF + '-' + diaF;
        document.getElementById("datanascimentoresp1").value = dataNascimento;
    });

        // now we are inside browser context
        //$('#datanascimentoresp1').datetimepicker();
        //$('#datanascimentoresp1').datetimepicker('setDate', 'today');
        //$('#datanascimentoresp1').datetimepicker('setDate', new Date());
    /*I.buscaDadosPFresp();


    var Pessoa = new Object();
    Pessoa ['nome'] =  I.grabValueFrom('Nome');
    console.log(Pessoa['nome']);
   // let hint = await I.grabAttributeFrom('#tooltip', 'title');*/
   let CPF = await I.gerarCpf();
   I.fillField('//input[@name="cpfresp1"]', CPF);
   //SELECIONA OPÇÃO
   I.selecionaAleatorio(6, 1, '//select[@name="escolaridaderesp1"]');

   var listOpcoesSexo = ['F','M'];
   I.selectOption('//select[@name="sexoresp1"]', listOpcoesSexo[0]);

   

    I.wait(30);
});
