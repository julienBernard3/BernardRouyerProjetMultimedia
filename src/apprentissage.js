// apprentissage.js

// Fonction pour afficher la page d'apprentissage
function afficherPageApprentissage() {
    var grille = document.getElementById('grille');
    grille.innerHTML = '';

    // Ajout de la grille contenant les images
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';
    afficherCartes(mots, cardContainer, function() { prononcerMot(this.firstChild.alt); });
    grille.appendChild(cardContainer);

    // Bouton pour naviger sur la partie jeu
    var boutonCommencerJeu = document.createElement('button');
    boutonCommencerJeu.innerText = 'Commencer le Jeu';
    boutonCommencerJeu.onclick = afficherPageJeu;
    grille.appendChild(boutonCommencerJeu);
}


