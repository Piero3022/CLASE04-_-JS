console.log("EJERCICIO 01_____________________________________________");


let birthday = prompt("INGRESE SU CUMPLEAÑOS EN EL SIGUIENTE FORMATO DD/MM ");
let array = birthday.split('/');
let cumple = new Date(new Date().getFullYear(), array[1] - 1, array[0]);
let mes = cumple.getMonth() + 1;
let dia = cumple.getDate();


let signo = "";

if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signo = "Acuario";
} else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signo = "Piscis";
} else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = "Aries";
} else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = "Tauro";
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Géminis";
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Cáncer";
} else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Leo";
} else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Virgo";
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = "Libra";
} else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = "Escorpio";
} else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = "Sagitario";
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signo = "Capricornio";
}

console.log(`Tu signo zodiacal es ${signo}`);

console.log("EJERCICIO 02_____________________________________________");

const persona = {
    nombre: "Juan",
    edad: 30,
    genero: "Masculino",
    direccion: "Calle 1, Ciudad 1",
    correo: "juan@gmail.com"
};



const avion = {
    modelo: "Boeing 747",
    fabricante: "Boeing",
    capacidad: 660,
    velocidadMaxima: 920,
    altitudMaxima: 13100
};


const productos = [
    { nombre: "Camisa", precio: 29.99, talla: "M" },
    { nombre: "Pantalón", precio: 49.99, talla: "L" },
    { nombre: "Zapatos", precio: 79.99, talla: "9" }
];


const personas = [
    { nombre: "Juan", edad: 30, genero: "Masculino" },
    { nombre: "María", edad: 25, genero: "Femenino" },
    { nombre: "Pedro", edad: 40, genero: "Masculino" }
];

const ciudadesPeruanas = ["Lima", "Arequipa", "Cusco", "Trujillo", "Piura"];









