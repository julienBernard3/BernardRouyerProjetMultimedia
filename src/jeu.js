// jeu.js
var motCorrect;
var resultatElement;

// Fonction pour afficher la page du jeu
function afficherPageJeu() {
    // Initialise motCorrect avec un mot aléatoire
    motCorrect = mots[Math.floor(Math.random() * mots.length)];

    var grille = document.getElementById('grille');
    grille.innerHTML = '';

    // Ajout de la grille contenant les images
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';
    afficherCartes(mots, cardContainer, function() { verifierMot(this.firstChild.alt); });
    grille.appendChild(cardContainer);

    // Bouton de navigation pour revenir à la page d'apprentissage
    var boutonRevenirApprentissage = document.createElement('button');
    boutonRevenirApprentissage.innerText = 'Revenir à l\'Apprentissage';
    boutonRevenirApprentissage.onclick = afficherPageApprentissage;
    grille.appendChild(boutonRevenirApprentissage);

    resultatElement = document.createElement('p');
    grille.appendChild(resultatElement);

    // Prononce le mot à deviner
    prononcerMot('Voici le mot à deviner.');
    prononcerMot(motCorrect);
}

// Fonction pour vérifier la réponse de l'utilisateur lors du jeu
function verifierMot(reponseUtilisateur) {
    if (reponseUtilisateur === motCorrect) {
        resultatElement.innerText = 'Bonne réponse!';
        prononcerMot('Bien joué! Vous avez trouvé le mot correct:' + motCorrect + '.');

        motCorrect = mots[Math.floor(Math.random() * mots.length)];
        prononcerMot('Voici le nouveau mot à deviner.');
        prononcerMot(motCorrect);

    } else {
        resultatElement.innerText = 'Réponse incorrecte. Essayez encore.';
        prononcerMot('Désolé, la réponse est incorrecte.');
    }
}
