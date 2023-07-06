const numbersArray = [10, 2, 4, 2, 8, 6, 8, 10];
let oddSum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  if (i % 2 !== 0) {
    oddSum += numbersArray[i];
  }  
}

console.log(oddSum);