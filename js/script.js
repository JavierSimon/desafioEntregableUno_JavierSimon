let funcionFizzBuzz = (p1 = "Fizz", p2 = "Buzz") => {
  alert(
    `Se imprimiran por alert los numeros del 1 al 100, teniendo en cuenta los siguientes criterios \n 1) Si el número es múltiplo del numero 1 que se le pide al usuario, deberá imprimir "Fizz" en vez del número. (se podra cambiar la palabra en el primer parametro) \n 2) Si es múltiplo del número 2 que se le pide al usuario, deberá imprimir "Buzz". (se podra cambiar la palabra en el segundo parametro) \n 3) Si es múltiplo del numero 1 y del numero 2 (a la misma vez), deberá imprimir "FizzBuzz". (se concatenan las palabra del primer y segundo parametro)`
  );

  let n1 = Number(prompt("Agregar primer número entre el 1 y el 100"));
  let n2 = Number(prompt("Agregar segundo número entre el 1 y el 100"));
  let resultado = "";
  let limite = 100;

  for (let i = 1; i <= limite; i++) {
    
    while (!n1 || !n2) {
      alert("los dos tienen que ser numeros");
      n1 = Number(
        prompt("Agregar nuevamente el primer número entre el 1 y el 100")
      );
      n2 = Number(
        prompt("Agregar nuevamente el segundo número entre el 1 y el 100")
      );
    }

    if (!(i % n1) && !(i % n2)) {
      resultado += `${p1 + p2}[${i}] - `;
    } else if (!(i % n1)) {
      resultado += `${p1}[${i}] - `;
    } else if (!(i % n2)) {
      resultado += `${p2}[${i}] - `;
    } else {
      resultado += i + " - ";
    }
  }
  alert(resultado);
  return resultado;
};

funcionFizzBuzz();
funcionFizzBuzz("Pepe", "Argento");
