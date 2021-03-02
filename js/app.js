function campoRequerido(input) {
    // This toma todo el elemento que estoy utilizando
    // console.log("perdi foco y estoy en la funcion campo requerido")
    // let input = document.getElementById(`nombre`);
    // trim() quita espacios vacios al principio
    if (input.value.trim() === "") {
        // if (input.value.length > 0){
        // classname sobreescribe, asi que hay que mantener todas las clases que uno quiera y agregar las nuevas
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
}

//--- validar campos numericos
function validarNumeros(numeros) {
    if (numeros.value.trim() != "" && !isNaN(numeros.value) && numeros.value > 0) {
        // isNaN("hola") = true
        // isNaN("1234")= false
        // ! not    !true=false  !false=true
        // !isNaN("hola") = false
        // !isNaN("1234")= true
        numeros.className = "form-control is-valid";
        return true;
    } else {
        numeros.className = "form-control is-invalid";
        return false;
    }
}

//--- validar que haya cargado una fecha
function validarFecha(fecha) {
    console.log("parametro fecha: " + fecha.value);
    let anioNac = fecha.value.getFullYear();
    console.log("fecha nac: " + fecha.value.trim());
    console.log("Año nac: " + anioNac)
    console.log("hoy: " + Date())
        // if (fecha.value.trim() != "" && anioNac >= "1930" && fecha.value <= Date) {
    if (fecha.value.trim() != "" && fecha.value <= Date()) {
        console.log("fecha valida");
        fecha.className = "form-control is-valid";
        return true;
    } else {
        console.log("fecha invalida");
        fecha.className = "form-control is-invalid";
        return false;
    }
}

// VALIDACION DESDE JS: trae la etiqueta completa del SELECT a una variable global "validaSelect"
let validaSelect = document.getElementById("sexo");
// cuando se ejecute el evento onblur, llamar a funcion validarSexo sin parentesis
validaSelect.addEventListener("onblur", validarSexo);

function validarSexo() {
    if (validaSelect.value == "M" || validaSelect.value == "H") {
        validaSelect.className = "form-select is-valid";
        return true;
    } else {
        validaSelect.className = "form-select is-invalid";
        return false;
    }
}

function mostrarGeneracion() {
    let fechaNacP = document.getElementById("fechaNac").value;
    let anioNacP = fechaNacP.toString().substr(0, 4);

    if (anioNacP >= 1930 && anioNacP <= 1948) {
        document.getElementById("generacion").value = "Generación SILENT";
        document.getElementById("rasgo").value = "AUSTERIDAD";
    }
    if (anioNacP >= 1949 && anioNacP <= 1968) {
        document.getElementById("generacion").value = "Generación Baby Boom";
        document.getElementById("rasgo").value = "AMBICIÓN";
    }
    if (anioNacP >= 1969 && anioNacP <= 1980) {
        document.getElementById("generacion").value = "Generación X";
        document.getElementById("rasgo").value = "OBSESION AL EXITO";
    }
    if (anioNacP >= 1981 && anioNacP <= 1993) {
        document.getElementById("generacion").value = "Generación Y";
        document.getElementById("rasgo").value = "FRUSTRACIÓN";
    }
    if (anioNacP >= 1994 && anioNacP <= 2010) {
        document.getElementById("generacion").value = "Generación Z";
        document.getElementById("rasgo").value = "IRREVERENCIA";
    }

    // Determina si es mayor de edad 
    let hoy = new Date(),
        anioActual = hoy.getFullYear();

    let edadP = anioActual - anioNacP;
    if (edadP >= 18) {
        document.getElementById("mayorEdad").value = "SI es Mayor de Edad";
    } else {
        document.getElementById("mayorEdad").value = "NO es Mayor de Edad";
    }
}

function mayorEdad() {
    let hoy = new Date(),
        anioActual = hoy.getFullYear();

    let fechaNacP = document.getElementById("fechaNac").value;
    let anioNacP = fechaNacP.toString().substr(0, 4);
    let edadP = anioActual - anioNacP;
    if (edadP >= 18) {
        document.getElementById("mayorEdad").value = "SI es Mayor de Edad";
    } else {
        document.getElementById("mayorEdad").value = "NO es Mayor de Edad";
    }
}

// no esta tomando resultado validacion sexo!!!!!!!!!
// la palabra event puede ser cualquiera
function validarGeneral(event) {
    // detener el evento submit para hacer funciones antes de enviar
    event.preventDefault();

    // llama a las funciones xa validar datos
    if (campoRequerido(document.getElementById("nombre")) &&
        validarNumeros(document.getElementById("dni")) &&
        validarNumeros(document.getElementById("peso")) &&
        validarNumeros(document.getElementById("altura")) &&
        validarSexo()) {
        // debo enviar datos
        enviarEmail();
    } else {
        // debo mostrar error y no mandar mail
        document.getElementById("mensaje").innerHTML += `<div class="alert alert-warning alert-dismissible fade show text-center mt-3" role="alert">
        Los datos ingresados no son correctos. Verifíquelos e intente nuevamente.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    }
}


// Se usa emailJS y se trae el formato del objeto para completar con los valores de los input
function enviarEmail() {
    emailjs.send("service_w1eakad", "template_ehorwun", {
        from_name: document.getElementById("nombre").value,
        to_name: "Administrador",
        nombre: document.getElementById("nombre").value,
        dni: document.getElementById("dni").value,
        sexo: document.getElementById("sexo").value,
        peso: document.getElementById("peso").value,
        altura: document.getElementById("altura").value,
        fechaNac: document.getElementById("fechaNac").value,
        mayorEdad: document.getElementById("mayorEdad").value,
        generacion: document.getElementById("generacion").value,
        rasgo: document.getElementById("rasgo").value
    }).then(function(response) {
        document.getElementById("mensaje").innerHTML += `<div class="alert alert-success alert-dismissible fade show text-center mt-3" role="alert">
        Tu solicitud fue enviada correctamente.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
        limpiarForm();
    }, function(error) {
        document.getElementById("mensaje").innerHTML += `<div class="alert alert-success alert-dismissible fade show text-center mt-3" role="alert">
        Ocurrió un error. Inténtelo en unos minutos.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`
    })
}

function limpiarForm() {
    document.getElementById("formSuscripcion").reset();
    document.getElementById("nombre").className = "form-control";
    document.getElementById("dni").className = "form-control";
    document.getElementById("sexo").className = "form-select";
    document.getElementById("peso").className = "form-control";
    document.getElementById("altura").className = "form-control";
    document.getElementById("fechaNac").className = "form-control";

    // cierra la ventana alert si no la cerró manualmente el usuario
    setTimeout(function() { document.getElementById("mensaje").innerHTML = `<div></div>`; }, 5000);
}