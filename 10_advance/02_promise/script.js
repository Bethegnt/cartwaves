const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //DB calls, cryptography, networks
    setTimeout(function(){
        console.log('async tasks is complete')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promise consumed');
})

//+++++++++ secound promise +++++++++
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 is complete');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 is resolved');
})

// +++++++++ third promise ++++++++
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usrname:'chai',email:'chai@example.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//+++++++++ Forth promise +++++++++
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:'Gagan',password:'123'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('the promise is either resolved or rejected.'))


