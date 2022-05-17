const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    describe: "Muestra la tabla en consola",
    default: false,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Es el tope de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    if (isNaN(argv.h)) {
      throw "El tope tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
