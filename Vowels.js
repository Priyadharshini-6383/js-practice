let string = "Hello World";
function FindVowels(string) {
    let vowels = ["a","e", "i","o","u"] ;
count= 0;

for(let str of string.toLowerCase()) {
    if(vowels.includes(str)) {
        count++;
    }

}
return count;
    
}
let vowelsfound = FindVowels(string);
console.log(vowelsfound);
