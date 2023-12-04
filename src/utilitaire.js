// utilitaire.js

const nomsAnimaux = {
    francais: ['Chat', 'Cheval', 'Chien', 'Chèvre', 'Mouton', 'Oiseau', 'Poisson', 'Poule', 'Vache'],
    anglais: ['Cat', 'Horse', 'Dog', 'Goat', 'Sheep', 'Bird', 'Fish', 'Chicken', 'Cow'],
    allemand: ['Katze', 'Pferd', 'Hund', 'Ziege', 'Schaf', 'Vogel', 'Fisch', 'Huhn', 'Kuh'],
    espagnol: ['Gato', 'Caballo', 'Perro', 'Cabra', 'Oveja', 'Pájaro', 'Pescado', 'Pollo', 'Vaca'],
    italien: ['Gatto', 'Cavallo', 'Cane', 'Capra', 'Pecora', 'Uccello', 'Pesce', 'Pollo', 'Mucca']
};
var voices = window.speechSynthesis.getVoices();

var mots = nomsAnimaux['francais'];

function mettreAJourNoms() {
    const langueSelectionnee = document.getElementById('langue').value;

    // Renvoyer la liste des noms correspondant à la langue sélectionnée
    mots = nomsAnimaux[langueSelectionnee];
}

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
        // Sélection de la voix en fonction de la langue
        if(voices.length === 0){
            voices = window.speechSynthesis.getVoices();
        }
        console.log(voices);
        switch (document.getElementById('langue').value) {
            case 'francais':
                utterance.voice = voices.find(voice => voice.lang === 'fr-FR');
                break;
            case 'anglais':
                utterance.voice = voices.find(voice => voice.lang === 'en-US');
                break;
            case 'allemand':
                utterance.voice = voices.find(voice => voice.lang === 'de-DE');
                break;
            case 'espagnol':
                utterance.voice = voices.find(voice => voice.lang === 'es-ES');
                break;
            case 'italien':
                utterance.voice = voices.find(voice => voice.lang === 'it-IT');
                break;
        }
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
        image.src = "images/" + nomsAnimaux["francais"][i] + ".jpg";
        image.style.maxWidth = "100%";
        image.alt = mots[i];
        card.appendChild(image);
        container.appendChild(card);
    }
}