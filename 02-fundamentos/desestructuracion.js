const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  // edad: 50,
  getNombre: function () {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
  console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];

const [, , h3] = heroes;

console.log(h3);
