
var frases = [];
while (true) {
  var frase = prompt("Introduce una frase (o escribe 'parar' para finalizar):");
  if (frase.toLowerCase() === "parar") {
    break;
  }

  frases.push(frase);
}

var cantFrases = frases.length-1;

console.log("Hay un total de " + cantFrases + " frases");