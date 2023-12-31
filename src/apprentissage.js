// apprentissage.js

// Fonction pour afficher la page d'apprentissage
function afficherPageApprentissage() {
    // Creation de la grille pour afficher les cartes
    var grille = document.getElementById('grille');
    grille.innerHTML = '';

    // Ajout de la grille contenant les images
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';
    afficherCartes(cardContainer, function() { prononcerMot(getMot(this.firstChild.alt)); });
    grille.appendChild(cardContainer);

    // Bouton pour naviger sur la partie jeu
    var boutonCommencerJeu = document.createElement('button');
    boutonCommencerJeu.innerText = 'Commencer le Jeu';
    boutonCommencerJeu.onclick = afficherPageJeu;
    grille.appendChild(boutonCommencerJeu);
}


