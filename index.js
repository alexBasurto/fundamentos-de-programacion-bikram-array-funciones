//1
let arrayVacio = [];

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//5
function suma(n1, n2) {
    return n1 + n2;
}

//6
function potenciacion(n1, n2) {
    let answer = n1;
    if (n2 == 0) {
        return 1;
    }
    for (let i = 1; i < n2; i++) {
        answer = answer * n1
    }
    return answer;
}

//7
function separarPalabras(str) {
    return str.split(" ");
}

//8
function repetirString(str, num) {
    let answer = "";
    for (let i = 0; i < num; i++) {
        answer += str;
    }
    return answer;
}

//9
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { return false }
    }
    return true;
}

//10
function ordenarArray(arr) { return arr.sort((a, b) => a - b) }

//11
function obtenerPares(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            answer.push(arr[i]);
        }
    }
    return answer;
}

// //12 forma fácil
// function pintarArray(arr){
//     return `[${arr.join(", ")}]`;
// }

//12 forma dificil, sin uso de métodos de array
function pintarArray(arr) {
    let str = "[";
    for (let i = 0; i < arr.length - 1; i++) {
        str += `${arr[i]}, `;
    }
    str += `${arr[arr.length - 1]}]`
    return str;
}

//13
function arrayMapi(arr, fn) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer.push(fn(arr[i]));
    }
    return answer;
}

//14
function eliminarDuplicados(arr) {
    let arrUnicos = []
    for (let i = 0; i < arr.length; i++) {
        if (!arrUnicos.includes(arr[i])) {
            arrUnicos.push(arr[i]);
        }
    }
    return arrUnicos;
}

//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//16
let holaMundo = ['Hola', 'Mundo'];

//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//19
function multiplicacion(num1, num2) {
    return num1 * num2;
}

//20
function division(num1, num2) {
    return num1 / num2;
}

//21
function esPar(num){
    if (num%2 == 0) {
        return true;
    }
    return false;
}

//22
function resta(n1, n2){return n1 - n2}
let arrayFunciones = [suma, resta, multiplicacion];

//23 ¿y sin método sort?
function ordenarArray2(arrNums) {
    return arrNums.sort((a, b) => a - b);
}

//24
function obtenerImpares(arrNums) {
    let arrAnswer = [];
    for (let i = 0; i < arrNums.length; i++) {
        if (arrNums[i]%2 != 0) {
            arrAnswer.push(arrNums[i]);
        }
    }
    return arrAnswer;
}

//25
function sumarArray(arrNum) {
    let answer = 0;
    for (let i = 0; i < arrNum.length; i++) {
        answer += arrNum[i];
    }
    return answer;
}

//26
function multiplicarArray(arrNum) {
    let answer = 1;
    for (let i = 0; i < arrNum.length; i++) {
        answer *= arrNum[i];
    }
    return answer;
}