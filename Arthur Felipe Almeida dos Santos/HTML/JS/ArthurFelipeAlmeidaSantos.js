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