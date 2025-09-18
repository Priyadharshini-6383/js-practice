let sentence = "I love programming";

function LongestWord(sentence) {
let words = sentence.split(" ");
let longestword = "";
let maxlength = 0;


for (let word of words) {
if (word.length > maxlength) {
    maxlength = word.length;
    longestword = word;
}


 }
 return longestword;
}
let longest = LongestWord(sentence);
console.log(longest);
