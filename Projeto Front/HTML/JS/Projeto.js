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

function Fahrenheit() {
  let resultado3 = document.getElementById("temperatura_c").value;
  let final = document.getElementById("resultado_calor");

  if (resultado3 === isNaN) {
    return false;
  } else {
    let calculo_temperatura = parseFloat((resultado3 * 1.8) + 32);
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
