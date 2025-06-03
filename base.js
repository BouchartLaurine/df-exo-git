function pairOuImpair(nombre) {
  if (nombre % 2 === 0) {
    return "Pair";
  } else {
    return "Impair";
  }
}

function verifierPair() {
  const input = document.getElementById("inputPair").value;
  const nombre = parseInt(input);
  const resultat = document.getElementById("resultatPair");

  if (isNaN(nombre)) {
    resultat.textContent = "Veuillez entrer un nombre valide.";
  } else {
    resultat.textContent = `Le nombre est : ${pairOuImpair(nombre)}`;
  }
}

function afficherPlusGrand(nombre1, nombre2) {
  if (nombre1 > nombre2) {
    return `Le plus grand est : ${nombre1}`;
  } else if (nombre2 > nombre1) {
    return `Le plus grand est : ${nombre2}`;
  } else {
    return "Les deux nombres sont égaux.";
  }
}

function comparer() {
  const n1 = parseInt(document.getElementById("nombre1").value);
  const n2 = parseInt(document.getElementById("nombre2").value);
  const resultat = document.getElementById("resultatComparaison");

  if (isNaN(n1) || isNaN(n2)) {
    resultat.textContent = "Veuillez entrer deux nombres valides.";
  } else {
    resultat.textContent = afficherPlusGrand(n1, n2);
  }
}
