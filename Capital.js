// capitalize the first word 

let sentence = "i love programming";

let capitalize = sentence.split(" ").map((value) => value.slice(0,1).toUpperCase()+ value.slice(1)).join(" ");

console.log(capitalize);