let number = 7;


//funcion que crea un array con la cantidad de espacios de un numero guardado en una variable y lo llena con numeros de 1 a n
const newArray = (num) => {

    const array = []; 

    for (let index = 1; index <= num; index++) {
        array.push(index);
    }

    return array
}

console.log('The new array is: ', newArray(number));