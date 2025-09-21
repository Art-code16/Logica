function verificacao_triangulo() {

    let a = parseFloat(document.getElementById("triangulo1").value);
    let b = parseFloat(document.getElementById("triangulo2").value);
    let c = parseFloat(document.getElementById("triangulo3").value);
    let resultado = document.getElementById("resultado");


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.textContent = "Preencha todos os lados corretamente.";
        return;
    }


    if (a <= 0 || b <= 0 || c <= 0) {
        resultado.textContent = "Os valores dos lados devem ser maiores que zero.";
        return;
    }


    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            resultado.textContent = "Os lados formam um triângulo equilátero.";
        } else if (a === b || a === c || b === c) {
            resultado.textContent = "Os lados formam um triângulo isósceles.";
        } else {
            resultado.textContent = "Os lados formam um triângulo escaleno.";
        }
    } 
    else {
        resultado.textContent = "Os lados não formam um triângulo.";
    }
}


// Aguarda o carregamento da página para associar o evento
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("verificacao").addEventListener("submit", function (e) {
        e.preventDefault();
        verificacao_triangulo();
    });
});