var pessoas, index;

function ColetaDados(Nomeesobrenome, Email, Telefone, Mensagem, Preferenciacontato) {
3
    pessoas = document.getElementsByClassName("dados");
    var qtdlinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlinhas);
    var linhaParam;

    var cellcodigo = linha.insertcell(0);
    var cellNome = linha.insertcell(1);
    var cellEmail = linha.insertcell(2);
    var cellTelefone = linha.insertcell(3);
    var cellMensagem = linha.insertcell(4);
    var cellPreferenciacontato = linha.insertcell(5);

    cellcodigo.innerHTML = qtdlinhas;
    cellNome.innerHTML = Nome;
    cellEmail.innerHTML = Email;
    cellTelefone.innerHTML = Telefone
    cellMensagem.innerHTML = Mensagem;
    cellPreferenciacontato.innerHTML = Preferenciacontato;

    preenchCamposForm();
}

function altPessoa(Nomeesobrenome, Email, Telefone, Mensagem, Preferenciacontato) {

    pessoas.rows[index].cells[1].innerHTML = Nomeesobrenome;
    pessoas.rows[index].cells[2].innerHTML = Email;
    pessoas.rows[index].cells[3].innerHTML = Telefone;
    pessoas.rows[index].cells[4].innerHTML = Mensagem;
    pessoas.rows[index].cells[5].innerHTML = Preferenciacontato;

}