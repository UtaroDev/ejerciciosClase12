const arrayNumbers=[2,5,49,172,16]

//Metodo que borrar el primer elemento

const DeleteFirstNumber = (arraytodelete)=> {
    arraytodelete.shift();
    return arraytodelete;
}

console.log("Array after to eliminate the first element: ",DeleteFirstNumber(arrayNumbers))