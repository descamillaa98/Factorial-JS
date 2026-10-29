function factorial(numero){
    let temp = 1;
    for (let i = 1; i <= numero; i++) {
        temp = temp * i;
    }
    return temp;
}

let numero = Number(prompt("Escriba el número a calcular el factorial: "));
if(!Number.isInteger(numero) || numero < 0){
    console.log("Debe ingresar un número entero mayor o igual a cero.");
} else {
    console.log(factorial(numero));
}