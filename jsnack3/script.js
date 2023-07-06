const longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const shortArray = [1, 2]

for (let i = 0; i < longArray.length; i++) {
  if (shortArray.length < longArray.length) {
    shortArray.push(1)
  }
}
console.log(longArray, shortArray)