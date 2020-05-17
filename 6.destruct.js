//dest obj
var person = {
    name: 'Ashish',
    country: 'India',
    city: 'Hyderabad',
    address: {
        pincode: 500001
    }
};

let { name, country, city} = person;
console.log(name, country, city);

let { name:fullName} = person;
console.log(fullName);

let { address: { pincode } } = person;
console.log(pincode);

//dest array
var data = [1,2,3,4];
var data2 = [5,6,7,8];

const [a,b,c,d] = data;
console.log(a,b,c,d);

//swapping
var [data, data2] = [data2, data];

//spread operator
//clone 
let newData = [...data];
console.log(newData);