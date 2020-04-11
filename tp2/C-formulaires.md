#### TP3 - API DOM <!-- omit in toc -->
# C. La gestion des formulaires <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [C.1. Rappels](#c1-rappels)
- [C.2. Préparatifs](#c2-préparatifs)
- [C.3. Le formulaire d'ajout de pizza](#c3-le-formulaire-dajout-de-pizza)
- [C.4. La validation de la saisie](#c4-la-validation-de-la-saisie)
- [C.5. Le formulaire complet :](#c5-le-formulaire-complet-)
- [Étape suivante](#Étape-suivante)

## C.1. Rappels
Comme vu en cours (cf. pdf sur moodle), on peut utiliser l'API DOM avec les formulaires principalement pour 2 choses :
- détecter les changements de valeurs dans les champs de saisie et afficher des messages d'erreur si besoin
- détecter la soumission du formulaire (pour envoyer des données en AJAX par exemple)

## C.2. Préparatifs
**Avant d'aller plus loin dans le TP faisons un point sur le code qui est fourni dans ce repo** : il contient en effet des classes qui correspondent à la solution du précédent TP [D. POO avancée](https://gitlab.univ-lille.fr/js/tp2/blob/master/D-poo-avancee.md) :

- **La classe `js/pages/Page.js`** est une classe de base dont hériterons les pages de notre application et qui implémente juste une méthode `renderTitle()`. cette méthode `renderTitle()` retourne le titre de la page (passé dans le constructeur sous forme de chaîne de caractères).
- **La classe `js/pages/HomePage.js`** hérite de `Page` et permet d'afficher une liste de pizzas passées soit au constructeur, soit à un setter `homePage.pizzas = ...`. Mettre à jour la liste des pizzas via le setter a pour effet de re-générer le tableau des children de la page.
- **La classe `js/components/PizzaThumbnail.js`** est une classe qui hérite de `Component` et qui permet d'afficher une pizza. Elle est utilisée dans `HomePage`.
- **Enfin la classe `js/PageRenderer.js`** est une classe qui dispose d'une méthode statique `PageRenderer.renderPage( page )` qui est appelée dans le `main.js`. Cette méthode statique permet d'afficher une page avec son contenu (méthode `page.render()`) et son titre (méthode `page.renderTitle()`).

Si vous ne l'avez pas déjà fait consultez le code de ces fichiers.

***Maintenant que les présentations sont faites, adaptons un peu le code pour préparer la suite du TP :***

Pour permettre à chaque page de réagir aux événements de l'utilisateur, on va ajouter une méthode `mount()` dans la classe `Page` et qui sera appelée par la classe `PageRenderer` à chaque fois qu'on affiche une page via `renderPage()` :

1. **Ajouter la méthode `mount()`** dans la classe `Page` :
	```js
	mount(element) {
		// Cette méthode sera appelée par PageRenderer après chaque render()
		// par défaut, cette méthode ne fait rien
		// ce sont les classes filles qui devront surcharger cette méthode
	}
	```
2. **Appeler la méthode `mount()`** à la fin de la méthode statique `PageRenderer.renderPage()` :
	```js
	static renderPage(page) {
		// ...
		page.mount(this.contentElement);
	}
	```

**Ces deux modifications faites, passons à la création du formulaire d'ajout de pizza.**

## C.3. Le formulaire d'ajout de pizza
1. **Créez la classe `AddPizzaPage`** (dans un module `js/pages/AddPizzaPage.js`) :
	```js
	import Page from './Page.js';

	export default class AddPizzaPage extends Page {
		constructor() {
			super('Ajouter une pizza');
		}

		render() {
			return /*html*/ `
				<form class="addPizzaPage">
					<label>
						Nom :
						<input type="text" name="nom" class="form-control">
					</label>
					<button type="submit" class="btn btn-default">Ajouter</button>
				</form>`;
		}

		mount(element) {}

		submit(event) {}
	}

	```

	***NB :** le commentaire `/*html*/` juste avant la chaîne dans la méthode `render()` permet à l'extension de vscodium "es6-string-html" (que vous avez installé lors du précédent TP) d'appliquer la coloration syntaxique au code html contenu dans la template string, ce qui peut être pratique pour s'y retrouver.*

2. Affichez la page `AddPizzaPage` lors du clic sur le lien du menu `"Ajouter une Pizza"` et la `HomePage` lors du clic sur le lien `"La carte"` et sur le logo.

3. **Dans la méthode `mount()` de la classe `AddPizzaPage`** ajoutez un écouteur d'événement 'submit' sur la balise `<form class="addPizzaPage">`. Cet écouteur d'événement devra déclencher la méthode `submit()` de l'instance.

	***NB :** Pour rappel, la valeur du `this` à l'intérieur d'un écouteur d'événement (fonction appelée par addEventListener) est toujours l'élément HTML qui a déclenché l'événement (ici le formulaire). Pour pouvoir appeler une méthode de l'instance, il faut forcer la valeur du `this` pour qu'elle corresponde toujours à l'instance dans laquelle le code s'exécute. Comme expliqué dans le pdf du cours, il existe plusieurs manières de le faire, mais celle que je vous recommande est l'emploi de la méthode [`bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) dans le constructeur de la classe :*
	```js
	class MaClasse {
		constructor(){
			this.onClick = this.onClick.bind(this)
		}
		onClick(event) {
			// this est correct !
		}
	}
	```
4. **Implémentez la méthode `submit()` dans la classe `AddPizzaPage`.**  : cette méthode va pour le moment juste afficher un message dans la console.
	```js
	submit(event) {
	  // ici le code de votre méthode
	}
	```
	***NB:** Souvenez vous de la méthode `event.preventDefault()` et vérifiez que la soumission du formulaire n'entraîne pas un rechargement de page...*


## C.4. La validation de la saisie
1. **Au submit, afficher dans la console la valeur saisie par l'utilisateur dans le champ "nom"**. Un sélecteur CSS qui peut être utile ici est le [sélecteur d'attributs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors).

2. **Si le champ "nom" est vide, afficher un message d'erreur** à l'aide de la fonction [`alert()`](https://developer.mozilla.org/fr/docs/Web/API/Window/alert)

3. **Si le champ "nom" n'est pas vide, afficher une alerte "La pizza xxxxx a été ajoutée"** (où "xxxxx" correspond au nom qu'a saisi l'utilisateur) **et vider le champ de saisie** pour permettre à l'utilisateur de saisir une nouvelle pizza.

## C.5. Le formulaire complet :
1. Coder le formulaire complet de création de pizza selon le code HTML suivant (tous les champs sont obligatoires) :
```html
<form class="addPizzaPage">
	<label>
		Nom :
		<input type="text" name="nom" class="form-control">
	</label>
	<label>
		Base :
		<select name="base" class="form-control">
			<option>Tomate</option>
			<option>Crème</option>
		</select>
	</label>
	<label>
		Image :
		<input type="text" name="image" class="form-control" placeholder="https://...">
	</label>
	<label>
		Prix petit format :
		<input type="number" name="prix_petite" class="form-control" step="0.05">
	</label>
	<label>
		Prix grand format :
		<input type="number" name="prix_grande" class="form-control" step="0.05">
	</label>
	<label>
		Ingrédients :
		<select name="ingredients" multiple="true" class="form-control">
			<option value="1">Mozzarella</option>
			<option value="2">Jambon</option>
			<option value="3">Champignon</option>
			<option value="4">Olives</option>
		</select>
	</label>
	<button type="submit" class="btn btn-default">Ajouter</button>
</form>
```

***NB:** Pour récupérer la valeur contenue dans un champ `<select>` ce n'est pas la propriété `value` qu'il faut utiliser mais `selectedOptions` (https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions). Cette propriété retourne un tableau des valeurs sélectionnées, si le tableau est vide, c'est qu'aucune valeur n'a été choisie par l'utilisateur.*

## Étape suivante
Pour terminer, voyons comment intégrer ce que saisit l'utilisateur dans le reste de l'application : [D. Formulaires et navigation](./D-navigation.md).