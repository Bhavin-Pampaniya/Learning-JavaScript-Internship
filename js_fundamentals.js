//TASK 1 :- output prime numbers from 2 --> n
// let n = 11;
// for(let i=2; i<=n; i++){
//     let isPrime = true;
//     for(let j=2;j<=i;j++){
//         if(i%j==0 && i!=j ) isPrime = false; break;
//     }
//     if(isPrime) console.log(i);
// }


//destructuring NEsted

// const users = [
//     {id:1,name:"Bhavin"},
//     {id:2,name: "pampaniya"},
//     {id:3,name:"ms"}
// ]
// const [{id}, ,{name}] = users;

// "use strict"

// let name = "ok";
// function normal(){
//     let name = "bhavin";
//     console.log("normal function \n", this);
// }
// // console.log("global",this);
// const arrow = ()=>{
//     let name = "aeewer";
//     console.log("arrow function ",this.name);
// }
// normal();
// arrow();


const myObj = {
    name:"bhavin",
    id:2,
    edu: ()=>{
        let id = 150;
        console.log("studing in Ganpat Uni and my id is ", this);
    },
    edu2: function(){
        const objfunct = ()=>{
            console.log("inside object ", this.id);
        }
        let id = 56;
        console.log("studing in Ganpat Uni and my id is ", this);   
        objfunct();
    } 
}

function myFunct() {
    let name = "bjhva9n";
    const newfunc = ()=>{
        console.log("my name is ",this.name);
    }
    newfunc();
}

myFunct();

myObj.edu();
myObj.edu2();