//PENSIONES ALUMNOS

const alumnosPensiones = [
  {
    nombre: "Juan Pérez",
    id: 12345678,
    nombreApoderado: "Carlos Pérez",
    nivel: "Primaria",
    saldoDePension: 150,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Ana Gómez",
    id: 23456789,
    nombreApoderado: "María Gómez",
    nivel: "Secundaria",
    saldoDePension: 200,
    saldoPendiente: 500,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Luis Ramírez",
    id: 34567890,
    nombreApoderado: "José Ramírez",
    nivel: "Primaria",
    saldoDePension: 150,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "María Torres",
    id: 45678901,
    nombreApoderado: "Laura Torres",
    nivel: "Secundaria",
    saldoDePension: 180,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Carlos Fernández",
    id: 56789012,
    nombreApoderado: "Luis Fernández",
    nivel: "Primaria",
    saldoDePension: 220,
    saldoPendiente: 200,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Laura Sánchez",
    id: 67890123,
    nombreApoderado: "Ana Sánchez",
    nivel: "Secundaria",
    saldoDePension: 200,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Pedro Martínez",
    id: 78901234,
    nombreApoderado: "Carlos Martínez",
    nivel: "Primaria",
    saldoDePension: 150,
    saldoPendiente: 450,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Jorge Rodríguez",
    id: 89012345,
    nombreApoderado: "Marta Rodríguez",
    nivel: "Secundaria",
    saldoDePension: 180,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Marta López",
    id: 90123456,
    nombreApoderado: "Sofía López",
    nivel: "Primaria",
    saldoDePension: 200,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Sofía Díaz",
    id: 12345067,
    nombreApoderado: "Daniel Díaz",
    nivel: "Secundaria",
    saldoDePension: 150,
    saldoPendiente: 840,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Daniel Morales",
    id: 23456078,
    nombreApoderado: "Lucía Morales",
    nivel: "Primaria",
    saldoDePension: 180,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Lucía Castillo",
    id: 34567089,
    nombreApoderado: "Andrés Castillo",
    nivel: "Secundaria",
    saldoDePension: 220,
    saldoPendiente: 600,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Andrés Reyes",
    id: 45678090,
    nombreApoderado: "Natalia Reyes",
    nivel: "Primaria",
    saldoDePension: 150,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Natalia Herrera",
    id: 56789001,
    nombreApoderado: "Diego Herrera",
    nivel: "Secundaria",
    saldoDePension: 200,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Diego Vargas",
    id: 67890112,
    nombreApoderado: "Elena Vargas",
    nivel: "Primaria",
    saldoDePension: 180,
    saldoPendiente: 100,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Elena Ortiz",
    id: 78901223,
    nombreApoderado: "Raúl Ortiz",
    nivel: "Secundaria",
    saldoDePension: 220,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Raúl Mendoza",
    id: 89012334,
    nombreApoderado: "Valeria Mendoza",
    nivel: "Primaria",
    saldoDePension: 200,
    saldoPendiente: 240,
    estadoDePago: "Pendiente",
  },
  {
    nombre: "Valeria Campos",
    id: 90123445,
    nombreApoderado: "Oscar Campos",
    nivel: "Secundaria",
    saldoDePension: 180,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Oscar Jiménez",
    id: 12345656,
    nombreApoderado: "Paula Jiménez",
    nivel: "Primaria",
    saldoDePension: 150,
    saldoPendiente: 0,
    estadoDePago: "Pagado",
  },
  {
    nombre: "Paula Rivas",
    id: 23456767,
    nombreApoderado: "Jorge Rivas",
    nivel: "Secundaria",
    saldoDePension: 200,
    saldoPendiente: 500,
    estadoDePago: "Pendiente",
  },
];

// objeto con los metodos a realizar
let colegio = {
  alumnos: alumnosPensiones,
  consultarAlumno: function () {
    let id;
    let alumnoEncontrado;
    do {
      id = parseInt(prompt("Ingresa el ID del alumno:"));
      alumnoEncontrado = this.alumnos.find((alumno) => alumno.id === id);
      if (alumnoEncontrado) {
        console.log(alumnoEncontrado);
      } else {
        alert("ID no válido. Por favor, ingresa un ID correcto.");
      }
    } while (!alumnoEncontrado); // Continúa solicitando hasta que se encuentre un ID válido
  },
  pagarDeuda: function () {
    let id;
    let alumno;
    let cantidad;

    // Buscar el ID del alumno hasta que sea válido
    do {
      id = prompt("Ingresa el ID del alumno:");
      alumno = this.alumnos.find((alumno) => alumno.id === id);
      if (!alumno) {
        alert("ID no válido. Por favor, ingresa un ID correcto.");
      }
    } while (!alumno); // Continúa solicitando hasta que se encuentre un ID válido

    // Mostrar el saldo pendiente y solicitar la cantidad a pagar
    if (alumno.estadoDePago === "Pendiente") {
      console.log(`${alumno.nombre} debe ${alumno.saldoDePension}.`);
      cantidad = prompt("Ingresa la cantidad a pagar:");

      if (cantidad >= alumno.saldoDePension) {
        alumno.saldoDePension = 0;
        alumno.estadoDePago = "Pagado";
        console.log(`${alumno.nombre} ha pagado su deuda.`);
      } else {
        alumno.saldoDePension -= cantidad;
        console.log(
          `${alumno.nombre} aún sigue con deuda de ${alumno.saldoDePension}.`
        );
      }
      // Mostrar la deuda actualizado
      console.log("Objeto actualizado:", alumno);
    } else {
      console.log(`${alumno.nombre} no tiene deudas pendientes.`);
    }
  },
  filtrarAlumnosConDeuda: function () {
    let alumnoDeudor = this.alumnos.filter(
      (alumno) => alumno.estadoDePago === "Pendiente"
    );
    return alumnoDeudor;
  },
  sumarDeudaTotal: function () {
    let deudaTotal = this.filtrarAlumnosConDeuda().reduce(
      (total, alumno) => total + alumno.saldoDePension,
      0
    );
    return deudaTotal;
  },
};

console.log(alumnosPensiones);

// Función para mostrar el menú y procesar la selección del usuario
function mostrarMenu() {
  let opcion;
  do {
    opcion = prompt(
      "¿Qué acción deseas realizar?\n" +
        "1. Consultar Alumno\n" +
        "2. Pagar Deuda\n" +
        "3. Filtrar Alumnos con Deuda\n" +
        "4. Sumar Deuda Total\n" +
        "5. Salir"
    );

    switch (opcion) {
      case "1":
        colegio.consultarAlumno();
        break;
      case "2":
        colegio.pagarDeuda();
        break;
      case "3":
        console.log(colegio.filtrarAlumnosConDeuda());
        break;
      case "4":
        console.log(
          "Deuda total de los alumnos con deuda pendiente:",
          colegio.sumarDeudaTotal()
        );
        break;
      case "5":
        console.log("Saliendo...");
        break;
      default:
        console.log(
          "Opción no válida. Por favor, selecciona una opción válida."
        );
        break;
    }
  } while (opcion !== "5");
}

// Ejecutar el menú
mostrarMenu();
