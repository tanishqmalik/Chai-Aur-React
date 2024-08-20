function d6(){
    return Math.floor(Math.random() * 6)+1;
}



//agar mein 7 paas kiya to ye function  7 elemnts ka array bna rha hai
function getrolls(n){
    return Array.from({length:n}, ()=> d6())
}

// let newArray = getrolls(6);

// console.log(count)

// console.log(getrolls(6))



// function sumOfAllElem (){
//     let sum=0;
//     for(let i=0; i<newArray.length; i++){
//         sum =  sum + newArray[i];
//     }

//     return sum
// }


function sumOfAllElem(nums){
    return nums.reduce((prev,cur)=> prev+cur, 0)
}


// console.log(sumOfAllElem());

export {d6, getrolls, sumOfAllElem}