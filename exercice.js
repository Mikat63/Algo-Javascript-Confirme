// Exercice 1 : Boucle for :
let pyramidStars = "";

for (let i = 0; i < 5; i++) {
  pyramidStars += "*";
  console.log(pyramidStars);
}
// Exercice 2 : Boucle foreach :
let arraySuperHeros = [
  "Vénom",
  "Punisher",
  "Hulk",
  "Deadpool",
  "Spider-Man",
  "Wolverine",
];
const sentence = "je suis fan de ";

arraySuperHeros.forEach((element) => {
  let result = sentence + element;
  console.log(result);
});

// Exercice 3 : Boucle while :
let countDown = 10;

while (countDown > 0) {
  console.log(countDown);
  countDown--;

  if (countDown === 0) {
    countDown = "Décollage !";
  }
}

console.log(countDown);

// // Exercice 4 : Boucles combinées :
// let arrayFriends = ["Hugo", "Jonathan", "Kevin", "Mathieu", "William"];

// for (let i = 0; i < arrayFriends.length; i++) {
//   const prenom = arrayFriends[i];
//   let j = 0;
//   let ligne = "";
//   while (j < i + 1) {
//     ligne += prenom + " ";
//     j++;
//   }
//   console.log(ligne);
// }

// // Exercice 5.1 :
// let numberUser = Number(prompt("Entrez un nombre entre 1 et 3"));

// while (numberUser < 1 || numberUser > 3) {
//   alert("Raté !");
//   numberUser = Number(prompt("Entrez un nombre compris entre 1 et 3"));
// }

// // Exercice 5.2 :
// let numberUserBetweenTenAndTwenty = Number(prompt(
//   "Entrez un nombre compris entre 10 et 20"
// ));

// while (
//   numberUserBetweenTenAndTwenty < 10 ||
//   numberUserBetweenTenAndTwenty > 20
// ) {
//   if (numberUserBetweenTenAndTwenty < 10) {
//     alert("Plus grand!");
//     numberUserBetweenTenAndTwenty =   Number(prompt(
//       "Entrez un nombre compris entre 10 et 20"
//     ));
//   } else if (numberUserBetweenTenAndTwenty > 20) {
//     alert("Plus petit!");
//     numberUserBetweenTenAndTwenty = Number(prompt(
//       "Entrez un nombre compris entre 10 et 20"
//     ));
//       }
// }

// alert("Bravo!");

// Exercice 5.3 :
// let numberUserTenNextWithWhile =   Number(prompt(
//     "Entrez un nombre"));
// let count = 1;

// while(count <= 10) {
//   alert(numberUserTenNextWithWhile + count);
//   count++;
// }

// Exercice 5.4 :
// let numberUserTenNextWithFor =   Number(prompt(
//     "Entrez un nombre"));

//   for (let i = 1; i <= 10; i++) {
//     alert(numberUserTenNext + i);
//   }

// // Exercice 5.5 :
//    let numberUserToMultiply =   Number(prompt(
//        "Entrez un nombre"));
//     let multiplicationTable = "";

//   for(let i = 0; i <= 10; i++) {
//     let resultMultiply = numberUserToMultiply * i;
//     multiplicationTable += `${numberUserToMultiply} x ${i} = ${resultMultiply}\n`;
//   }

//   alert(multiplicationTable);

// Exercice 5.6 :
//  let numberUserToMultiply =   Number(prompt(
//        "Entrez un nombre"));
//   let resultCount = 0;

// for (let i = 1; i <= numberUserToMultiply; i++) {
//   resultCount += i;
// }

// alert(resultCount);

// Exercice 5.7 :
// let numberUserTofactorize = Number(prompt("Entrez un nombre"));
// let resultFactorize = 1;

// for (let i = 1; i <= numberUserTofactorize; i++) {
//   resultFactorize *= i;
// }

// console.log(`Le factorielle de ${numberUserTofactorize} est ${resultFactorize}`);

// // Exercice 5.8 :
// let mostBiggerUserNumber = 0;
// let count = 1;
// let positionMostBigger = 0;

// while (count <= 20) {
//   let input = prompt(`Entrez le nombre ${count}`);

//   if (input === null) {
//     alert("Le champ ne peut être vide !");
//   } else if (input.trim() === "") {
//     alert("Les esspaces ne sont pas autorisés !");
//   } else if (isNaN(input)) {
//     alert("Veuillez entrer un nombre uniquement !");
//   } else {
//     let promptNumberUser = Number(input);

//     if (promptNumberUser > mostBiggerUserNumber) {
//       mostBiggerUserNumber = promptNumberUser;
//       positionMostBigger = count;
//     }
//     count++;
//   }
// }

// alert(` Le nombre le plus grand saisi est ${mostBiggerUserNumber}, saisi en position ${positionMostBigger} sur ${count - 1}`);

// Exercice 5.9 :
let mostBiggerUserNumber = 0;
let count = 1;
let positionMostBigger = 0;
let input = prompt(`Entrez le nombre ${count}`);

while (input !== null) {
   let promptNumberUser = Number(input);

  if (input.trim() === "") {
    alert("Le champ ne peut être vide !");
  } else if (isNaN(input)) {
    alert("Veuillez entrer un nombre uniquement !");
  } else {
   

    if (promptNumberUser === 0) {
      break;
    }

    if (promptNumberUser > mostBiggerUserNumber) {
      mostBiggerUserNumber = promptNumberUser;
      positionMostBigger = count;
    }
    count++;
  }
  input = prompt(`Entrez le nombre ${count}`);
}

alert(
  ` Le nombre le plus grand saisi est ${mostBiggerUserNumber}, saisi en position ${positionMostBigger} sur ${
    count - 1
  }`
);

// Exercice 5.10 :
// Exercice 5.11 :
