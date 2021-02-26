function campoRequerido(input) {
    // This toma todo el elemento que estoy utilizando
    console.log("perdi foco y estoy en la funcion campo requerido")
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

// ----- EXPRESIONES REGULARES -------
//-------Validar email------------
function validarEmail(email) {
    // en la variable "expresion" crea patron para validar email
    //w permite mayusculas y minusculas y del 0 al 9 
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    // expresion.test(email.value) es V o F  indica su hay texto escrito
    if (email.value.trim() != "" && expresion.test(email.value)) {
        email.className = "form-control is-valid";
        return true;
    } else {
        email.className = "form-control is-invalid";
        return false;
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
    let expresion = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    // let expresion = /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    console.log(expresion.test(fecha.value));
    console.log(fecha.value.trim());
    if (fecha.value.trim() != "" && expresion.test(fecha.value)) {
        console.log("fecha valida");
        fecha.className = "form-control is-valid";
        return true;
    } else {
        console.log("fecha invalida");
        fecha.className = "form-control is-invalid";
        return false;
    }
}

function validarSexo() {
    if (document.getElementById("sexo").value != "M" &&
        document.getElementById("sexo").value != "H") {
        sexo.className = "form-select is-invalid"
    } else {
        sexo.className = "form-select is-valid"
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

//====================================================================================0
// OTRA FORMA DE VALIDAR DESDE JS: Agregar eventos desde JS
// trae la etiqueta completa del checkbox a una variable global "checkTerminos"
let checkTerminos = document.getElementById("terminos");

// se llama a funcion validarTerminos sin parentesis
// cuando se ejecute el evento change, llamar a funcion validarTerminos
checkTerminos.addEventListener("change", validarTerminos);

function validarTerminos() {
    console.log(checkTerminos);
    // si checked es true
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}
//=================FIN OTRA FORMA DE VALIDAR======================================

// --- FUNCION ANONIMA: solo se ejecuta cuando se ejecuta en evento CHANGE (en este caso) -----
// checkTerminos.addEventListener("change", function () {
//     console.log("desde validarTerminos")
// });

// --- FUNCION FLECHA (Anonima xq no tiene nombre)----
// checkTerminos.addEventListener("change", () => {
//     console.log("desde validarTerminos")
// });

// la palabra event puede ser cualquiera
function validarGeneral(event) {
    // detener el evento submit para hacer funciones antes de enviar
    event.preventDefault();
    console.log(event);
    // llama a las funciones xa validar datos
    if (campoRequerido(document.getElementById("nombre")) &&
        validarEmail(document.getElementById("email")) &&
        validarNumeros(document.getElementById("telefono")) &&
        validarConsulta(document.getElementById("consulta")) &&
        validarTerminos()) {
        // debo mandar el mail
        alert("Datos listos para enviar");
        enviarEmail();
    } else {
        // debo mostrar error y no mandar mail
        alert("Datos Incorrectos");
    }
}

function enviarEmail() {
    console.log("desde la funcion enviar email")
}