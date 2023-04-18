const findUniq = [1,1,1,1,1,1,1,3];

//Funcion que devuelve el numero distinto de un array con todos numeros iguales menos uno

const findImpostor = (array)=> {

    const findDistinc = array.filter((arrayValue,index) => {

      const result = (arrayValue != array[index-1]) && (arrayValue != array[index+1])
        
            return result;
    
    })

    return findDistinc;

  }
    
console.log('The number different is: ', findImpostor(findUniq));


