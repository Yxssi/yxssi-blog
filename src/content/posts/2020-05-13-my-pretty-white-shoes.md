---
template: blog-post
title: "Comment utiliser Heroku avec Laravel ? "
slug: /blog/heroku-laravel
date: 2020-05-13 12:55
description: "Heroku laravel deployment "
featuredImage: /assets/laravel_heroku.jpg
---
Voici un petit tutoriel pour effectuer le déploiement de votre projet Laravel via Heroku 





1 - Créer un compte sur le site d'Heroku
2 - Télécharger le heroku CLI (ça permet d'avoir accès au commandes commençant par heroku)

3 - Aller dans le dossier qui contient tout les fichiers de l'application laravel et ouvrez un cmd dans ce dossier

4 - Crée un repository git 

> git init

5 - Connecter le cmd à heroku:

> heroku login
> entrer votre mail
> entrer votre motdepasse

6 - Crée une application Heroku avec son nom (le nom est aussi l'url)

> heroku create le-nom-du-site

7 - Ensuite on va créer le fichier permet de dire à heroku de faire tourner l'app Laravel
→ crée un fichier sans extension appelé "Procfile"
et y rentrer:
	web: vendor/bin/heroku-php-apache2 public/

8 - Ensuite laravel à besoin d'une clé pour sécurisé les sessions
On la génère

> php artisan key:generate --show
> le resultat de mon app est →   base64:uLLnHHiYJzmudVSeecYnPwbg0oqOHsIg7JbbiKJurIk=
> (la clé diffère selon le projet donc vous aurez pas exactement la même)

9 - Heroku a besoin de cette clé pour la faire fonctionner, on l'ajoute dans la config

> heroku config:set APP_KEY=base64:m+TxPp9HLmRcu07nMSGIODYYZfR+z7X0CEG3dgbw3fQ=

10 - Ajouter les fichiers dans le repository git

> git add .
> git commit -m "test"

11 - Mettre tout les fichiers du repository dans l'app heroku

> git push heroku master

12 - Et c'est fini vous pouvez allez à l'adresse url de votre app et ça fonctionne

Bonus - Si vous avez un problème dans laravel, pour voir les erreurs vous pouvez activer le mode debug(dans le cmd)

> heroku config:set APP_DEBUG=true

Si j'explique mal regardez la doc officielle: 
https://devcenter.heroku.com/articles/getting-started-with-laravel