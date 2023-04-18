warnTheSheep = ["sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];

const findTheWolf = warnTheSheep.indexOf('wolf');

const findTheSheep = warnTheSheep.filter((sheep,index)=> index>findTheWolf);

if(findTheSheep.length != 0){
    console.log("Cuidado oveja", findTheSheep.length, "El lobo te asecha (⊙_⊙;)")
}else{
    console.log("No sigas comiendo ovejas lobo")
}

