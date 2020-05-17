//object
let person = {
    fName: 'Ashish',
    lName: 'Tripathi',
    fullName: function(){
        //this bound to object
        console.log(this.fName + ' ' + this.lName);
    }
}

person.fullName();

//Class
function Car(model){
    this.model = model;
    console.log(this);
}

var myCar = new Car('Maruti');

//window bound this (inside the function) only in browser
//copy paste in broser

var a = 1, b = 2;
function add(c,d){
   //"use strict";
    console.log(this);
    //gloabl object in node
    //windows object in browser
    //undefined in strictmode
    console.log(this.a + this.b + c + d);
}
add(3,4);
