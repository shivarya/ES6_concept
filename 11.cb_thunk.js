function doSomething(task, time, cb){
    console.log(`${task} started`);

    setTimeout(() => {
        var data = `${task} done`;
        cb(data);
    }, time);
}

// doSomething('task1', 2000, function(res){
//     console.log(res)
// })

// doSomething('task2', 1000, function(res){
//     console.log(res)
// })

//if we want to do task2 after task1
//callbacks
doSomething('task1', 2000, function(res){
    console.log(res)
    doSomething('task2', 1000, function(res){
        console.log(res)
    })
})
// this will work but need much config

//Thunk to the rescue
//this is a thunk function as it returns a function
function doSomething2(task, time){
    console.log(`${task} started`);
    let data = `${task} done`;
    return function(cb){
        setTimeout(() => {
            cb(data);
        }, time)
    }
}

// const task1 = doSomething2('task1', 2000);
// const task2 = doSomething2('task2', 1000);

// task1(function(res){
//     console.log(res);
//     task2(function(res2){
//         console.log(res2)
//     })
// })