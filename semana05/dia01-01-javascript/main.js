
console.log("Hola Javascript");

console.log(32);
console.log(typeof 3.14);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log("hola");
console.log(typeof "hola");

console.log(true);
console.log(typeof true);
console.log("-------");

console.log(typeof 10)
console.log(typeof "hola")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof nulll)
console.log(typeof {})
console.log(typeof [])
console.log(typeof function(){})
console.log(typeof Symbol())
console.log(typeof NaN)
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof new Date())
console.log(typeof /regex/)
console.log(typeof new Error())
console.log(typeof Math)
console.log(typeof JSON)
console.log(typeof Promise)
console.log(typeof Map)
console.log(typeof Set)
console.log(typeof WeakMap)
console.log(typeof WeakSet)
console.log(typeof ArrayBuffer)
console.log(typeof DataView)
console.log(typeof Int8Array)
console.log(typeof Uint8Array)
console.log(typeof Uint8ClampedArray)
console.log(typeof Int16Array)
console.log(typeof Uint16Array)
console.log(typeof Int32Array)
console.log(typeof Uint32Array)
console.log(typeof Float32Array)
console.log(typeof Float64Array)
console.log(typeof BigInt64Array)
console.log(typeof BigUint64Array)
console.log(typeof SharedArrayBuffer)
console.log(typeof Atomics)
console.log(typeof WebAssembly)
console.log(typeof globalThis)
console.log(typeof Symbol.iterator)
console.log(typeof Symbol.asyncIterator)

let a = 10;
console.log(a);


a = 20;
const b= 3;
console.log(a % b);


const d = 10;
const e = 3;

const cociente= d / e;
console.log(cociente);

console.log(true && false);
console.log(true && true);
console.log(true || false);
console.log(false || false);


const base = 10;
const altura = 5;

console.log("El área del triángulo es: " + (base * altura / 2));

const nombre = "Juan";
const edad = 25;
console.log(`amigo mio ${nombre} yo tengo ${edad} años`);

numero = 13;

if (numero % 2==0 && numero>= 10) {
    console.log("El número es par y mayor o igual a 10");
}else if (numero % 2==0 && numero<= 10) {
    console.log("El número no es par o no es mayor o igual a 10");
}else {
    console.log("Impar");
}


const numeros= 15;

if (numeros%3==0 && numero%5==0) {
    console.log("fizzbuzz");
} else if (numeros%3==0) {
    console.log("fizz");
} else if (numeros%5==0) {
    console.log("buzz");
} else {
    console.log(numeros);

}

function esPar(numeross1) {
    return numeross1 / 2 ;
}

numeross= 4;

console.log(esPar(numeross)); // true



function logaritmo() {
    return 5*6
}
console.log(logaritmo());

function saludo() {
    return "Hola"
}
console.log(saludo());

function saludo() {
    return "Hola"
}
console.log(saludo());


function saludos() {
    console.log("mundo");
}
saludos();

function doblePar(a) {
    return a * 2;
}

console.log(doblePar(4));


function mayorQ(a, b) {
    if (a>b) {
        return  a +" es mayor que  "+ b;
    }else {
        return b +" es mayor que " + a;
    }
}   

console.log(mayorQ(45, 13));



function fizzBuzz(numeross) {

    if (numeross%3==0 && numeros%5==0) {
        console.log("fizzbuzz");
    } else if (numeross%3==0) {
        console.log("fizz");
    } else if (numeross%5==0) {
        console.log("buzz");
    } else {
        console.log(numeross);

    }
}

fizzBuzz(15);


function evaluarTexto(texto) {
    if(texto.length > 10) {
        console.log("largo");
    }else {
        console.log("corto");
    }
}

evaluarTexto("Hola mundo");


function textoInvertido(palabra) {
    let invertido = "";
    for (let i = palabra.length-1; i>=0; i--) {
        invertido+=palabra[i]
    }
    return invertido;
}
console.log(textoInvertido("Hola mundo"));
