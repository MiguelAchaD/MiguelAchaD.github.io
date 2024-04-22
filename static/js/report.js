document.addEventListener("DOMContentLoaded", function () {
  const opciones = {
    "infraestructura": {
      "Pared": ["Grieta", "Humedad", "Desprendimiento", "Fisura", "Descoloramiento"],
      "Suelo": ["Hundimiento", "Agujero", "Desnivel", "Desgaste", "Manchas"],
      "Techo": ["Gotera", "Desprendimiento", "Hendidura", "Humo", "Daños por agua"]
    },
    "electrodomestico": {
      "Cocina": ["Fallo en quemadores", "Problema con el horno", "Fuga de gas", "Puerta rota", "Pérdida de potencia"],
      "Lavadora": ["No centrifuga", "Fuga de agua", "No enciende", "Ruido excesivo", "Problema de drenaje"],
      "Nevera": ["No enfría", "Hielo en exceso", "Fuga de agua", "Puerta no cierra", "Problema de descongelación"],
      "Lavavajillas": ["No lava correctamente", "Fuga de agua", "No desagua", "Puerta rota", "Error en el panel de control"],
      "Microondas": ["No calienta", "Luz no funciona", "Botones no responden", "Ruidos extraños", "Problema con la puerta"]
    },
    "electronico": {
      "Teléfono móvil": ["Pantalla rota", "Batería defectuosa", "Problema de carga", "Botones dañados", "Problema de señal"],
      "Ordenador portátil": ["Problema de arranque", "Pantalla negra", "Teclado dañado", "Problema de sobrecalentamiento", "Problema de batería"],
      "Tablet": ["Pantalla agrietada", "No enciende", "Problema de Wi-Fi", "Botones atascados", "Problema de audio"],
      "Cámara digital": ["No toma fotos", "Pantalla no funciona", "Problema de enfoque", "Problema de almacenamiento", "Problema de conexión USB"],
      "Smartwatch": ["No carga", "Pantalla en blanco", "Problema de sincronización", "Botones atascados", "No enciende"]
    },
    "mueble": {
      "Silla": ["Patas sueltas", "Rasgaduras en el tapizado", "Desgaste en la superficie", "Falta de estabilidad", "Ruido al mover"],
      "Mesa": ["Arañazos", "Patas desiguales", "Desgaste en la superficie", "Falta de estabilidad", "Manchas difíciles de quitar"],
      "Sofá": ["Desgaste en los cojines", "Rasgaduras en la tela", "Patas sueltas", "Hundimiento en el asiento", "Mal olor"],
      "Armario": ["Puertas desalineadas", "Bisagras sueltas", "Cajones que no cierran bien", "Desgaste en la superficie", "Olor a humedad"],
      "Cama": ["Ruido al mover", "Desgaste en el colchón", "Estructura inestable", "Daños en la cabecera", "Hundimiento en el somier"]
    },
    "otro": {
      "Otra cosa": ["Otro tipo de problema", "Otra falla", "Algo más", "Problema desconocido", "Inconveniente adicional"]
    }
  };

  //const tipoObjetoSelect = document.getElementById("p1");
  //const objetoSelect = document.getElementById("p2");
  //const tipoRoturaSelect = document.getElementById("p3");
//
  //// Llenar el primer select con los tipos de objeto
  //Object.keys(opciones).forEach(tipoObjeto => {
  //  const option = document.createElement("option");
  //  option.text = tipoObjeto;
  //  tipoObjetoSelect.add(option);
  //});
//
  //// Función para llenar el segundo select con los objetos correspondientes
  //function llenarObjetos(tipoObjeto) {
  //  objetoSelect.innerHTML = '<option value="" disabled selected>Selecciona el tipo de objeto roto</option>';
  //  Object.keys(opciones[tipoObjeto]).forEach(objeto => {
  //    const option = document.createElement("option");
  //    option.text = objeto;
  //    objetoSelect.add(option);
  //  });
  //}
//
  //// Llenar el tercer select con los tipos de rotura correspondientes
  //function llenarTiposRotura(objeto) {
  //  tipoRoturaSelect.innerHTML = '<option value="" disabled selected>Selecciona el tipo de rotura</option>';
  //  opciones[tipoObjetoSelect.value][objeto].forEach(tipoRotura => {
  //    const option = document.createElement("option");
  //    option.text = tipoRotura;
  //    tipoRoturaSelect.add(option);
  //  });
  //}
//
  //// Evento para cambiar las opciones del segundo select cuando se selecciona un tipo de objeto
  //tipoObjetoSelect.addEventListener("change", function () {
  //  llenarObjetos(this.value);
  //  llenarTiposRotura(objetoSelect.value);
  //});
//
  //// Evento para cambiar las opciones del tercer select cuando se selecciona un objeto
  //objetoSelect.addEventListener("change", function () {
  //  llenarTiposRotura(this.value);
  //});
//
  //// Llenar el primer select al cargar la página
  //llenarObjetos(tipoObjetoSelect.value);
  //llenarTiposRotura(objetoSelect.value);

  const pasos = document.querySelectorAll(".paso");
  const divisores = document.querySelectorAll(".divisor");
  const arrowLeft = document.getElementById("arrow_left");
  const arrowRight = document.getElementById("arrow_right");
  const elementosCapture = document.querySelectorAll(".p_capture");
  const modal = document.getElementById("modal");
  const confirmarBtn = document.getElementById("confirmar");
  const cancelarBtn = document.getElementById("cancelar");
  const cerrarBtn = document.getElementById("cerrar");

  let pasoActual = 0;

  ocultarElementos();
  ocultarDivisores();

  function ocultarElementos() {
    elementosCapture.forEach((element, index) => {
      if (index !== 0) {
        element.style.display = "none";
      }
    });
  }

  function ocultarDivisores() {
    divisores.forEach((element) => {
      element.style.visibility = "hidden";
    });
  }

  function cambiarPaso(nuevoPaso) {
    const currentDivisor = divisores[pasoActual - 1];
    const nextDivisor = divisores[nuevoPaso - 1];
    const currentPaso = pasos[pasoActual];
    const nextPaso = pasos[nuevoPaso];

    if (nuevoPaso < pasoActual) {
      if (currentDivisor) {
        currentDivisor.classList.remove("divisor-activo");
        currentDivisor.style.visibility = "hidden";
      }
      currentPaso.classList.remove("paso-activo");
    }

    elementosCapture[pasoActual].style.display = "none";
    pasoActual = nuevoPaso;

    if (nextDivisor) {
      nextDivisor.style.visibility = "visible";
      nextDivisor.classList.add("divisor-activo");
    }

    nextPaso.classList.add("paso-activo");
    elementosCapture[pasoActual].style.display = "block";
  }



  function mostrarModal() {
    modal.style.display = "block";
  }

  function cerrarModal() {
    modal.style.display = "none";
  }

  function volverVentanaPrincipal() {
    location.href = "../index.html";
  }

  function enviarFormulario() {
    if (validarPasosF(document.querySelectorAll(`.p_capture`))) {
      alert("Formulario enviado con éxito");
    } else {
      alert("Pasos del formulario incompletos!");
    }
  }

  arrowLeft.addEventListener("click", function () {
    if (pasoActual > 0) {
      cambiarPaso(pasoActual - 1);
    }
  });

  arrowRight.addEventListener("click", function () {
    const elementosPaso = document.querySelectorAll(`.p_capture`);
    let elementoActual = elementosPaso[pasoActual];
    if (validarPaso(elementoActual)) {
      if (pasoActual < pasos.length - 1) {
        cambiarPaso(pasoActual + 1);
      } else if (pasoActual === pasos.length - 1) {
        mostrarModal();
      }
    } else {
      elementoActual = sustraerElmento(elementoActual);
      elementoActual.classList.add('error');
      setTimeout(() => {
        elementoActual.classList.remove('error');
      }, 500);
    }
  });


  function validarPaso(elementoActual) {
    let pasoValido = true;

    elementoActual = sustraerElmento(elementoActual);

    if (elementoActual.tagName == "SELECT" && elementoActual.value.length == 0) {
      pasoValido = false;
    } else if (elementoActual.tagName == "INPUT" && elementoActual.files.length != 1) {
      pasoValido = false;
    }
    return pasoValido;
  }

  function validarPasosF(elementos) {
    let childrenE = Array.from(elementos);
    let validos = true;

    childrenE.forEach(elemento => {
      if (!validarPaso(elemento)) {
        validos = false;
      }
    })
    return validos;
  }

  function sustraerElmento(elemento) {
    if (elemento.tagName === "LABEL") {
      const childrenE = elemento.children;
      for (const element of childrenE) {
        if (element.tagName === "INPUT" | element.tagName === "TEXTAREA") {
          elemento = element;
        }
      }
    }
    return elemento;
  }

  confirmarBtn.addEventListener("click", function () {
    enviarFormulario();
    cerrarModal();
    volverVentanaPrincipal();
  });

  cancelarBtn.addEventListener("click", function () {
    cerrarModal();
  });

  cerrarBtn.addEventListener("click", function () {
    cerrarModal();
  });

  cambiarPaso(pasoActual);
});
