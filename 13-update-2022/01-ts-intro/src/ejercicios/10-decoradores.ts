/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}


@classDecorator
class MiSuperClase {
  public mipropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase)

const miClase = new MiSuperClase();
