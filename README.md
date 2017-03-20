# ZZMood
Projet 2e année ISIMA

Node contient:
  -le serveur node
  -l'application web

zzmoodmobile contient:
  -l'application mobile

Tout les fichiers peuvent s'ouvrir avec un éditeur de texte: le bloc-note, notepad++, ect.

Guide d'installation sur WINDOWS du serveur NodeJs et de l'application web:

1. 	Télécharger les fichiers (https://github.com/yaminzn/ZZMood) , Clone or download > Download ZIP (boutton vert à droite)
2. 	Extraire le dossier zip
3. 	Installer NodeJs(https://nodejs.org/en/download/)
4. 	Ouvrir NodeJs Command Prompt dans le dossier d'installation
	Une console s'ouvrira avec un message du type: "Your environment has been set up for using Node.js 6.9.2 (x64) and npm." en première ligne.
5. 	Installer angular-cli (https://github.com/angular/angular-cli)
	Faire "npm install -g @angular/cli" dans la console.
6.	Vérifier que l'installation s'est bien passé en tapant "ng help" dans la console.
7.	Déplacer vous dans le dossier où vous avez extrait le dossier zip.
	Taper "cd chemin_vers_le_dossier" dans la console.
	Dans mon cas, je dois écrire "cd C:\Users\Yami\Desktop\ZZMood-master", le dossier est sur mon bureau.
8. 	Nous allons mettre en place le serveur NodeJs en local. Le serveur tournera sur VOTRE ORDINATEUR.
	Aller dans le dossier node en tapant "cd node".
9.	Nous allons maintenant installer les dépendances dont le serveur à besoin.
	Taper "npm install".
10.	Vérifier que le serveur s'est bien installé en le lançant.
	Taper "node index".
	Un message de confirmation "Server started on port 3000" doit s'afficher dans la console.
	Le serveur est disponible sur le port 3000 de votre ordinateur.
	Aller sur "http://localhost:3000/api/channels" pour vérifier.
	Les données affichées sont issus de la base de données sur un hébergeur externe gratuit.
	Félicitation le serveur fonctionne.
11. Installons l'application web.
	Arreter le serveur NodeJs en appuyant sur CTRL+C.
	Déplacez vous dans le dossier "zzmood" en tapant "cd zzmood".
	Rappel: Vous devez être dans le dossier node auparavant.
12.	Taper "npm install".
	L'installation est longue, revenez dans 5 minutes.
13.	Télécharger font awesome (http://fontawesome.io/) 
14. Déziper et renommer le dossier qui contient le code en "font-awesome".
15.	Déplacer ce dossier dans le dossier node_modules qui se trouve à "ZZMood-master\node\zzmood\node_modules"
16.	Si vous voulez tester l'application dans un environment de test:
	L'application web sera disponible sur "http://localhost:4200/"
	Cependant, le serveur doit accepter les réquêtes venant de cette addresse là, les naviguateurs interdisent les requêtes d'un port vers un autre sur localhost par défaut. Il faut donc l'autoriser.
	Aller dans le fichier index.js dans le dossier node puis décommentez la seule fonction commenté et changer "res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7100');" par "res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');"
	Il faut également indiquer aux services dans "\node\zzmood\src\app\services" d'aller sur le port 3000.
	Ouvrez chaque fichiers se terminant par service.ts et changer "api/comment" par "http://localhost:3000/api/comment".
	Idem pour les channels et les votes, "api/vote" par "http://localhost:3000/api/vote", "api/channels" par "http://localhost:3000/api/channels".
	Enfin, aller dans le dossier zzmood et taper "ng serve".
	Pour compiler la version de test en version de production, penser bien à enlever les http://localhost:3000/ que l'on vient de mettre et recommenter la fonction dans index.js dans le dossier node.
	
	Si vous voulez l'application directement en mode production:
	Dans le dossier zzmood, taper dans la console "ng build".
	Le code sera compilé et disponible dans node\public.
17. Vérifions que tout s'est bien passé.
	Retouner dans le dossier node "cd ..".
	Lancer le serveur "node index".
	Aller sur "http://localhost:3000/", vous verrez normalement la page d'accueil de l'application.
	Félicitation le serveur et l'application web fonctionnent.

Guide d'installation sur WINDOWS de l'application mobile:
1.	Installer android studio (https://developer.android.com/studio/index.html)
2.	Installer Ionic2, ouvrez une console NodeJs Command Prompt et taper "npm install -g ionic cordova".
3.	Créer un projet avec "ionic start nom_du_projet --v2", mettez un nom de projet qui vous convient.
	Le dossier du projet sera créer là où vous êtes dans la console, de base je suis dans "C:\Users\Yami". Déplacez vous à un endroit spécifique avec la commande cd si vous voulez.
	Une fois le projet créé, déplacer les fichiers de zzmoodmobile dans ce dossier (remplacez les fichiers).
4.	Déplacez vous dans le dossier du projet que vous venez de créer.
	Taper "npm install".
5.	Dans le dossier nom_du_projet\src\pages, supprimer les dossiers Tabs, About et Contact. Ceux sont des pages créer par défaut dont nous n'avons pas besoin.
5.	Dans "nom_du_projet\src\app\services", ouvrez chaque fichiers et préciser l'adresse du serveur sur lequel se trouve l'API, de base l'adresse renvoie vers heroku.
	Si vous testez en local, mettez "http://localhost:3000/api/comment", "http://localhost:3000/api/vote", "http://localhost:3000/api/channels" dans les sections appropriés comme pour la version de développement de l'applicationn web.
	Si vous avez un vrai serveur accessible depuis internet, mettez la bonne adresse.
6.	Pour lancer la version de développement sur navigateur en local:
	Autorisez les requêtes venant du port 8100, si votre serveur est en local, l'application mobile est lancée sur ce port par défaut. Allez dans node\index.js décommenter la fonction et assurez vous qu'il y ait bien écrit "res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');"
	Vérifier de bien être dans le dossier du projet et non dans un sous dossier.
	Taper "ionic serve".
	L'application mobile est lancé par défaut sur le port 8100. (http://localhost:8100)
	
	Pour passer en version de production, indiquer un nom de serveur valide, pas de localhost. Penser bien à changer l'adresse dans les services et à recommenter la fonction dans le fichier index.js dans le dossier node.
	Vérfier de bien être dans le dossier du projet et non dans un sous dossier.
	Il se peut qu'il y ait des fichiers nécessaire à l'installation qui manquent sur votre ordinateur. Si vous avez des erreurs, lisez les bien, elles devraient vous dire ce qu'il ne va pas.
	Selon la documentation officielle, il n'y a jamais aucun problème mais personnelement j'en ai au beaucoup à cette étape là, j'ai dû installer Java SDK par exemple. (https://ionicframework.com/docs/v2/intro/deploying/)
	Si vous n'avez pas de problèmes:
	Construisons le fichier d'installation pour les téléphones sur android par exemple (marche aussi pour iOS)
	Taper "cordova platform add android".
	Puis "ionic build android --prod --release".
	Cette commande vous indique à la fin où est disponible le fichier, j'ai "C:/Users/Yami/Desktop/ZZMood-master/zzmoodmobile/pp/platforms/android/build/outputs/apk/android-release-unsigned.apk"
	
	Ce fichier est un fichier d'installation pour les applications sur android.
	Avant de pouvoir installé le fichier .apk, il faut signer ce fichier.
	C'est l'organisation qui créer le fichier que le fait, voir (http://stackoverflow.com/questions/4853011/how-to-sign-an-android-apk-file)
	C'est une étape légale car l'application est proposé sur le Google Store (http://stackoverflow.com/questions/23906799/why-should-i-sign-my-application-apk-before-release), je ne peux pas vous dire qu'est ce qu'il faut mettre dans ce certificat, il faudrait aller voir un développeur android pour lui demander.

	Personnelement, je l'ai signé avec des informations bidons mais ce n'est pas un problème car c'est pour un usage privé. Suivez le premier lien si vous voulez faire pareil.
	Le mieux est qu'une personne connaissant bien les applications mobiles s'occupe de ça.
	Une fois le fichier apk signé, installé le sur un téléphone android (https://www.androidpit.com/android-for-beginners-what-is-an-apk-file)
	
	Le procédé est similaire pour une application sur iOS mais nous ne le ferons pas car il est obligatoire de passer par l'App Store pour installé une application sauf si votre appareil Apple est cracké mais c'est illégal.
	Il faut de plus payer 99 dollars par an pour avoir le droit de proposer du contenu sur l'App Store.
	
7.	Félicitation vous avez votre application mobile prête à être déployer sur Android.
8.	Vous pouvez fermer toutes les consoles.

Note: 	La connection à la base de données se situe dans node\routes\channels.js
	Il faut changer l'adresse de la base de données si vous la changer, vous devriez surement le faire pour utiliser une base de données sur vos propres serveurs. Cette base de données DOIT être en No-SQL sinon il faudra surement rajouter des lignes de codes.
	Aller sur https://mlab.com/login/ avec le pseudo: bezheng et pour mot de passe: aqwzsx123 pour avoir accès au contenu de la base de données actuelle.
