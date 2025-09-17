// capitalize the first word 

let sentence = "i love programming";

let capitalize = sentence.split(" ").map((value) => value.slice(0,1));

console.log(capitalize);