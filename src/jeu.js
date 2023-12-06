// jeu.js
var motCorrect;
var resultatElement;
var nbReponsesRestantes;
const nbReponsesMax = 3;

// Fonction pour afficher la page du jeu et initialiser le jeu
function afficherPageJeu() {
    // Initialise motCorrect avec un mot aléatoire
    motCorrect = Math.floor(Math.random() * mots.length);
    nbReponsesRestantes = nbReponsesMax;

    // Creation de la grille pour afficher les cartes
    var grille = document.getElementById('grille');
    grille.innerHTML = '';

    // Crée un bouton pour réécouter le mot à deviner
    var boutonReecouterMot = document.createElement('button');
    boutonReecouterMot.innerText = 'Réécouter le mot';
    boutonReecouterMot.onclick = direMotADeviner; // Appelle la fonction direMotADeviner lors du clic sur le bouton
    grille.appendChild(boutonReecouterMot);

    // Ajout des images dans la grille
    var cardContainer = document.createElement('div');
    cardContainer.className = 'grid-container';

    // Affiche les cartes dans le conteneur avec la fonction afficherCartes
    // Le deuxième paramètre est une fonction de rappel pour vérifier la réponse lorsque la carte est cliquée
    afficherCartes(cardContainer, function() { verifierMot(this.firstChild.alt); });

    grille.appendChild(cardContainer);

    // Bouton de navigation pour revenir à la page d'apprentissage
    var boutonRevenirApprentissage = document.createElement('button');
    boutonRevenirApprentissage.innerText = 'Revenir à l\'Apprentissage';
    boutonRevenirApprentissage.onclick = afficherPageApprentissage;
    grille.appendChild(boutonRevenirApprentissage);

    resultatElement = document.createElement('p');
    grille.appendChild(resultatElement);

    direMotADeviner();
}

function direMotADeviner(){
    // Prononce le mot à deviner en fonction de la langue
    switch (document.getElementById('langue').value) {
        case 'francais':
            prononcerMot('Voici le mot à deviner: '+getMot(motCorrect)+'. Nombre de réponses restantes : '+nbReponsesRestantes);
            break;
        case 'anglais':
            prononcerMot('Here is the word to guess: '+getMot(motCorrect)+'. Number of remaining answers: '+nbReponsesRestantes);
            break;
        case 'allemand':
            prononcerMot('Hier ist das zu erratende Wort: '+getMot(motCorrect)+'. Anzahl der verbleibenden Antworten: '+nbReponsesRestantes);
            break;
        case 'italien':
            prononcerMot('Ecco la parola da indovinare: '+getMot(motCorrect)+'. Numero di risposte rimanenti: '+nbReponsesRestantes);
            break;
        case 'espagnol':
            prononcerMot('Aquí está la palabra a adivinar: '+getMot(motCorrect)+'. Número de respuestas restantes: '+nbReponsesRestantes);
            break;
    }
}

// Fonction pour vérifier la réponse de l'utilisateur lors du jeu
// La synthèse vocale est utilisée pour donner le résultat
function verifierMot(reponseUtilisateur) {
    let messageBonneReponse, messageMauvaiseReponse, messageMauvaiseReponseTexte, messageNouveauMot, messageNombreDeTentativeTropGrande;

    // Sélection du message en fonction de la langue
    switch (document.getElementById('langue').value) {
        case 'francais':
            messageBonneReponse = 'Bien joué! Vous avez trouvé le mot correct.';
            messageMauvaiseReponse = 'Désolé! Réponse incorrecte. Essayez encore. Le mot à deviner est : ' + getMot(motCorrect)+ '. Nombre de réponses restantes : ';
            messageMauvaiseReponseTexte = 'Désolé! Réponse incorrecte. Essayez encore. Nombre de réponses restantes : ';
            messageNouveauMot = 'Voici le nouveau mot à deviner.';
            messageNombreDeTentativeTropGrande = 'Désolé! Réponse incorrecte. Vous avez utilisé toutes vos tentatives. Le mot à deviner était : ' + getMot(motCorrect);
            break;
        case 'anglais':
            messageBonneReponse = 'Good job! You got the correct word.';
            messageMauvaiseReponse = 'Sorry! Incorrect answer. Try again. The word to guess is: ' + getMot(motCorrect) + '. Number of remaining answers: ';
            messageMauvaiseReponseTexte = 'Sorry! Incorrect answer. Try again. Number of remaining answers: ';
            messageNouveauMot = 'Here is the new word to guess.';
            messageNombreDeTentativeTropGrande = 'Sorry! Incorrect answer. You have used all your attempts. The word to guess was: ' + getMot(motCorrect);
            break;
        case 'allemand':
            messageBonneReponse = 'Gut gemacht! Sie haben das richtige Wort gefunden.';
            messageMauvaiseReponse = 'Entschuldigung! Falsche Antwort. Versuchen Sie es erneut. Das zu erratende Wort lautet: ' + getMot(motCorrect) + '. Anzahl der verbleibenden Antworten: ';
            messageMauvaiseReponseTexte = 'Entschuldigung! Falsche Antwort. Versuchen Sie es erneut. Anzahl der verbleibenden Antworten: ' ;
            messageNouveauMot = 'Hier ist das neue Wort zum Erraten.';
            messageNombreDeTentativeTropGrande = 'Entschuldigung! Falsche Antwort. Sie haben alle Versuche verwendet. Das zu erratende Wort war: ' + getMot(motCorrect);
            break;
        case 'italien':
            messageBonneReponse = 'Ottimo lavoro! Hai indovinato la parola corretta.';
            messageMauvaiseReponse = 'Scusa! Risposta incorretta. Riprova. La parola da indovinare è: ' + getMot(motCorrect) + '. Numero di risposte rimanenti: ' ;
            messageMauvaiseReponseTexte = 'Scusa! Risposta incorretta. Riprova. Numero di risposte rimanenti: ';
            messageNouveauMot = 'Ecco la nuova parola da indovinare.';
            messageNombreDeTentativeTropGrande = 'Scusa! Risposta incorretta. Hai usato tutti i tuoi tentativi. La parola da indovinare era: ' + getMot(motCorrect);
            break;
        case 'espagnol':
            messageBonneReponse = '¡Bien hecho! Has acertado la palabra correcta.';
            messageMauvaiseReponse = '¡Siento! Respuesta incorrecta. Inténtalo de nuevo. La palabra a adivinar es: ' + getMot(motCorrect) + '. Número de respuestas restantes: ' ;
            messageMauvaiseReponseTexte = '¡Siento! Respuesta incorrecta. Inténtalo de nuevo. Número de respuestas restantes: ' ;
            messageNouveauMot = 'Aquí tienes la nueva palabra para adivinar.';
            messageNombreDeTentativeTropGrande = '¡Siento! Respuesta incorrecta. Has usado todos tus intentos. La palabra a adivinar era: ' + getMot(motCorrect);
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
        nbReponsesRestantes = 3;

    // Sinon, on affiche un message pour indiquer que la réponse est incorrecte et on redonne le mot à deviner
    } else {
        // Si l'utilisateur a encore des tentatives, on lui indique le nombre de tentatives restantes
        if(nbReponsesRestantes > 1) {
            nbReponsesRestantes--;
            resultatElement.innerText = messageMauvaiseReponseTexte+nbReponsesRestantes;
            prononcerMot(messageMauvaiseReponse+nbReponsesRestantes);
        } else {
            // Si l'utilisateur n'a plus de tentatives, on lui indique le mot qui était à deviner et on choisit un nouveau mot
            resultatElement.innerText = messageNombreDeTentativeTropGrande;
            prononcerMot(messageNombreDeTentativeTropGrande);
            // On choisit aléatoirement un nouveau mot à deviner
            motCorrect = Math.floor(Math.random() * mots.length);
            prononcerMot(messageNouveauMot);
            prononcerMot(getMot(motCorrect));
            nbReponsesRestantes = nbReponsesMax;
        }
    }
}

