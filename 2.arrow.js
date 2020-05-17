const num = [1,2,4];
const result = num.map(function(n){
 return n * 2;
});
console.log(result);
const result2 = num.map(n => n * 3);
console.log(result2);

const result3 = num.map((n,i) => {
    return i * 3;
});
console.log(result3);