# TP 1 : F. Compiler avec Babel <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [F.1. Installation](#f1-installation)
- [F.2. Compilation](#f2-compilation)

Jusque là on ne s'est pas préoccupé de la compatibilité navigateur du code que l'on a tapé.

En revanche dans la vraie vie, si l'on veut que tous les internautes puissent utiliser notre application sans encombre, il faut compiler notre code ES6+ en ES5. Cette compilation se fait avec [Babel](https://babeljs.io).

## F.1. Installation
L'installation de Babel se fait avec npm (Node Package Manager - l'outil fourni avec Node et qui permet de télécharger des utilitaires JS).

1. **Tout d'abord, ouvrez un terminal directement dans VSCodium** en tapant <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> puis `View: toggle panel`. Utiliser le terminal intégré à VSCodium a plusieurs avantages :
	- pas besoin de jongler entre plusieurs fenêtres pour passer de l'IDE au terminal
	- le terminal s'ouvre directement dans le dossier du projet

2. **Initialisez votre projet npm :** Dans le terminal de VSCodium tapez la commande :
	```bash
	npm init
	```
	Répondez alors aux questions qui vous sont posées (donnez le nom "pizzaland" au projet, vous pouvez ensuite taper <kbd>Entrée</kbd> pour toutes les autres questions). À la fin du questionnaire vous verrez qu'un fichier `package.json` a été créé. Celui-ci nous sera utile par la suite.

3. **Installez babel :**
	```bash
	npm install --save-dev @babel/core @babel/cli
	```
	Ouvrez le fichier `package.json`dans VSCodium. Vous noterez que les paquets `@babel/core` et `@babel/cli` ont été rajoutés dans les dépendances du projet !

	Vous pourrez aussi remarquer qu'un dossier `node_modules` a également été créé. C'est lui qui contient le code de toutes les dépendances du projet (toutes les librairies js qu'on a installé avec npm).

4. **Installez le preset `env`.** Un preset est une sorte de dictionnaire qui indique à babel la syntaxe à compiler (sans preset, Babel n'applique aucune modification au code source). Le preset `env` permet de transpiler **toutes les features ES6+ en ES5** (c'est une sorte de dictionnaire de traduction ES6+ -> ES5) :
	```bash
	npm install --save-dev @babel/preset-env
	```
5. **Enfin, créez un fichier `.babelrc` à la racine de votre projet** (au même niveau que le `index.html` et le `package.json`) pour dire à Babel d'utiliser le preset `env` :
	```json
	{
		"presets": ["@babel/env"]
	}
	```

## F.2. Compilation
6. **Vous pouvez maintenant compiler votre code ES6+ en ES5 à l'aide de la commande** :
	```bash
	./node_modules/.bin/babel js -d build
	```
	Cette commande va créer un dossier `build` dans lequel sera placé le fichier `main.js` compilé !

	Vérifiez que le fichier `build/main.js` est bien compilé et qu'il ne reste plus de traces de code ES6 (const, let, ...). Si ce n'est pas le cas (s'il reste des `const`, des template strings ou des arrow functions), c'est que le .babelrc est mal configuré ou que vous avez raté une étape !

7. **Une fois le fichier `build/main.js` créé, modifiez le fichier index.html pour charger ce fichier à la place du `js/main.js`.** Rechargez la page pour vérifier que tout fonctionne toujours correctement !

8. **Pour simplifier le travail et éviter d'avoir à compiler manuellement à chaque modification**, vous pourrez utiliser dans les futurs TP, la commande suivante qui va tourner en tâche de fond et recompiler à chaque sauvegarde du fichier js/main.js :
	```bash
	./node_modules/.bin/babel js -d build --verbose --watch --source-maps
	```


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [G. Filtres et tris](./G-filtres-tri.md)