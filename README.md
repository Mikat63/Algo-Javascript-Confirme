# Exercices Algorithmie Débutant et Initié

## La minute versionning 🕰️

💡 Petit rappel ! Créez un repo dans lequel vous ferez vos exercices. 
A la fin de **CHAQUE** exercices, pensez à faire un **commit** dans votre dépôt Git ! **Versionner régulièrement**, c’est la clé pour garder une trace de votre progression et éviter les mauvaises surprises en cas d’erreur 🛡️.

## ⚠️ Les exercices suivants ne sont pas forcément trié par ordre de difficultés. Si vous passez + de **30 minutes** sur un exercice, passez au suivant. ⚠️

## Exercice 1 : Boucle for

Créer une boucle for qui génère une pyramide de * dans la console. Par exemple, pour une pyramide de 5 étages, le résultat serait :

```js
*
**
***
****
*****
```



## Exercice 2 : Boucle foreach

Créer un tableau avec les noms de tes super-héros préférés. Utiliser une boucle foreach pour afficher une phrase pour chaque super-héros, par exemple "Je suis fan de [nom du super-héros]". Le résultat :

```
Je suis fan de Spiderman
Je suis fan de Captain America
Je suis fan de Wolverine
Je suis fan de Superman
...
```

## Exercice 3 : Boucle while

Créer une boucle while qui simule un compte à rebours de 10 à 0, puis affiche "Décollage !" à la fin.


## Exercice 4 : Boucles combinées

Créer un tableau avec les noms de tes amis. Utilise une boucle for pour parcourir le tableau et une boucle while à l'intérieur de la boucle for pour afficher chaque nom autant de fois que sa position dans le tableau (en commençant à 1).

Exemple :

```js
jérémy
hassan hassan
vincent vincent vincent
```

## Exercice 5.1

Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce
que la réponse convienne.

## Exercice 5.2

Ecrire un algorithme qui demande un nombre compris entre 10 et 20, jusqu’à ce que la
réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus
petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

## Exercice 5.3

Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les 10 nombres suivants.
**Par exemple** : pour 17 on affichera de 18 à 27.

## Exercice 5.4

Réécrire l'algorithme précédent, en utilisant cette fois l'instruction for

## Exercice 5.5

Ecrire un algorithme qui demande un nombre de départ, et qui ensuite écrit la table de
multiplication de ce nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :

```js
Table de 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
…
7 x 10 = 70
```

## Exercice 5.6

Ecrire un algorithme qui demande un nombre de départ, et qui calcule la somme des entiers
jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer :

```js
1 + 2 + 3 + 4 + 5 = 15
```

* NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul.

## Exercice 5.7

Écrire un algorithme qui demande un nombre de départ, et qui calcule sa factorielle.
* NB : la factorielle de 8, notée 8!, vaut
1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

## Exercice 5.8

Ecrire un algorithme qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :

```js 
Entrez le nombre numéro 1 : 12
Entrez le nombre numéro 2 : 14
...
Entrez le nombre numéro 20 : 6
Le plus grand de ces nombres est : 14
```

Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été saisie ce nombre :

```js
C’était le nombre numéro 2
```

## Exercice 5.9

Réécrire l’algorithme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.

## Exercice 5.10

Lire la suite des prix (en euros entiers et terminée par zéro) des achats d’un client. Calculer la somme qu’il doit, lire la somme qu’il paye, et simuler la remise de la monnaie en affichant les textes `"10 Euros"`, `"5 Euros"` et `"1 Euro"` autant de fois qu’il y a de coupures de chaque sorte à rendre

## Exercice 5.11

Écrire un algorithme qui permette de connaître ses chances de gagner au tiercé, quarté, quinté et autres impôts volontaires.

On demande à l’utilisateur le nombre de chevaux partants, et le nombre de chevaux joués. 

Les deux messages affichés devront être :

```js
Dans l’ordre : une chance sur X de gagner
Dans le désordre : une chance sur Y de gagner
```

X et Y nous sont donnés par la **formule** suivante, si `n` est le nombre de chevaux partants et `p` le nombre de chevaux joués (on rappelle que le signe `!` signifie "factorielle", comme dans
l'exercice 5.6 ci-dessus) :

* `X = n! / (n - p)!`
* `Y = n! / (p! * (n – p)!)`

NB : cet algorithme peut être écrit d’une manière simple, mais relativement peu performante.

Ses performances peuvent être singulièrement augmentées par une petite astuce. 

Vous commencerez par écrire la manière la plus simple, puis vous identifierez le problème, et écrirez une deuxième version permettant de le résoudre.
