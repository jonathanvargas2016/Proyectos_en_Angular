/*
    ===== Código de TypeScript =====
*/

interface IPasajero {
  nombre: string;
  hijos?: string[]; // propiedad opcional...
}

const pasajero1: IPasajero = {
  nombre: "Jonathan",
};

const pasajero2: IPasajero = {
  nombre: "Melissa",
  hijos: ["Natalia", "Gabriel"],
};

function imprimeHijos(pasajero: IPasajero) {
  const cuantosHijos = pasajero.hijos?.length || 0;
  console.log(cuantosHijos);
}

imprimeHijos(pasajero2)
