function sumar(a: number, b: number): number {
    return a + b;
  }
  
  const sumarFlecha = (a: number, b: number): number => a + b;
  
  /* secuencia de los parametros: 
      1. parametros requeridos, 
      2. parametros opcionales, 
      3. parametros por defecto...
  */
  function multiplicar(
    numero: number,
    otroNumero?: number,
    base: number = 2
  ): number {
    return numero * base;
  }
  
  const resultado = multiplicar(4, 10, 5);
  const resultado2 = multiplicar(4);
  const resultado3 = multiplicar(4, 5);
  
  console.log(resultado);
  
  interface IPersonajeLor {
    nombre: string,
    pv: number,
    mostrarHp: () => void,
  }
  
  function curar(personaje: IPersonajeLor, curarX: number): void {
    personaje.pv += curarX;
    console.log(personaje);
  }
  
  const nuevoPersonaje: IPersonajeLor = {
    nombre: "Strider",
    pv: 50,
    mostrarHp(){
      console.log('Puntos de Vida', this.pv);
    }
  };
  
  curar(nuevoPersonaje, 20);