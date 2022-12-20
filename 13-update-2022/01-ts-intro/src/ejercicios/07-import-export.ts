/*
    ===== Código de TypeScript =====
*/

import { IProducto, calculaISV } from "./06-desestructuracion-funcion";

const carritoCompras : IProducto[] = [];

const [total, isv] = calculaISV(carritoCompras);
console.log("Total: ", total);
console.log("ISV: ", isv);
