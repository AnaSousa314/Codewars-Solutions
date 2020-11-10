/* Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust). */

function divisors(integer){
    let matriz = [];
    let n = integer;
    
    if(integer>1){
        for(let i=2; i<integer; i++){
            if (n%i==0){
                matriz.push(i);                
            }
        }
    }
    if(matriz == ""){
        return `${integer} is prime`
    }else{
        return matriz
    }
}

console.log(divisors(15))
console.log(divisors(12))
console.log(divisors(13))


/* Outra forma de resolver */
/* function divisors(integer) {
    for(var div = [], i = 2; i < integer; i++) if(integer % i == 0) div.push(i);
    return div.length > 0 ? div : integer + " is prime";
  } */
