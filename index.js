

// ---------------------------------ExoSérie2----------------------------------------------------------

/*
function sommeChiffres(n) {
  let somme = 0;
  String(123).split('').forEach(chiffre => {
    somme += Number(chiffre); // Convertit le caractère en nombre et l'ajoute à la somme
  });
  return somme; // Retourne la somme des chiffres
}
console.log(sommeChiffres(123)); // Affiche 6
*/

//------------------------------------------------------------------------------------------------------------------------------------------
 
// ---------------------Fonction FizzBuzz ↓ Exo10-------------------------------------------

/*
function FizzBuzz () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); // Affiche "FizzBuzz" si le nombre est divisible par 3 et 5
    } else if (i % 3 === 0) {
      console.log("Fizz"); // Affiche "Fizz" si le nombre est divisible par 3
    } else if (i % 5 === 0) {
      console.log("Buzz"); // Affiche "Buzz" si le nombre est divisible par 5
    } else {
      console.log(i); // Affiche le nombre lui-même s'il n'est pas divisible par 3 ou 5
    }
  }
}

FizzBuzz(8); // Appel de la fonction pour exécuter le FizzBuzz
*/

// -----Fonction plus grand élément d'un tableau ↓ Exo9---------------

/*
function plusGrandElement(tab) {
  let max = tab[0]; // Initialiser max avec le premier élément du tableau
  for (let i = 1; i < tab.length; i++) { // Parcourir le tableau à partir du deuxième élément
    if (tab[i] > max) { // Si l'élément courant est plus grand que max
      max = tab[i]; // Mettre à jour max
    }
  }
  return max; // Retourner le plus grand élément trouvé
}

console.log(plusGrandElement([1, 2, 3, 4, 5])); // Affiche 5
console.log(plusGrandElement([85,36,159,5,23,78])) //Affiche 159
*/

// ---------------------------Fonction inverser une chaine ↓ Exo8-----------------------------------------------
/*
function inverserChaine(mot) {
  let motInverse = ""; // Initialiser une chaîne vide pour stocker le résultat
  for (let i = mot.length - 1; i >= 0; i--) { // Parcourir le mot de la fin au début
    motInverse += mot[i]; // Ajouter chaque caractère à la chaîne inversée
  }
  return motInverse; 
}
console.log(inverserChaine("Bonjour")); 
console.log(inverserChaine("AuRevoir"));
*/


// ---------------------------Fonctions compter les voyelles ↓ Exo7-------------------------------------------

/*
function compterVoyelles(texte){
  let voyelles = "aeiouyAEIOUY";
  let compteur = 0;     
 // Parcourir chaque caractère du texte
 for (let lettre of texte) {
    // Vérifier si le caractère est une voyelle
    if (voyelles.includes(lettre)) {
      compteur++; // Incrémenter le compteur si c'est une voyelle
    }
  }
  return compteur; 
}

console.log(compterVoyelles("Bonjour")); // Affiche 3
*/

// ---------------------------Fonction pair/impair ↓ Exo6-----------------------------------------------

/*
function estpanlindrome(mot) {
  const motInverse = mot.split('').reverse().join('');
  return mot === motInverse;
}
console.log(estpanlindrome("kayak"));
console.log(estpanlindrome("bonjour"));
*/

// ---------------------------Fonction Factorielle ↓ Exo5----------------------------------------------
 /*
 function factorielle(n) {
  let resultat = 1; // Départ 1 pour la multiplication
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
 }
 console.log(factorielle(5));
 */


// ---------------------------EXO DU 03/06/2025  ↓-----------------------------------------------

 /* 
    function check (pairimpair) {
      let nbr;
      nbr= Number(document.getElementById("myInput").value);
      if (nbr % 2 == 0 ) {
     alert("Nombre pair");
      }else {
      alert("Nombre impair");
    }
    }

  */

    // --------------------------Fonction pair/impair ↑ Exo1-----------------------------------------------

    /*
    function maxDeux (a, b) {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    }

    console.log(maxDeux(5,10)); //Pour afficher le résultat
    */

// ---------------------------Fonction le plus grand chiffre ↑ Exo2-------------------------------------------

/*
 function tableMultiplication(n) {
   for (let i = 0; i < 10; i++) {
   console.log(n + "x" + i + "=" + (n * i ));
  }
}

tableMultiplication(5);
*/

// ---------------------------Fonction Table de multiplication ↑ Exo3----------------------------------------------
/*
function sommejusqua(n){
  let somme = 0;
  for (let i = 1; i <= n; i++){
    somme += i;}
    return somme;
}
       
console.log(sommejusqua(5));
*/

// ---------------------------Fontion sommejusqua ↑ Exo4----------------------------------------------
/*
function factorielle(n) {
  let resultat = 1; // Départ 1 pour la multiplication
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
console.log(factorielle(5)); 
*/

// ---------------------------Fonction multiplication ↑ Exo5----------------------------------------------


