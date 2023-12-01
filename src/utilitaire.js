// utilitaire.js

var mots = ['Chat', 'Chien', 'Oiseau', 'Cheval'];

// Fonction pour afficher la page d'apprentissage
function afficherPage(page) {
    if (page === 'apprentissage') {
        afficherPageApprentissage();
    } else if (page === 'jeu') {
        afficherPageJeu();
    }
}

window.onload = function() {
    afficherPage('apprentissage');
};

// Fonction pour prononcer un mot / une phrase
function prononcerMot(mot) {
    if ('speechSynthesis' in window) {
        var utterance = new SpeechSynthesisUtterance(mot);
        window.speechSynthesis.speak(utterance);
    } else {
        alert("La synthèse vocale n'est pas prise en charge par votre navigateur.");
    }
}

// Fonction pour afficher les cartes du jeu
function afficherCartes(mots, container, clickHandler) {
    for (var i = 0; i < mots.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        card.onclick = clickHandler;
        var image = document.createElement('img');
        image.src = "images/" + mots[i].toLowerCase() + ".jpg";
        image.style.maxWidth = "100%";
        image.alt = mots[i];
        card.appendChild(image);
        container.appendChild(card);
    }
}