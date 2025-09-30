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

  if (a === b && b === c) {
    resultado.textContent = "Os lados formam um triângulo equilátero.";
  } else if (a === b || a === c || b === c) {
    resultado.textContent = "Os lados formam um triângulo isósceles.";
  } else {
    resultado.textContent = "Os lados formam um triângulo escaleno.";
  }
}

// Aguarda o carregamento da página para associar o evento
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("verificacao")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      verificacao_triangulo();
    });
});


//______________________________________________________________________________


function quantidade_fruta() {
  const preco = 7.5;
  let quantidade = parseInt(document.getElementById("macas").value);
  let resultado2 = document.getElementById("resultado_preco");

  if (quantidade <= 0) {
    return false;
  } else {
    let calculo_pago = parseFloat(quantidade * preco);
    resultado2.innerHTML = `Você irá pagar R$${calculo_pago}`;
    return;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("preco").addEventListener("submit", function (e) {
    e.preventDefault();
    quantidade_fruta();
  });
});


//______________________________________________________________________________


function Fahrenheit() {
  let resultado3 = document.getElementById("temperatura_c").value;
  let final = document.getElementById("resultado_calor");
  let temperatura = parseFloat(resultado3);

  if (temperatura === isNaN()) {
    final.innerHTML = "Pfv preencha da forma correta!!";
    return;
  } else {
    let calculo_temperatura = parseFloat((temperatura * 1.8) + 32);
    final.innerHTML = `A temperatura em ºF ${calculo_temperatura}`;
    return;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calor").addEventListener("submit", function (e) {
    e.preventDefault();
    Fahrenheit();
  });
});


//______________________________________________________________________________


function verificacao_retangulo() {

  let L = parseInt(document.getElementById("tamanho_largura").value);
  let A = parseInt(document.getElementById("tamanho_altura").value);
  let resultado_rt = document.getElementById("resultado_retangulo");

  if (isNaN(L) || isNaN(A)) {
    resultado_rt.innerHTML = "Pfv preencha da forma correta";
    return;
  } else {
    let calculo_retangulo = parseInt(L * A);
    resultado_rt.innerHTML = `A area do retangulo é ${calculo_retangulo}`;
    return;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("retangulo").addEventListener("submit", function (e) {
    e.preventDefault();
    verificacao_retangulo();
  });
});


//______________________________________________________________________________


function IMC() {
  let kg = Float(document.getElementById("peso").value);
  let m = Float(document.getElementById("altura").value);
  let resultadoIMC = document.getElementById("resultado_imc");
  calculo_imc = (kg / (m * m));

  if (kg === isNaN() || m === isNaN()) {
    resultadoIMC.innerHTML = "Digite novamente..";
    return;
  } else if (calculo_imc < 18.50) {
    resultadoIMC.innerHTML = "C ta Magrão zé";
    return;
  } else if (calculo_imc > 24.99) {
    resultadoIMC.innerHTML = "C ta gordão em júpiter com braço e perna";

  } else {
    resultadoIMC.innerHTML = "C ta normal";
    return;
  }
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("IMC").addEventListener("submit", function (e) {
    e.preventDefault();
    IMC();
  });
});

}
