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

const users = [
    {id:1,name:"Bhavin"},
    {id:2,name: "pampaniya"},
    {id:3,name:"ms"}
]

const [{id}, ,{name}] = users;
console.log(id);
// console.log(obj2);
console.log(name);



