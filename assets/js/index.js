const form = document.querySelector("#formulario");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector("#peso");
  const inputAltura = event.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    mostrarResultado("Peso inválido", false);
    return;
  }
  if (!altura) {
    mostrarResultado("Altura inválida", false);
    return;
  }

  const imc = calcIMC(peso, altura);
  const resultadoPeso = resultadoPesoIMC(imc);

  const msg = `seu IMC é ${imc} (${resultadoPeso})`;

  mostrarResultado(msg, true);
});

function resultadoPesoIMC(imc) {
  const resultadoPeso = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) {
    return resultadoPeso[5];
  }
  if (imc >= 34.9) {
    return resultadoPeso[4];
  }
  if (imc >= 29.9) {
    return resultadoPeso[3];
  }
  if (imc >= 24.9) {
    return resultadoPeso[2];
  }
  if (imc >= 18.5) {
    return resultadoPeso[1];
  }
  if (imc < 18.5) {
    return resultadoPeso[0];
  }
}

function calcIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function criaParagrafo() {
  const p = document.createElement("p");
  return p;
}

function mostrarResultado(msg, valido) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criaParagrafo();

  if (valido) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("invalido");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
