// evitar usar el tipo any...

let habilidades: string[] = ["Bash", "Counter"];

// interfaces
interface IPersonaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

// objetos
const personaje: IPersonaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healding"],
};

personaje.puebloNatal = "Pueblo Paleta";
