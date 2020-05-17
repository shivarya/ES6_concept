//async calls return promises
const fetch = require("node-fetch");
console.log('a');
setTimeout(() => {
    console.log('Hello');
})
console.log('b');

console.log('c');
fetch("http://dummy.restapiexample.com/api/v1/employees").then(function(data){
    return data.json();
}).then(function (employee) {
    console.log(employee.status);
}).catch((err) => {
    console.log(err);
});

//Promise all

const weather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            tmp: 12,
            conditions: 'Cool'
        }, 2000)
    })
})

const tweets = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Welcome")
    })
})

Promise.all([weather, tweets])
.then(result => {
    console.log(result);
})