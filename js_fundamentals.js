//TASK 1 :- output prime numbers from 2 --> n
let n = 11;
for(let i=2; i<=n; i++){
    let isPrime = true;
    for(let j=2;j<=i;j++){
        if(i%j==0 && i!=j ) isPrime = false; break;
    }
    if(isPrime) console.log(i);
}
 



