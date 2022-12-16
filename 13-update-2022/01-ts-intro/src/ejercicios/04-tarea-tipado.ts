/*
    ===== Código de TypeScript =====
*/

//

interface IDireccion{
    calle: string;
    pais: string;
    ciudad: string;
}


interface ISuperHeroe{
  nombre: string;
  edad: number;
  direccion: IDireccion
  mostrarDireccion: () => string;
}

const superHeroe: ISuperHeroe = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.nombre + " " + this.direccion.ciudad + " " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
