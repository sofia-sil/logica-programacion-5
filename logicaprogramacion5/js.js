function adivinarNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;

    const numerosIntroducidos = [];

    while (true) {
      let intento = prompt("Intenta adivinar el número secreto (del 1 al 100):");

      if (!esNumeroValido(intento)) {
        alert("Por favor, ingresa un número válido.");
        continue; 
      }

      intento = Number(intento);

      numerosIntroducidos.push(intento);

      if (intento === numeroSecreto) {
        alert("¡Felicidades, adivinaste el número secreto!");
        console.log("Lista de números introducidos:", numerosIntroducidos);
        break; 
      } else {
        alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      }
    }
  }

  function esNumeroValido(numero) {
    return !isNaN(numero) && numero >= 1 && numero <= 100;
  }

  adivinarNumeroSecreto();