const arrayNumbers=[1,4,6,1,2]

//Funcion que solo recibe arreglos con 5 elementos o mas, y luego elimine los ultimos 3 elementos.

const validateArrays = (array) => {
    if(array.length>=5){
        let arraylength=array.length-3
        console.log("You new array is :")
        arrayNumbers.splice(arraylength,3)
        console.log (array);
    }else{
        console.log("Error:This array must be greater than 5 elements.")
    }
}

validateArrays(arrayNumbers);