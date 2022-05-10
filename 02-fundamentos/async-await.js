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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es de: ${salario}`;
  } catch (error) {
    throw error;
  }
};
const id = 5;
getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((error) => console.log(error));
