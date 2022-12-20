/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{

    constructor(public nombre: string, public direccion: string){

    }
}

class Heroe extends PersonaNormal {

    // al ponerle el nivel de acceso le digo a la ts, create una propiedad en la clase con ese nombre
// y a la vez el primer argumento que le estoy enviando establecelo a la clase...
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string,
  ){
    super(nombreReal, 'New York');
  }

}

const ironman = new Heroe('ironman', 45, 'Tony Stark');
console.log(ironman);


// las interfaces NO existen en JS...