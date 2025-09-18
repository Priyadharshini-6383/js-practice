let numbers = [1,2,3,4,6,7,9] 

let result =  numbers.filter((value) => 
    value % 2 != 0).map((sq) => {
    return sq * sq;
} )

console.log(result);