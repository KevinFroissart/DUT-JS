# TP 1 : D. Les chaînes de caractères <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [D.1. Note à propos d'EcmaScript](#d1-note-à-propos-decmascript)
- [D.2. Rappels sur les chaînes en JS](#d2-rappels-sur-les-chaînes-en-js)
- [D.3. Manipulations simples](#d3-manipulations-simples)
- [D.4. Injection dans la page HTML](#d4-injection-dans-la-page-html)

## D.1. Note à propos d'EcmaScript

### Pour tous les TP vous coderez en ES6+ ! <!-- omit in toc -->

**Dans un premier temps, pour se familiariser avec JavaScript, nous ne nous soucierons pas du support navigateur des syntaxes EcmaScript que l'on va utiliser. Ce que vous pourrez utiliser ou pas dépend de la version de votre navigateur.**

Consultez le support navigateur des différentes fonctionnalités EcmaScript ici :

- pour ES6 : http://kangax.github.io/compat-table/es6/
- pour ES7, ES8, ES9 (ES2016+) : http://kangax.github.io/compat-table/es2016plus/
- pour les features en cours de spécification (comme les propriétés de classes, ou le mot clé `static`) : http://kangax.github.io/compat-table/esnext/

Ceci étant dit, tout ce qui a été vu en cours jusqu'ici est compatible avec les dernières versions de Chrome/Chromium !

**NB :** *Dans la vraie vie se reposer sur la version du navigateur de l'utilisateur est trop "risqué", on utilisera donc par la suite le compilateur [Babel](https://babeljs.io) pour rendre notre code compatible avec tous les navigateurs. Pour l'instant on va mettre de côté cette problématique pour ce concentrer sur le code, nous y reviendrons dans la suite du TP.*



## D.2. Rappels sur les chaînes en JS
***Pour rappel il existe 3 manières de déclarer des chaînes de caractères en JS :***
```js
/* guillemets simples */
let s1 = 'je suis une chaîne avec des single quotes';

/* ou guillemets doubles */
let s2 = "je suis une chaîne avec des double quotes";

/* ou accent grave (template strings ES6) */
let s3 = `Les étudiants de ${ getCurrentSchool() } sont les meilleurs`;
```
*Les templates strings sont à privilégier si vous devez injecter des valeurs dynamiques dans la chaîne ou si vous souhaitez la déclarer sur plusieurs ligne.*

*Si ce n'est pas le cas, le choix entre guillemets simples ou double est une question de préférences (les goûts et les couleurs...), la seule contrainte est qu'une fois qu'on a fait un choix, il faut s'y tenir (conventions de code). Entre guillemets doubles ou simples, ma préférence va aux guillemets simples qui évitent de devoir échapper les double quotes (souvent utilisées lorsqu'on génère du code HTML).*


## D.3. Manipulations simples
**Entrons dans le vif du sujet :**

1. **Effacez le code contenu dans le fichier `main.js`** pour repartir d'un fichier vide.
2. **Créez une constante appelée `nom`** et assignez lui la chaîne de caractères `Regina`
3. **Créez une constante nommée `url`.** Sa valeur initiale sera la concaténation de :
   - la chaîne de caractères `'images/'`,
   - la valeur de la variable `nom` transformée en minuscules à l'aide de la méthode `.toLowerCase()` cf. [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
   - et de la chaîne de caractères `'.jpg'`
4. **Sur la ligne suivante, créez une variable nommée `html`** :

	Votre code devra permettre d'assigner à la variable `html` une chaîne qui corresponde au code d'une balise `<a>` (*lien hypertexte*) :
	- L'URL du lien (*attribut `href`*) devra correspondre à la valeur la constante `url`.
	- Le contenu de la balise `<a>` correspondra lui aussi à la valeur de la constante `url`

	***NB:** pour ça, les template strings sont parfaitement adaptées !*

	Affichez dans la console la valeur de la variable html, elle doit correspondre à la chaîne de caractères suivante :
   ```html
   '<a href="images/regina.jpg">images/regina.jpg</a>'
   ```

## D.4. Injection dans la page HTML

5. **C'est le moment d'afficher le contenu de la variable `html` dans la page.**

   Même si nous n'avons pas encore vu comment manipuler la page html grâce à l'API DOM (chapitre 3), vous trouverez ci-dessous le code qui va permettre d'injecter notre balise `<a>` dans la page. A la fin de votre code, ajouter l'instruction suivante :
   ```js
   document.querySelector('.pizzasContainer').innerHTML = html;
   ```
   Cette instruction va avoir pour effet d'injecter le code HTML contenu dans la variable `html` à l'intérieur de la balise de classe CSS `"pizzasContainer"`.

   Si tout s'est bien passé, vous devriez désormais :
   - voir le texte 'images/regina.jpg' dans la page de votre navigateur.
   - pouvoir cliquer sur ce texte et être redirigé vers une image de pizza !

   <a href="images/readme/pizzaland-01.jpg"><img src="images/readme/pizzaland-01.jpg" width="80%"></a>

6. **Modifiez encore la variable html avant son affichage** en remplaçant le texte contenu dans la balise `<a>` par
	- **une balise `<img>`** dont la source (_attribut `src`_) sera la chaîne `images/regina.jpg` valeur initiale de la variable `html`.
	- **une balise `<h4>`** contenant le `nom` de la pizza

	Contrôlez dans l'inspecteur d'éléments que le résultat obtenu est bien :
	```html
	<a href="images/regina.jpg">
		<img src="images/regina.jpg"/>
		<h4>Regina</h4>
	</a>
	```

	Le rendu doit être celui-ci :<br>
	<a href="images/readme/pizzaland-02.jpg"><img src="images/readme/pizzaland-02.jpg" width="80%"></a>


## Étape suivante <!-- omit in toc -->
Si tout fonctionne, vous pouvez passer à l'étape suivante : [E. Les tableaux et les objets littéraux](E-tableaux-objets.md)