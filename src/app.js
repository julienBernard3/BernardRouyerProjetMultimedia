var mots = ['Chat', 'Chien', 'Oiseau']; // Ajoutez autant de mots que nécessaire
var motCorrect;
var resultatElement;


// Fonction pour afficher la page d'apprentissage
function afficherPageApprentissage() {
    var contenu = document.getElementById('contenu');
    contenu.innerHTML = '';

    // Ajoutez du contenu spécifique à la page d'apprentissage ici
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';
    afficherCartesApprentissage(mots, cardContainer, function() { prononcerMot(this.firstChild.alt); });
    contenu.appendChild(cardContainer);

    // Bouton pour commencer le jeu
    var boutonCommencerJeu = document.createElement('button');
    boutonCommencerJeu.innerText = 'Commencer le Jeu';
    boutonCommencerJeu.onclick = afficherPageJeu;
    contenu.appendChild(boutonCommencerJeu);

    resultatElement = document.createElement('p');
    contenu.appendChild(resultatElement);
}

// Fonction pour afficher les cartes avec les images correspondant aux mots en mode apprentissage
function afficherCartesApprentissage(mots, container, clickHandler) {
    for (var i = 0; i < mots.length; i++) {
        var card = document.createElement('div');
        card.className = 'card';
        console.log(mots[i]);
        card.onclick = clickHandler;
        var image = document.createElement('img');
        image.src = "images/" + mots[i].toLowerCase() + ".jpg"; // Remplacez par le lien réel
        image.alt = mots[i];
        card.appendChild(image);
        container.appendChild(card);
    }
}

// Fonction pour prononcer un mot
function prononcerMot(mot) {
    // Vérifiez si la synthèse vocale est prise en charge par le navigateur
    if ('speechSynthesis' in window) {
        // Créez une nouvelle instance de l'objet SpeechSynthesisUtterance
        var utterance = new SpeechSynthesisUtterance(mot);

        // Utilisez l'API Web Speech pour prononcer le mot
        window.speechSynthesis.speak(utterance);
    } else {
        alert("La synthèse vocale n'est pas prise en charge par votre navigateur.");
    }
}

// Fonction pour afficher la page du jeu
function afficherPageJeu() {
    var contenu = document.getElementById('contenu');
    contenu.innerHTML = '';

    // Ajoutez du contenu spécifique à la page du jeu ici
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';
    afficherCartesApprentissage(mots, cardContainer, function() { verifierMot(this.firstChild.alt); });
    contenu.appendChild(cardContainer);

    // Bouton pour revenir à la page d'apprentissage
    var boutonRevenirApprentissage = document.createElement('button');
    boutonRevenirApprentissage.innerText = 'Revenir à l\'Apprentissage';
    boutonRevenirApprentissage.onclick = afficherPageApprentissage;
    contenu.appendChild(boutonRevenirApprentissage);

    resultatElement = document.createElement('p');
    contenu.appendChild(resultatElement);
}


// Fonction pour afficher la page spécifiée
function afficherPage(page) {
    if (page === 'apprentissage') {
        afficherPageApprentissage();
    } else if (page === 'jeu') {
        afficherPageJeu();
    }
}

// Initialisez la page avec la partie d'apprentissage au chargement de la page (facultatif)
window.onload = function() {
    afficherPage('apprentissage');
};


