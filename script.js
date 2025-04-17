function validacaoformulario() {

    //Início do cadastro:

    const Nome = document.getElementById('Nome').value;
    const Datadenascimento = parseFloat(document.getElementById('Datadenascimento').value);
    const Email = document.getElementById('Email').value;
    const Senha = document.getElementById('Senha').value;
    const Numerodetelefone = document.getElementById('Numerodetelefone').value;
    const Genero = document.getElementById('Genero').value;
    const CPF = parseFloat(document.getElementById('CPF').value);
    const CEP = parseFloat(document.getElementById('CEP').value);
    const Cartao = document.getElementById('cartao').value;

    //Informações profissionais:

    const Nomeempresarial = document.getElementById('Nomeempresarial').value;
    const CNPJ = document.getElementById('CNPJ').value;
    const Datadeiniciodasatividades = parseFloat(document.getElementById('Datadeiniciodasatividades').value);
    const Objetosocial = document.getElementById('Objetosocial').value;
    const Capitalsocial = document.getElementById('Capitalsocial').value;
    const Socios = document.getElementById('socios').value;

    //Informações do cartão:

    const Nomedocartao = document.getElementById('Nomedocartao').value;
    const Datadevalidade = parseFloat(document.getElementById('Datadevalidade').value);
    const Nomedotitular = document.getElementById('Nomedotitular').value;
    const CVV = parseFloat(document.getElementById('CVV').value);
    const Chip = document.getElementById('Chip').value;
    const Senhadocartao = document.getElementById('Senhadocartao').value;

    //Informações do Email:

    const Nomedoproprietario = document.getElementById('Nomedoproprietario').value;
    const EnderecodeEmail = document.getElementById('EnderecodeEmail').value;
    const Insiranovamenteasenha = document.getElementById('Insiranovamenteasenha').value;

    //Dados de Email de mensagens:

    const EnderecodeEmaildoremetente = document.getElementById('EnderecodeEmaildoremetente').value;
    const EnderecodeEmaildetodososdestinatarios = document.getElementById('EnderecodeEmaildetodososdestinatarios').value;
    const Linhadeassuntodamensagem = document.getElementById('Linhadeassuntodamensagem').value;
    const Dataehoraemquemensagemfoienviada = parseFloat(document.getElementById('Dataehoraemquemensagemfoienviada').value);
    const IDexclusivodamensagem = document.getElementById('IDexclusivodamensagem').value;

    //Dados de Email no processo de entrega:

    const EnderecodeEmaildoremetenteedodestinatario = document.getElementById('EnderecodeEmaildoremetenteedodestinatario').value;
    const EnvelopeSMTP = document.getElementById('EnvelopeSMTP').value;

}

    //Validação dos dados
    if (nome.value === "") {
        alert("Por favor, preencha seu nome");
        return;
    }

