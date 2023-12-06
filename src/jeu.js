// jeu.js
var motCorrect;
var resultatElement;

// Fonction pour afficher la page du jeu
function afficherPageJeu() {
    // Initialise motCorrect avec un mot aléatoire
    motCorrect = Math.floor(Math.random() * mots.length);

    // Creation de la grille pour afficher les cartes
    var grille = document.getElementById('grille');
    grille.innerHTML = '';

    // Ajout des images dans la grille
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';
    afficherCartes(cardContainer, function() { verifierMot(this.firstChild.alt); });
    grille.appendChild(cardContainer);

    // Bouton de navigation pour revenir à la page d'apprentissage
    var boutonRevenirApprentissage = document.createElement('button');
    boutonRevenirApprentissage.innerText = 'Revenir à l\'Apprentissage';
    boutonRevenirApprentissage.onclick = afficherPageApprentissage;
    grille.appendChild(boutonRevenirApprentissage);

    resultatElement = document.createElement('p');
    grille.appendChild(resultatElement);

    // Prononce le mot à deviner en fonction de la langue
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
    prononcerMot(getMot(motCorrect));
}

// Fonction pour vérifier la réponse de l'utilisateur lors du jeu
// La synthèse vocale est utilisée pour donner le résultat
function verifierMot(reponseUtilisateur) {
    let messageBonneReponse, messageMauvaiseReponse, messageMauvaiseReponseTexte, messageNouveauMot;

    // Sélection du message en fonction de la langue
    switch (document.getElementById('langue').value) {
        case 'francais':
            messageBonneReponse = 'Bien joué! Vous avez trouvé le mot correct.';
            messageMauvaiseReponse = 'Désolé! Réponse incorrecte. Essayez encore. Le mot à deviner est :';
            messageMauvaiseReponseTexte = 'Désolé! Réponse incorrecte. Essayez encore.';
            messageNouveauMot = 'Voici le nouveau mot à deviner.';
            break;
        case 'anglais':
            messageBonneReponse = 'Good job! You got the correct word.';
            messageMauvaiseReponse = 'Sorry! Incorrect answer. Try again. The word to guess is:';
            messageMauvaiseReponseTexte = 'Sorry! Incorrect answer. Try again.';
            messageNouveauMot = 'Here is the new word to guess.';
            break;
        case 'allemand':
            messageBonneReponse = 'Gut gemacht! Sie haben das richtige Wort gefunden.';
            messageMauvaiseReponse = 'Entschuldigung! Falsche Antwort. Versuchen Sie es erneut. Das zu erratende Wort lautet:';
            messageMauvaiseReponseTexte = 'Entschuldigung! Falsche Antwort. Versuchen Sie es erneut.';
            messageNouveauMot = 'Hier ist das neue Wort zum Erraten.';
            break;
        case 'italien':
            messageBonneReponse = 'Ottimo lavoro! Hai indovinato la parola corretta.';
            messageMauvaiseReponse = 'Scusa! Risposta incorretta. Riprova. La parola da indovinare è:';
            messageMauvaiseReponseTexte = 'Scusa! Risposta incorretta. Riprova.';
            messageNouveauMot = 'Ecco la nuova parola da indovinare.';
            break;
        case 'espagnol':
            messageBonneReponse = '¡Bien hecho! Has acertado la palabra correcta.';
            messageMauvaiseReponse = '¡Siento! Respuesta incorrecta. Inténtalo de nuevo. La palabra a adivinar es:';
            messageMauvaiseReponseTexte = '¡Siento! Respuesta incorrecta. Inténtalo de nuevo.';
            messageNouveauMot = 'Aquí tienes la nueva palabra para adivinar.';
            break;
    }

    // Si la réponse de l'utilisateur est correcte, on affiche un message de réussite
    if (getMot(reponseUtilisateur) === getMot(motCorrect)) {
        resultatElement.innerText = messageBonneReponse ;
        prononcerMot( messageBonneReponse );
        // On choisit aléatoirement un nouveau mot à deviner
        motCorrect = Math.floor(Math.random() * mots.length);
        prononcerMot(messageNouveauMot);
        prononcerMot(getMot(motCorrect));

    // Sinon, on affiche un message pour indiquer que la réponse est incorrecte et on redonne le mot à deviner
    } else {
        resultatElement.innerText = messageMauvaiseReponseTexte ;
        prononcerMot( messageMauvaiseReponse + getMot(motCorrect));
    }
}

