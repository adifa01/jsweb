
// Exo1

var valeurs = []; // tableau pour stocker les valeurs saisies
var saisie; // variable pour stocker la saisie en cours

// boucle de saisie des valeurs
do {
  saisie = parseInt(window.prompt("Entrez une valeur numérique (0 pour arrêter la saisie)"));
  if (saisie !== 0 && !isNaN(saisie)) {
    valeurs.push(saisie);
  }
} while (saisie !== 0);

// calcul du nombre de valeurs, de la somme et de la moyenne
var nombreValeurs = valeurs.length;
var somme = 0;
for (var i = 0; i < nombreValeurs; i++) {
  somme += valeurs[i];
}
var moyenne = somme / nombreValeurs;

alert(`Nombre de valeurs saisie : ${nombreValeurs}
Somme des valeurs saisies : ${somme}
Moyenne des valeurs saisies : ${moyenne}`);

// affichage des résultats dans la console
console.log("Nombre de valeurs saisies : " + nombreValeurs);
console.log("Somme des valeurs saisies : " + somme);
console.log("Moyenne des valeurs saisies : " + moyenne);


// Exo2

alert("Coucou <strong>!</strong>");
console.log("Ah que Coucou !");
document.write("<p>Coucou beuh !</p>");


//Exo3 
var reponse1 = window.prompt("Saisissez un texte puis pressez le bouton 'Contrôle'")
function showInfo() {
  alert('Vous avez saisi :'+" " +reponse1);
}

// Exo4


  var magicNumber = Math.floor(Math.random() * 101); // générer un nombre aléatoire entre 0 et 100
  var label1 = document.getElementById("label1"); // récupérer l'élément label1
  var textBox1 = document.getElementById("textBox1"); // récupérer l'élément textBox1
  var button1 = document.getElementById("button1"); // récupérer l'élément button1

  button1.addEventListener("click", function() { // ajouter un événement click au bouton
    var userNumber = parseInt(textBox1.value); // convertir la valeur de textBox1 en nombre entier
    if (isNaN(userNumber)) { // si la conversion a échoué, afficher un message d'erreur
      label1.textContent = "Veuillez entrer un nombre entier.";
    } else { // sinon, comparer le nombre saisi avec le nombre magique
      if (userNumber < magicNumber) {
        label1.textContent = "Trop petit.";
      } else if (userNumber > magicNumber) {
        label1.textContent = "Trop grand.";
      } else {
        label1.textContent = "Bravo, vous avez trouvé le nombre magique !";
      }
    }
  });

