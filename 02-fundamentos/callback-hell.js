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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`No existe salario para el id ${id}`);
  }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR!");
    return console.log(err);
  }
  getSalario(id, (err, salario) => {
    if (err) {
      console.log("ERROR!");
      return console.log(err);
    }
    console.log("El empleado:", empleado, "tiene un salario de:", salario);
  });
});
