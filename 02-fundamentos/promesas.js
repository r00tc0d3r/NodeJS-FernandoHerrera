/**
 * Array de datos
 */
const empleados = [
  {
    id: 1,
    nombre: "Rodrigo",
  },
  {
    id: 2,
    nombre: "El pepe",
  },
  {
    id: 3,
    nombre: "Pachi",
  },
];
const salarios = [
  {
    id: 1,
    salario: 10000,
  },
  {
    id: 2,
    salario: 30000,
  },
];

// Funciones
const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;

    salario
      ? resolve(salario)
      : reject(`No existe salario para el empleado con id ${id}`);
  });
};

const id = 3;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.error(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.error(err));

// Callback hell - Promise Hell
// getEmpleado(id)
//   .then((empleado) => {
//     getSalario(id)
//       .then((salario) => {
//         console.log("El empleado:", empleado, "Tiene un salario:", salario);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// Promesas en cadena
let nombre;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log("El empleado:", nombre, "tiene un salario de:", salario)
  )
  .catch((err) => console.log(err));
