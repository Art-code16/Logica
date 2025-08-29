function tasta_form(){
    var nome = document.forms["formalunos"]["aluno"].value;
    var cpf = document.forms["formalunos"]["cpf"].value;

    if (aluno == "") {
        alert("O campo nome é obrigatório.");
        document.forms["formalunos"]["aluno"].focus();
        return false;
    }
    if (cpf == "") {
        alert("O campo CPF é obrigatório.");
        document.forms["formalunos"]["cpf"].focus();
        return false;
    }

}


function processar_dados(){
    var sobrenome = document.getElementById('sobrenome').value;
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereço').value;
    var idade = document.getElementById('Idade').value;

    var cadastro = [nome, sobrenome,endereco, idade];
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h3> Dados Cadastrados </h3>'

    for (var i = 0; i < cadastro.length; i++) {
        resultado.innerHTML += cadastro[i] + '<br>';
    }
    return false;
}
