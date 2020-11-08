/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n){
    let binario = 0;
    if(n>=0){
      binario = n.toString(2);

      let array = binario.split("");

      let count = 0;

      for(let value of array){
        if(value ==="1"){
            count++;
        }
      }
      return count
    }else{
        return "Número negativo não é válido"
    }
}

// Outra forma de se resolver
/* countBits = n => n.toString(2).split('0').join('').length; */

console.log(countBits(1234));