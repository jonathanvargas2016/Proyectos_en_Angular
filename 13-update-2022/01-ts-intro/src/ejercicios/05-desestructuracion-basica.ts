/*
    ===== Código de TypeScript =====
*/

interface IDetalles {
  autor: string;
  anio: number;
}

interface IReproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: IDetalles;
}

const reproductor: IReproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2022,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

// const { volumen, segundo, cancion, detalles: {anio, autor} } = reproductor;

/* ---------------------------------------------------------------------------------
 * DESESTRUCTURACION DE ARREGLOS
 */

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, p3] = dbz;

// obtener la tercera posicion
const [, , pAux3] = dbz;
