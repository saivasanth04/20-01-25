let user=['sanjay','muzammil','pranav','pushpa']
console.log(user)
for(let i=0;i<user.length;i++){
    console.log(user[i])
}
let peruri=user.map((users,i)=>{
    return i*2
});
console.log(user,peruri)
/*
map returns the copied array
but for each is used for iteration similar to map but it does not returh
any copied arrays and if you try you get undefined
*/ 
let foruri=user.forEach((users,i)=>{return users})
console.log(foruri)
//create an array of object
let userdetails={
    name:'sanjay',
    age:25,
    area:{
        street:"peerla",
        city:"huzurnagar"
    }
}
console.log(userdetails.name)