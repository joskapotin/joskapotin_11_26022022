# Développez une application Web avec React et React Router

60 heures Mis à jour le jeudi 13 janvier 2022

Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

[![Kasa écrit en rouge avec une maison à la place du premier a](./MISSION/logoKasa.jpg)](./MISSION/logoKasa.jpg)

Logo Kasa

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

Un point est prévu avec la CTO plus tard dans la semaine, mais pour que vous puissiez vous familiariser avec les enjeux de votre mission vous trouvez le récapitulatif suivant dans votre boîte mail :

> **Objet** : Brief refonte site Kasa  
> **De** : Laura  
> **À** : moi
>
> Hello,  
> Bienvenue pour ton premier jour !
>
> On est vraiment ravis de te compter parmi nous !  
> Tu vas pouvoir nous aider à donner vie à un chantier sur lequel on travaille depuis plusieurs mois.
>
> Je préfère te mettre par écrit quelques éléments de contexte qui t'aideront à te projeter dans ta mission avant notre point de jeudi.
>
> **Ton objectif**
>
> Démarrer le projet React et développer l’ensemble de l’application, les composants React, les routes React Router, en suivant les maquettes Figma (responsives !) et toutes les infos que je te donne ci-dessous. Et ce avec un code de qualité !
>
> **Back-end / data** : Le recrutement de la personne en charge du Back-End n'est pas terminé et va prendre plus de temps que prévu. Du coup, il va falloir que tu fasses sans pour le moment. Je t'ai extrait les 20 dernières annonces de logements dans [ce fichier JSON](./MISSION/logements.json) pour que tu puisses construire le Front qui correspond.
>
> **Contraintes techniques**
>
> Tu trouveras les [coding guidelines de Kasa ici](./MISSION/Coding+guidelines+Kasa+FR.pdf).
>
> Voilà j'espère que ce petit récapitulatif t'aura donné suffisamment de pistes pour aborder sereinement tes premiers jours chez nous.
>
> Très bonne journée à toi !
>
> Laura

Plus tard dans la journée, vous recevez un e-mail de Paul, le designer, qui vous donne plus d’informations sur le design et les fonctionnalités du site.

> **Objet** : Fonctionnalité et design  
> **De** : Paul  
> **À** : moi
>
> Salut,
>
> Bienvenue parmi nous ! Laura m’a dit de te briefer sur le design de la nouvelle version du site alors voici les infos clés.
>
> **Design**
>
> Voici [les maquettes sur Figma](<https://www.figma.com/file/YUWo7FiTY79zmmL181UshN/UI-Design-Kasa-FR-(Copy)?node-id=0%3A1>) pour le design d’interface. J’ai l’habitude de travailler avec la logique de composants sur Figma, Sandra m’a dit que ça te faciliterait le travail sur React. Tu trouveras toutes les ressources dont tu as besoin directement dans la maquette (logo, icônes pour les composants, etc.). Pour cela, il suffit de cliquer sur la ressource souhaitée et de faire "Exporter" au format voulu.
>
> **Contraintes fonctionnelles**
>
> Quelques précisions sur les fonctionnalités du site :
>
> - Pour le défilement des photos dans la galerie (composant Gallery) :
>
> - Si l'utilisateur se trouve à la première image et qu'il clique sur "image précédente", la galerie affiche la dernière image.
> - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "image suivante", la galerie affiche la première image.
> - S'il n'y a qu'une seule image, les boutons "suivant" et "précédent" n'apparaissent pas.
> - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
>
> - Collapse : Par défaut, les Collapse sont fermés à l'initialisation de la page.
> - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
>   - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
>
> Bon courage pour le développement, j’ai hâte de voir ce que ça va donner !
>
> Paul

Ça y est, vous avez toutes les informations nécessaires, vous pouvez démarrer votre développement !

### Livrables

- Le lien du repository GitHub contenant l’ensemble du code du projet :

- Le code React du projet
- Le code React Router pour les routes dans un fichier dédié

Le repo GitHub doit être nommé avec la convention suivante : Nomcomplet\_#_Datedémarrage. Le # correspond au numéro du projet sur le parcours et la date doit être au format jjmmaaaa. Par exemple, FrancoisLenotre_5_05032020.

### Soutenance

Durant la présentation orale, le mentor interprétera le rôle du CTO. La soutenance est structurée de la manière suivante :

- **Présentation des livrables (15 minutes)**

- Présentation des différentes pages, avec la navigation entre elles, et interactions avec tous les éléments interactifs.
- Parcours des fichiers de code avec le mentor. Mise en avant des différents composants React.

- **Discussion (10 min)**

- Le mentor, qui joue le rôle du CTO, posera des questions sur la méthodologie adoptée et sur les livrables.

Le mentor challengera au maximum les décisions techniques que vous avez prises, il faudra donc que vous soyez capable de les justifier, et de défendre votre travail. À la fin de la soutenance, le mentor arrêtera de jouer le rôle du CTO pour vous permettre de débriefer ensemble.

### Compétences évaluées

- Développer les routes d'une application web avec React Router
- Initialiser une application web avec un framework
- Créer des composants avec React
