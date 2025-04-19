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

//Leitura dos dados do início do cadastro

let Nome = Nome;
let Datadenascimento = Datadenascimento;
let Email = Email;
let Senha = Senha;
let Numerodetelefone = Numerodetelefone;
let Genero = Genero;
let CPF = CPF;
let CEP = CEP;
let Cartao = Cartao;

//Leitura dos dados das informações profissionais

let Nomeempresarial = Nomeempresarial;
let CNPJ = CNPJ;
let Datadeiniciodasatividades = Datadeiniciodasatividades;
let Objetosocial = Objetosocial;
let Capitalsocial = Capitalsocial;
let Socios = Socios;

//Leitura dos dados das informações do cartão

let Nomedocartao = Nomedocartao;
let Datadevalidade = Datadevalidade;
let Nomedotitular = Nomedotitular;
let CVV = CVV;
let Chip = Chip;
let Senhadocartao = Senhadocartao;

//Leitura dos dados do Email

let Nomedoproprietario = Nomedoproprietario;
let EnderecodeEmail = EnderecodeEmail;
let Insiranovamenteasenha = Insiranovamenteasenha;






//Validação dos dados do início do cadastro
if (Nome.value === "") {
    alert("Por favor, preencha seu nome");
    return;
}
if (Datadenascimento.value === "") {
    alert("Por favor, preencha sua data de nascimento");
    return;
}
if (Email.value === "") {
    alert("Por favor, preencha seu Email");
    return;
}
if (Senha.value === "") {
    alert("Por favor, coloque sua senha");
    return;
}
if (Numerodetelefone.value === "") {
    alert("Por favor, coloque seu número de telefone");
    return;
}
if (Genero.value === "") {
    alert("Por favor, coloque seu gênero");
    return;
}
if (CPF.value === "") {
    alert("Por favor, preencha seu CPF");
    return;
}
if (CEP.value === "") {
    alert("Por favor, preencha seu CEP");
    return;
}
if (Cartao.value === "") {
    alert("Por favor, coloque seu cartão");
    return;
}


