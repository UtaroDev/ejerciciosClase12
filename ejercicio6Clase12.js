minSum = [1,0,2,3,2,4,3,1];


const sumMin = (array) => {

    lowerPlus=array[0]+array[1];
    
     const resultPlus = array.forEach ((arrayValue,index) => {
        let plus;
        for(let x = index+1 ; x < array.length ; x++){
            plus = arrayValue + array[x];
            if (plus < lowerPlus) {
                lowerPlus = plus;
            }  
        }
       
    })
   return lowerPlus
}

console.log('la menor suma es:',sumMin(minSum))
