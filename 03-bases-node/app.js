const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Numero base de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    description: "Listar la tabla",
    default: false,
    demandOption: true,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
