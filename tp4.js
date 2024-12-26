/* 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó */
/* let auto = {
  color: "rojo",
  Marca: "peugeot",
  modelo: "207",
  encendido: () => {
    console.log("El auto se encendio");
  },
  apagado: () => {
    console.log("El auto de apago");
  },
};
console.log(`caracteristicas del vehiculo:\n color :${auto.color}\n marca :${auto.Marca}\n modelo :${auto.modelo}\n
     `);
auto.encendido();
auto.apagado(); */

/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */
/* let Cuenta = {
  Titula: "Alex el Leon ",
  Saldo: 0,
  Ingresar: function (int) {
    this.Saldo += parseInt(int);
  },
  Extraer: function (ext) {
    this.Saldo -= parseInt(ext);
  },
  Informacion: function () {
    alert(`titular: ${Cuenta.Titula}\n saldo: ${Cuenta.Saldo}`);
  },
};

depositar = parseInt(prompt("ingresa el monto a depositar"));
Cuenta.Ingresar(depositar);
Cuenta.Informacion(); */
//utilizo un siclo do While para que por lo menos una vex te pida extraer

/* do {
  extraer = parseInt(prompt("ingresa el monto a extraer"));
  if (extraer > Cuenta.Saldo) {
    alert("no es posible hacer la operacion");
  }
} while (extraer > Cuenta.Saldo);

Cuenta.Extraer(extraer);
Cuenta.Informacion(); */
//-------------------------------------
/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */
/* class Rectangulo {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }
  get alto() {
    return this._alto;
  }
  set alto(altura) {
    this._alto = altura;
  }
  get ancho() {
    return this._ancho;
  }
  set ancho(largo) {
    this._ancho = largo;
  }
  calculaPerimetro() {
    return 2 * (this._alto + this._ancho);
  }
  calcularArea() {
    return this._alto * this._ancho;
  }
  mostrarMedidas() {
    alert(
      `el alto del rectangulo es ${this._alto}\n el anacho del recgtangulp es ${
        this._ancho
      }\nel perimetro es ${this.calculaPerimetro()}\nel area es ${this.calcularArea()}`
    );
  }
}

let valor_1;
let Valor_2;

do {
  valor_1 = parseInt(prompt("ingresa el primer valor"));
  Valor_2 = parseInt(prompt("ingresa ingrese el segundo valor"));
  if (valor_1 <= 0 || isNaN(valor_1) || Valor_2 <= 0 || isNaN(Valor_2)) {
    alert("los valores deben ser positivos");
  }
} while (valor_1 <= 0 || isNaN(valor_1) || Valor_2 <= 0 || isNaN(Valor_2));

const Rectangulo_1 = new Rectangulo(valor_1, Valor_2);
Rectangulo_1.mostrarMedidas(); */

/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */
/* class Productos {
  constructor(codigo, nombre, precio) {
    this._codigo = codigo;
    this._nombre = nombre;
    this._precio = precio;
  }

  get codigo() {
    return this._codigo;
  }
  set codigo(codigo) {
    this._codigo = codigo;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  mostrarProducto() {
    document.write(
      `<tr><td>${this.codigo}</td><td>${this.nombre}</td><td>${this.precio}</td></tr>`
    );
  }
}
let Surtido = [];
document.write("<h1>Listado de Artículos</h1>");
document.write(
  '<table border="1"><tr><th>Nombre</th><th>Código</th><th>Precio</th></tr>'
);
for (let index = 0; index < 3; index++) {
  let nombre = prompt("Ingresa el nombre del artículo");
  let codigo = parseInt(prompt("Ingresa el código del artículo"));
  let precio = parseFloat(prompt("Ingresa el precio del artículo"));
  const producto = new Productos(codigo, nombre, precio);
  Surtido.push(producto);

  producto.mostrarProducto();
}
document.write("</table>"); */
/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones: */

/* esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras. */
const Generaciones = {
  generacion_Z: {
    marcoTemporal: "1994-2010",
    poblacion: "7.800.000",
    historia: "expansión de internet",
    rasgo: "irreverencia",
  },
  generacion_Y: {
    marcoTemporal: "1981-1993",
    poblacion: "7.200.000",
    historia: "inicio de la digitalización",
    rasgo: "frustración",
  },
  generacion_X: {
    marcoTemporal: "1969-1980",
    poblacion: "9.300.000",
    historia: "crisis del 73 y transición española",
    rasgo: "obsesión por el éxito",
  },
  Baby_boom: {
    marcoTemporal: "1949-1968",
    poblacion: "12.200.000",
    historia: "paz y explosión demográfica",
    rasgo: "ambición",
  },
  Silent_generation: {
    marcoTemporal: "1930-1948",
    poblacion: "6.300.000",
    historia: "conflictos bélicos",
    rasgo: "austeridad",
  },
};

function obtenerGeneracion(anoNacimiento) {
  let generacion;

  switch (true) {
    case anoNacimiento >= 1994 && anoNacimiento <= 2010:
      generacion = "generacion_Z";
      break;
    case anoNacimiento >= 1981 && anoNacimiento <= 1993:
      generacion = "generacion_Y";
      break;
    case anoNacimiento >= 1969 && anoNacimiento <= 1980:
      generacion = "generacion_X";
      break;
    case anoNacimiento >= 1949 && anoNacimiento <= 1968:
      generacion = "Baby_boom";
      break;
    case anoNacimiento >= 1930 && anoNacimiento <= 1948:
      generacion = "Silent_generation";
      break;
    default:
      generacion = "Desconocida";
  }

  return generacion;
}

// Función para mostrar información de la generación
function mostrarInformacionGeneracion(anoNacimiento) {
  const generacionClave = obtenerGeneracion(anoNacimiento);
  const generacionInfo = Generaciones[generacionClave];

  if (generacionInfo) {
    {
      document.write(
        " <table border='1'><tr><th>GENERACION</th><th>MARCO TEMP.</th><th>POBlACIOM</th><th>HISTORIA</th><th>RASGOs</th></tr>"
      );
      document.write(
        `<tr><td>${generacionClave}</td> <td>${generacionInfo.marcoTemporal}</td><td>${generacionInfo.poblacion}</td> <td>${generacionInfo.historia}</td><td> ${generacionInfo.rasgo}</td>  </tr>`
      );

      document.write("</table>");
    }
  } else {
    document.write("generacion desconocida");
  }
}

class Personas {
  constructor(nombre, edad, sexo, peso, altura, f_nacimiento) {
    this._nombre = nombre;
    this._edad = edad;
    this._dni = this.getenerarDni();
    this._sexo = sexo;
    this._peso = peso;
    this._altura = altura;
    this._fecha = f_nacimiento;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad;
  }
  get dni() {
    return this._dni;
  }

  set dni(dni) {
    this._dni = dni;
  }
  get sexo() {
    return this._sexo;
  }

  set sexo(sexo) {
    this._sexo = sexo;
  }
  get peso() {
    return this._peso;
  }

  set peso(peso) {
    this._peso = peso;
  }

  get altura() {
    return this._altura;
  }

  set altura(altura) {
    this._altura = altura;
  }
  get fecha() {
    return this._fecha;
  }
  set fecha(fecha) {
    this._fecha = fecha;
  }

  getenerarDni() {
    return Math.floor(1000000 + Math.random() * 9000000);
  }
  MostrarDatos() {
    document.write(
      `<table border='1'><tr><th>Nombre</th><th>Edad</th><th>DNI</th><th>Sexo</th><th>Altura</th><th>Peso</th><th>Fecha de Nacimiento</th></tr>`
    );
    document.write(
      `<tr><td>${this.nombre}</td><td>${this.edad}</td><td>${this.dni}</td><td>${this.sexo}</td><td>${this.altura}</td><td>${this.peso}<td>${this.fecha}</td></tr>`
    );
    document.write("</table>");
  }
  EsmayorDeedad() {
    if (this.edad >= 18) {
      document.write("Es mayor de edad");
    } else {
      document.write("Es menor de edad");
    }
  }
}

let nombre;
let edad;
let sexo;
let altura;
let peso;
let anoNacimiento;

do {
  nombre = prompt("Ingresa un nombre:");
  edad = parseInt(prompt("Ingresa la edad:"));
  sexo = prompt("Ingresa el sexo:");
  altura = parseFloat(prompt("Ingresa la altura:"));
  peso = parseFloat(prompt("Ingresa el peso:"));
  anoNacimiento = prompt("Ingresa el año del nacimiento:");

  if (!nombre || isNaN(edad) || !sexo || isNaN(altura) || isNaN(peso)) {
    alert("Error: Ingrese datos válidos.");
  }
} while (!nombre || isNaN(edad) || !sexo || isNaN(altura) || isNaN(peso));

const Persona_1 = new Personas(nombre, edad, sexo, peso, altura, anoNacimiento);
Persona_1.MostrarDatos();
mostrarInformacionGeneracion(anoNacimiento);
Persona_1.EsmayorDeedad();
/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx” */
/* Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más página */




/* 7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola. */

