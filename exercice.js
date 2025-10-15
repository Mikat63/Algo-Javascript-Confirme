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

// Exercice 4 : Boucles combinées :
let arrayFriends = ["Hugo", "Jonathan", "Kevin", "Mathieu", "William"];

for (let i = 0; i < arrayFriends.length; i++) {
  const prenom = arrayFriends[i];
  let j = 0;
  let ligne = "";
  while (j < i + 1) {
    ligne += prenom + " ";
    j++;
  }
  console.log(ligne);
}

// Exercice 5.1 :
// Exercice 5.2 :
// Exercice 5.3 :
// Exercice 5.4 :
// Exercice 5.5 :
// Exercice 5.6 :
// Exercice 5.7 :
// Exercice 5.8 :
// Exercice 5.9 :
// Exercice 5.10 :
// Exercice 5.11 :
