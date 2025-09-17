// palindrome 

let word = "madam";

// reversed string
let reversedword = word.split("").reverse().join("");

if(word == reversedword) {
    console.log("The word is a palindrome");
}
else {
    console.log ("The word is not a palindrome");
}

