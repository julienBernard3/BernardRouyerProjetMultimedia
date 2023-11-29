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
