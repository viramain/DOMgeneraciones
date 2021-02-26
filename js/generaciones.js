// Generaciones
// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
// Si quieres añadir alguna propiedad extra puedes hacerlo.
//()
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece
// la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
    constructor(nombreP, edadP, dniP, sexoP, pesoP, alturaP, anioNacP) {
        this.nombre = nombreP;
        this.edad = edadP;
        this.dni = dniP;
        this.sexo = sexoP;
        this.peso = pesoP;
        this.altura = alturaP;
        this.anioNac = anioNacP;
    }

    mostrarGeneracion(anioNacP) {
        if (anioNacP >= 1930 && anioNacP <= 1948) {
            document.write(`La persona pertenece a la Generación SILENT y su rasgo característico es AUSTERIDAD.<br>`)
        }
        if (anioNacP >= 1949 && anioNacP <= 1968) {
            document.write(`La persona pertenece a la Generación BABY BOOM y su rasgo característico es AMBICION.<br>`)
        }
        if (anioNacP >= 1969 && anioNacP <= 1980) {
            document.write(`La persona pertenece a la Generación X y su rasgo característico es OBSESION AL EXITO.<br>`)
        }
        if (anioNacP >= 1981 && anioNacP <= 1993) {
            document.write(`La persona pertenece a la Generación Y y su rasgo característico es FRUSTRACION.<br>`)
        }
        if (anioNacP >= 1994 && anioNacP <= 2010) {
            document.write(`La persona pertenece a la Generación Z y su rasgo característico es IRREVERENCIA.<br>`)
        }
    }

    esMayorDeEdad(edadP) {
        if (edadP >= 18) {
            document.write(`La Persona es Mayor de edad.<br>`)
        } else {
            document.write(`La Persona es NO Mayor de edad.<br>`)
        }
    }

    mostrarDatos() {
        document.write(`<h4>Datos de la Persona</h4>
        Nombre: ${this.nombre}
        <br>Edad: ${this.edad}
        <br>DNI: ${this.dni}
        <br>Sexo: ${this.sexo}
        <br>Peso: ${this.peso}
        <br>altura: ${this.altura}
        <br>Año Nacimiento: ${this.anioNac}<br>`)
    }

    generarDNI() {
        let nroAleatorio = Math.random();
        let cadenaDni = String(nroAleatorio);
        cadenaDni = cadenaDni.substring(2, 10);
        return cadenaDni;
    }
}

// let persona1 = new Persona("Valentina Iramain", 48, "22.414.369", "M", 54, 160, 1972);
// let persona1 = new Persona("Juan Perez", 38, "32.356.546", "H", 50, 165, 1982);
// let persona1 = new Persona("Jose Rodriguez", 22, "41.224.539", "H", 49, 170, 1998);
// let persona1 = new Persona("Maria Lopez", 60, "9.345.324", "M", 65, 163, 1951);
let persona1 = new Persona("Juana Gonzalez", 80, "4.678.456", "M", 75, 180, 1944);

persona1.mostrarGeneracion(persona1.anioNac);
persona1.esMayorDeEdad(persona1.edad);
persona1.mostrarDatos();
let nuevoDni = persona1.generarDNI();
document.write("<br>" + "El Nuevo DNI es: " + nuevoDni);