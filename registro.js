//funcion para obtener el nivel del alumno
function obtenerNivel() {
  let nivel = prompt(
    "Ingrese el nivel del alumno (inicial, primaria, secundaria):"
  );
  while (
    nivel !== "inicial" &&
    nivel !== "primaria" &&
    nivel !== "secundaria"
  ) {
    alert(
      "Nivel no válido. Por favor, ingrese 'inicial', 'primaria' o 'secundaria'."
    );
    nivel = prompt(
      "Ingrese el nivel del alumno (inicial, primaria, secundaria):"
    );
  }
  return nivel;
}

//funcion para declarar mas adelante los datos por separado en cada nivel seleccionado por el usuario
let registroAlumno = (nivel) => {
  if (nivel == "inicial") {
    nivelito = "inicial";
  } else if (nivel == "primaria") {
    nivelito = "primaria";
  } else if (nivel == "secundaria") {
    nivel = "secundaria";
  } else {
    nivelito = console.log("dato incorrecto");
  }
  return nivelito;
};

let registroAlumno1 = (nivel) => {
  if (nivel == "inicial") {
    ni = 200;
  } else if (nivel == "primaria") {
    ni = 300;
  } else if (nivel == "secundaria") {
    ni = 400;
  } else {
    console.log("dato incorrecto");
  }
  return ni;
};

let registroAlumno2 = (nivel) => {
  if (nivel == "inicial") {
    m = 120;
  } else if (nivel == "primaria") {
    m = 130;
  } else if (nivel == "secundaria") {
    m = 140;
  } else {
    console.log("dato incorrecto");
  }
  return m;
};

//funcion principal

function calcularTotalPagoAlumnos() {
  const totalAlum = prompt("Ingrese cuantos alumnos va a registrar");
  let pagoTotal = 0;

  for (let i = 0; i < totalAlum; i++) {
    let alumno = prompt("Nombre del alumno y apellido");
    let dni = prompt("Ingrese el DNI del alumno");
    let apoderado = prompt("Ingrese el nombre del apoderado del alumno");
    let apoderadoCell = prompt("Ingrese el telefono del apoderado del alumno");
    let nivel1 = obtenerNivel();
    let ni1 = registroAlumno1(nivel1);
    let mensualidad = registroAlumno2(nivel1);
    let total = mensualidad * 10 + ni1;
    pagoTotal += total;

    console.log(`Nombre y apellido del Aumno: ${alumno}`);
    console.log(`DNI: ${dni}`);
    console.log(`Apoderado: ${apoderado}`);
    console.log(`Numero de telefono: ${apoderadoCell}`);
    console.log(`Nivel: ${nivel1}`);
    console.log(`Costo de matricula: ${ni1} soles`);
    console.log(`Costo de mensualidad: ${mensualidad} soles`);
    console.log(`Monto total a pagar por el alumno ${alumno} = ${total} soles`);
    console.log("----------------------------------------");
  }
  console.log(`Total a pagar por todos los alumnos: ${pagoTotal} soles`);
  let descuento = pagoTotal * 0.2;
  let pagoCompleto = prompt(
    "desea pagar completo: si, descuento del 20% total/ no, paga monto completo"
  );

  if (pagoCompleto == "si") {
    console.log(
      `Se afectuado el descuento del 20%, usted pagaria el total de ${(pagoTotal -=
        descuento)} soles.
    Se registro de manera exitosa. Gracias por confiar en nosotros`
    );
  } else {
    console.log(
      `Se registro de manera exitosa. Gracias por confiar en nosotros`
    );
  }
}

//llamada

calcularTotalPagoAlumnos();
