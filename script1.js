let a = 'praveen';
let count = {}

let res = a.split('')

res.forEach((item) => {
    if(count[item]){
        count[item] ++ 
    }else{
        count[item] = 1
    }
})

let formattedCount = Object.entries(count).map(([key, value]) => `${key}: ${value}`).join(', ');

console.log(formattedCount);
