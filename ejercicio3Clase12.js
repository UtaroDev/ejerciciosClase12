const arrayNumbers=[1,2,3,4,5,6,7];
let number = 1;


//Funcion que devuelve un numero sumado a todos los elementos de un arreglo.

const plusNumber=(plusarray,plusnum)=>{

    const newarray = plusarray.map((array) =>{
        array=array+plusnum; 
        return array;
    })   
    
    return newarray;
}


console.log("You new array is: ", plusNumber(arrayNumbers,number));