let array = [1,3,3,5,6,8];

let evennum = array.filter((value) => {
    return value % 2 == 0;
})

console.log(evennum);