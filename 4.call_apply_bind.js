function add(c,d){
     console.log(this.a + this.b + c + d);
}
add(3,4);

//explicit binding of this
var numObj = {
    a: 1,
    b: 2
};

add.call(numObj,3,4);

//apply used same as call but for array
add.apply(numObj, [3,4]);

//if you don't know about arguments c,d
// it will always retun new function
const boundFunc = add.bind(numObj);

boundFunc(3,4);

//using bind in class
class Car {
    constructor(model){
        this.model = model;
        //this.updateModel = this.updateModel.bind(this)
    }

    updateModel(){
        //console.log(this);
        console.log("Car model is" + this.model);
    }


}

var myCar = new Car('Maruti 800');
myCar.updateModel();// this will work fine

var newCar = myCar.updateModel;
newCar(); //this will be either undefined or global obj
//same exmple
$('btn').click(myCar.updateModel)
$('btn').click(myCar.updateModel.bind(myCar))
//to fix uncomment bind