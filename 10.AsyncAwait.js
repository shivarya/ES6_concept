
function greet(ms){
    return new Promise((resolve, reject) => {
        if(ms < 500){
            reject('Value must be greater than 500')
        }
        setTimeout(() => resolve(`Done in ${ms} seconds`), ms)
    })
}


greet(1000)
    .then(res => {
        console.log(res);
        return greet(3200)
    })
    .then(res => {
        console.log(res);
        return greet(3500)
    })
    .then(res => {
        console.log(res);
    });

async function start (){
    console.log('Start');
    const res1 = await greet(1000);
    console.log(res1);
    const res2 = await greet(3200);
    console.log(res2);
    const res3 = await greet(3500);
    console.log(res3);

}
start().then(() => {});