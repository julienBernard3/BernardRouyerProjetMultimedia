## Contenu du Projet
Le projet est constitué de trois fichiers JavaScript distincts, chacun ayant un rôle spécifique :

+ apprentissage.js: Gère l'affichage de la page d'apprentissage, permettant à l'utilisateur de visualiser les images et d'entendre la prononciation des mots.

+ jeu.js: Gère l'affichage de la page de jeu, où l'utilisateur peut tester ses connaissances en associant les images aux mots correspondants. La synthèse vocale est utilisée pour fournir des indices auditifs.

+ utilitaire.js: Contient des fonctions utilitaires, notamment la gestion des langues et la prononciation des mots.



## Structure de la Page HTML
Le fichier HTML (index.html) contient la structure de base de la page, incluant les styles CSS. Il contient également le menu déroulant pour choisir la langue
ainsi que la redirection pour les trois scripts JavaScript.

## Utilisation du Projet
+ Ouvrez le fichier index.html dans à l'aide d'un navigateur web (idéalement Chrome).

+ Choisissez la langue d'apprentissage dans le menu déroulant (français, anglais, allemand, espagnol, italien).

+ Cliquer sur une image pour entendre le mot correspondant.

+ Commencez le jeu en cliquant sur le bouton "Commencer le Jeu" sur la page d'apprentissage.

+ Dans la page de jeu, associez les images aux mots correspondants en cliquant sur les cartes. Utilisez le bouton "Réécouter le Mot" pour entendre à nouveau le mot à deviner.

+ Un retour audio est donné à chaque fois qu'une carte est sélectionnée. Attention, il faut attendre la fin du retour audio avant de sélectionner une autre carte.

+ Cliquer sur le bouton "Revenir à l'Apprentissage" pour revenir à la page d'apprentissage.


## Gestion des Données
Les données des noms d'animaux dans différentes langues sont stockées dans le fichier utilitaire.js. Les mots sont stocké dans une structure de données associant le
nom de la langue avec un tableau contenant les différents mots. Les variables sont en dur dans le code, car on ne peut pas aller chercher des éléments
dans un fichier texte avec du JavaScript natif. Pour contourner cela, il aurait fallu passer par un serveur Node.js. Or ce n'était pas le corps du sujet.
On récupère ensuite les mots de la langue courante à l'aide d'une méthode
('mettreAJourNoms'). Pour récupérer un mot, nous disposons d'une méthode 'getMot(numMot)' qui récupère le mot selon le numéro 'numMot'.
Cette méthode retourne le mot de la langue courante.


## Fonctionnement du projet
+ ### Synthèse Vocale
La synthèse vocale est initialisée dans le fichier 'utilitaire.js', et la fonction prononcerMot est responsable de la prononciation des mots. 
La voix utilisée est sélectionnée en fonction de la langue choisie par l'utilisateur et peut être modifié à tout moment (se modifie automatiquement lors du changement de langue par l'utilisateur).
+ ### Affichage des images
Dans le fichier 'utilitaire.js', nous disposons également d'une méthode 'afficherCartes' qui sera charger de générer la grille d'image et 
d'associé à chaque case d'image une méthode passé en paramètre (qui variera selon si nous sommes en jeu ou en apprentissage).
###Page d'apprentissage
Cette page est géré dans le fichier 'apprentissage.js' qui gère l'affichage de la page d'apprentissage. 
Nous utilisons la méthode 'afficherCarte' de 'utilitaire.js' pour générer la grille avec la méthode de clickHandler ou l'utilisateur entendra la prononciation du mot correspondant.
+ ### Page de jeu
Cette page est géré dans le fichier 'jeu.js' qui gère l'affichage de la page de jeu. Nous utilisons la méthode 'afficherCarte' de 'utilitaire.js' pour générer la grille avec la méthode de clickHandler ou nous procédons à une 
vérification de la correspondance entre le mot correspondant à l'image cliqué et le mot à deviner. 
Ce dernier est initialisé au lancement de la page de jeu. À chaque étape, l'utilisateur pourra entendre le mot 
ou/et un message correspondant au statut du jeu. Selon si l'utilisateur clique ou non sur la bonne réponse, le message audio 
est adapté. Nous avons également implanté un système de nombre de réponses max (variable 'nbReponsesMax' paramètrable en haut de ce fichier) 
et les messages audio correspondants. \
Les différents messages audio sont adapté selon la langue choisie par l'utilisateur et peut être changé en cours de partie.