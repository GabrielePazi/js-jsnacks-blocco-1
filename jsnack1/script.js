const nameArray = ["Luca", "Matteo", "Paolo", "Fabio", "Mario"];
const lastNameArray = ["Rossi", "Verdi", "Bianchi", "Polo", "Volo"];
let guestArray = [];

for (let i = 0; i < 5; i++) {

  const randomName = Math.floor((Math.random() * 5) + 1);
  const randomLastName = Math.floor((Math.random() * 5) + 1);

  let randomGuest = nameArray[randomName - 1] + " " + lastNameArray[randomLastName - 1];
  
  guestArray.push(randomGuest);

  //check if randomGuest is already in guestArray
  for (let j = 0; j < guestArray.length - 1; j++) {
    if (randomGuest === guestArray[j]) {
      guestArray.pop();
      i--;
    }
  }
}
console.log(guestArray);