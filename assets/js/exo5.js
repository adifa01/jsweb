// Exo5


// Sélection des éléments du formulaire
const form = document.querySelector('form');
const societe = document.getElementById('societe');
const personne = document.getElementById('personne');
const adresse = document.getElementById('adresse');
const codePostal = document.getElementById('codepostal');
const ville = document.getElementById('ville');
const email = document.getElementById('email');
const environnement = document.getElementById('environnement');
const commentaires = document.getElementById('commentaires');


// Ajout de l'événement "submit" au formulaire
form.addEventListener('submit', (event) => {
   // Validation du champ "Société"
   if (societe.value.trim().length < 1) {
    alert("Veuillez saisir le nom de votre société.");
    event.preventDefault();
    setTimeout(function() { societe.focus(); }, 1000);
    return;
}

// Validation du champ "Personne à contacter"
if (personne.value.trim().length < 1) {
    alert("Veuillez saisir le nom de la personne à contacter.");
    event.preventDefault();
    setTimeout(function() { personne.focus(); }, 1000);
    return;
}

if (!/^[a-z0-9\s]+$/.test(adresse.value)) {
    alert("Veuillez saisir une adresse valide.");
    event.preventDefault();
    setTimeout(function() { adresse.focus(); }, 1000);
    return;
}
   // Validation du champ "Code postal"
   if (!codePostal.value.match(/^\d{5}$/)) {
    alert("Veuillez saisir un code postal valide (5 chiffres).");
    event.preventDefault();
    setTimeout(function() { codePostal.focus(); }, 1000);
    return;
}

// Validation du champ "Ville"
if (ville.value.trim().length < 1) {
    alert("Veuillez saisir le nom de votre ville.");
    event.preventDefault();
    setTimeout(function() { ville.focus(); }, 1000);
    return;
}

// Validation du champ "Email"
if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert("Veuillez saisir une adresse email valide.");
    event.preventDefault();
    setTimeout(function() { email.focus(); }, 1000);
    return;
}

// Validation du champ "Environnement technique"
if (environnement.value.includes('choisir') || Array.from(environnement.selectedOptions).every(option => option.value === 'choisir')) {
    alert("Veuillez sélectionner au moins une option dans la liste déroulante.");
    event.preventDefault();
    setTimeout(function() { environnement.focus(); }, 1000);
    return;
} else if (environnement.selectedOptions[0].value === 'choisir') {
    alert("Veuillez sélectionner une option valide dans la liste déroulante.");
    event.preventDefault();
    setTimeout(function() { environnement.focus(); }, 1000);
    return;
}

// Validation du champ "Commentaires"
if (commentaires.value.trim().length < 1) {
    alert("Veuillez remplir le champ Commentaires.");
    event.preventDefault();
    setTimeout(function() { commentaires.focus(); }, 1000);
    return;
}
});
  

// J'ai dû déplacer l'exercice 5 dans une autre extension à côté, car l'exercice 4 empêchait son exécution.