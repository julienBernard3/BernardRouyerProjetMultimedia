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
    switch (document.getElementById('langue').value) {
        case 'francais':
            prononcerMot('Voici le mot à deviner:');
            break;
        case 'anglais':
            prononcerMot('Here is the word to guess:');
            break;
        case 'allemand':
            prononcerMot('Hier ist das zu erratende Wort:');
            break;
        case 'italien':
            prononcerMot('Ecco la parola da indovinare:');
            break;
        case 'espagnol':
            prononcerMot('Aquí está la palabra a adivinar:');
            break;
    }
    prononcerMot(motCorrect);
}

// Fonction pour vérifier la réponse de l'utilisateur lors du jeu
function verifierMot(reponseUtilisateur, langue) {
    let messageBonneReponse, messageMauvaiseReponse, messageNouveauMot, messageFourni;

    switch (document.getElementById('langue').value) {
        case 'francais':
            messageBonneReponse = 'Bien joué! Vous avez trouvé le mot correct :';
            messageMauvaiseReponse = 'Désolé! Réponse incorrecte. Essayez encore. Le mot à deviner est :';
            messageNouveauMot = 'Voici le nouveau mot à deviner.';
            break;
        case 'anglais':
            messageBonneReponse = 'Good job! You got the correct word:';
            messageMauvaiseReponse = 'Sorry! Incorrect answer. Try again. The word to guess is:';
            messageNouveauMot = 'Here is the new word to guess.';
            break;
        case 'allemand':
            messageBonneReponse = 'Gut gemacht! Sie haben das richtige Wort gefunden:';
            messageMauvaiseReponse = 'Entschuldigung! Falsche Antwort. Versuchen Sie es erneut. Das zu erratende Wort lautet:';
            messageNouveauMot = 'Hier ist das neue Wort zum Erraten.';
            break;
        case 'italien':
            messageBonneReponse = 'Ottimo lavoro! Hai indovinato la parola corretta:';
            messageMauvaiseReponse = 'Scusa! Risposta incorretta. Riprova. La parola da indovinare è:';
            messageNouveauMot = 'Ecco la nuova parola da indovinare.';
            break;
        case 'espagnol':
            messageBonneReponse = '¡Bien hecho! Has acertado la palabra correcta:';
            messageMauvaiseReponse = '¡Siento! Respuesta incorrecta. Inténtalo de nuevo. La palabra a adivinar es:';
            messageNouveauMot = 'Aquí tienes la nueva palabra para adivinar.';
            break;
    }

    if (reponseUtilisateur === motCorrect) {
        resultatElement.innerText = messageBonneReponse ;
        prononcerMot( messageBonneReponse );

        motCorrect = mots[Math.floor(Math.random() * mots.length)];
        prononcerMot(messageNouveauMot);
        prononcerMot(motCorrect);

    } else {
        resultatElement.innerText = messageMauvaiseReponse ;
        prononcerMot( messageMauvaiseReponse + motCorrect);
    }
}

