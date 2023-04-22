adjacentElementsProduct = [9,5,10,26,-24,-1];
// 5 * 10 = 50

const funcUpperProduct = (array) => {

    let productUpper = array[0] * array [1]
    const resultUpperProduct = array.forEach((value,index) => {
        let productRight;

        productRight = value * array[index+1]

        if(productRight>productUpper) {
            productUpper = productRight;
        }

    })
    return productUpper
}

console.log("El producto mas alto encontrado fue: ", funcUpperProduct(adjacentElementsProduct))