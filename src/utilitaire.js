// utilitaire.js

// Liste des noms d'animaux dans différentes langues
const nomsAnimaux = {
    francais: ['Chat', 'Cheval', 'Chien', 'Chèvre', 'Mouton', 'Oiseau', 'Poisson', 'Poule', 'Vache'],
    anglais: ['Cat', 'Horse', 'Dog', 'Goat', 'Sheep', 'Bird', 'Fish', 'Chicken', 'Cow'],
    allemand: ['Katze', 'Pferd', 'Hund', 'Ziege', 'Schaf', 'Vogel', 'Fisch', 'Huhn', 'Kuh'],
    espagnol: ['Gato', 'Caballo', 'Perro', 'Cabra', 'Oveja', 'Pájaro', 'Pescado', 'Pollo', 'Vaca'],
    italien: ['Gatto', 'Cavallo', 'Cane', 'Capra', 'Pecora', 'Uccello', 'Pesce', 'Pollo', 'Mucca']
};

//Initialisation de la synthèse vocale
var voices = window.speechSynthesis.getVoices();
var mots = nomsAnimaux['francais'];

// Fonction pour mettre à jour la liste des noms en fonction de la langue sélectionnée
function mettreAJourNoms() {
    const langueSelectionnee = document.getElementById('langue').value;

    // Renvoyer la liste des noms correspondant à la langue sélectionnée
    mots = nomsAnimaux[langueSelectionnee];
}

// Fonction pour afficher la page en fonction du mode de jeu sélectionné
function afficherPage(page) {
    if (page === 'apprentissage') {
        afficherPageApprentissage();
    } else if (page === 'jeu') {
        afficherPageJeu();
    }
}

// Par défaut, on affiche la page d'apprentissage
window.onload = function() {
    afficherPage('apprentissage');
};

// Fonction pour prononcer un mot / une phrase
function prononcerMot(mot) {
    // Vérification que la synthèse vocale est prise en charge par le navigateur
    if ('speechSynthesis' in window) {
        // Création de l'objet SpeechSynthesisUtterance
        var utterance = new SpeechSynthesisUtterance(mot);
        // On récupère la liste des voix disponibles
        if(voices.length === 0){
            voices = window.speechSynthesis.getVoices();
        }
        // Sélection de la voix en fonction de la langue sélectionnée
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
        // On prononce le mot / la phrase
        window.speechSynthesis.speak(utterance);
    } else {
        // Message d'erreur si la synthèse vocale n'est pas prise en charge
        alert("La synthèse vocale n'est pas prise en charge par votre navigateur.");
    }
}

// Fonction pour récupérer un mot dans la liste des mots
function getMot(numMot){
    return mots[numMot];
}

// Fonction pour afficher les cartes du jeu
function afficherCartes(container, clickHandler) {
    for (var i = 0; i < mots.length; i++) {
        // Création de l'element html pour la carte
        var card = document.createElement('div');
        card.className = 'card';
        card.onclick = clickHandler;
        // Création de l'element html pour l'image
        var image = document.createElement('img');
        image.src = "images/" + nomsAnimaux["francais"][i] + ".jpg";
        image.style.maxWidth = "100%";
        image.alt = i;
        // Ajout de l'image dans la carte
        card.appendChild(image);
        container.appendChild(card);
    }
}