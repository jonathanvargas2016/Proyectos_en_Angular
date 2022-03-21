export interface usuario{
  uid?: string,
  nombres: string,
  titulo: string,
  linkCV?: string,
  perfilProfesional: string,
  motivacion: string,
  informacionContacto: {
    correos: [],
    telefonos: [],
    ubicacion?: string,
    redSocialORepo: [{
      tipo: string,
      enlace: string,
      estado: boolean
    }]
  },
  educacion: [{
    titulo: string,
    lugar: string,
    fechaInicio: Date,
    fechaFin: Date,
    fotoUrl: string
  }],
  habilidades:[{
    tipo: string,
    habilidad: []
  }],
  experienciaLaboral: [{
    lugar: string,
    fechaInicio: Date,
    fechaFin: Date,
    Cargo: string,
    Funciones: string,
    Referencias: [{
      nombre: string,
      cargo?: string,
      telefono: []
    }]
  }],
}
