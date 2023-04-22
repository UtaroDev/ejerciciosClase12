const arrayNumbers=[1,4,6,1,2]

//Funcion que solo recibe arreglos con 5 elementos o mas, y luego elimine los ultimos 3 elementos.

//correccion, el nombre de la funcion tendria que ser algo relacionado a eliminar los ultimos 3 elementos.
// Otra manera más sencilla en la que podrías usar el splice es .splice(-3) usandolo así eliminará desde el tercer elemento contando desde el final del arreglo y al no mandarle un 
//segundo parámetro borrará hasta el final.

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