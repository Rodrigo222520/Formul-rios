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

//Leitura dos dados do início do cadastro:

let Nome = Nome;
let Datadenascimento = Datadenascimento;
let Email = Email;
let Senha = Senha;
let Numerodetelefone = Numerodetelefone;
let Genero = Genero;
let CPF = CPF;
let CEP = CEP;
let Cartao = Cartao;

//Leitura dos dados das informações profissionais:

let Nomeempresarial = Nomeempresarial;
let CNPJ = CNPJ;
let Datadeiniciodasatividades = Datadeiniciodasatividades;
let Objetosocial = Objetosocial;
let Capitalsocial = Capitalsocial;
let Socios = Socios;

//Leitura dos dados das informações do cartão:

let Nomedocartao = Nomedocartao;
let Datadevalidade = Datadevalidade;
let Nomedotitular = Nomedotitular;
let CVV = CVV;
let Chip = Chip;
let Senhadocartao = Senhadocartao;

//Leitura dos dados do Email:

let Nomedoproprietario = Nomedoproprietario;
let EnderecodeEmail = EnderecodeEmail;
let Insiranovamenteasenha = Insiranovamenteasenha;

//Leitura dos dados de Email de mensagens:

let EnderecodeEmaildoremetente = EnderecodeEmaildoremetente;
let EnderecodeEmaildetodososdestinatarios = EnderecodeEmaildetodososdestinatarios;
let Linhadeassuntodamensagem = Linhadeassuntodamensagem;
let Dataehoraemquemensagemfoienviada = Dataehoraemquemensagemfoienviada;
let IDexclusivodamensagem = IDexclusivodamensagem;

//Leitura dos dados de Email no processo de entrega:

let EnderecodeEmaildoremetenteedodestinatario = EnderecodeEmaildoremetenteedodestinatario;
let EnvelopeSMTP = EnvelopeSMTP;


//Validação dos dados do início do cadastro:
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

//Validação dos dados das informações profissionais

if (Nomeempresarial.value === "") {
    alert("Por favor, preencha seu nome empresarial");
    return;
}
if (CNPJ.value === "") {
    alert("Por favor, preencha seu CNPJ");
    return;
}
if (Datadeiniciodasatividades.value === "") {
    alert("Por favor, preencha sua data de início das atividades");
    return;
}
if (Objetosocial.value === "") {
    alert("Por favor, coloque seu objeto social");
    return;
}
if (Capitalsocial.value === "") {
    alert("Por favor, coloque seu capital social");
    return;
}
if (Socios.value === "") {
    alert("Por favor, coloque seus socios");
    return;
}

//Validação dos dados das informações do cartão

if (Nomedocartao.value === "") {
    alert("Por favor, coloque o nome do cartão");
    return;
}
if (Datadevalidade.value === "") {
    alert("Por favor, preencha a data de validade");
    return;
}
if (Nomedotitular.value === "") {
    alert("Por favor, preencha seu nome de titular");
    return;
}
if (CVV.value === "") {
    alert("Por favor, coloque seu CVV");
    return;
}
if (Chip.value === "") {
    alert("Por favor, coloque seu chip");
    return;
}
if (Senhadocartao.value === "") {
    alert("Por favor, coloque sua senha do cartão");
    return;
}

//Validação das informações do Email

if (Nomedoproprietario.value === "") {
    alert("Por favor, preencha o nome do proprietario");
    return;
}
if (EnderecodeEmail.value === "") {
    alert("Por favor, coloque seu endereço de Email");
    return;
}
if (Insiranovamenteasenha.value === "") {
    alert("Por favor, insira novamente a sua senha");
    return;
}

//Validação dos dados de Email de mensagens

if (EnderecodeEmaildoremetente.value === "") {
    alert("Por favor, coloque o endereço de Email do remtente");
    return;
}
if (EnderecodeEmaildetodososdestinatarios.value === "") {
    alert("Por favor, coloque o endereço de Email de todos os destinatários");
    return;
}
if (Linhadeassuntodamensagem.value === "") {
    alert("Por favor, preencha sua linha de assunto da mensagemr");
    return;
}
if (Dataehoraemquemensagemfoienviada.value === "") {
    alert("Por favor, coloque a data e hora em que a mensagem foi enviada");
    return;
}
if (IDexclusivodamensagem.value === "") {
    alert("Por favor, coloque o ID exclusivo da mensagem ");
    return;
}

//Validação dos dados de Email no processdo de entrega

if (EnderecodeEmaildoremetenteedodestinatario.value === "") {
    alert("Por favor, coloque o endereço de Email do remtente e do destinatário");
    return;
}
if (EnvelopeSMTP.value === "") {
    alert("Por favor, coloque seu envelope SMTP");
    return;
}