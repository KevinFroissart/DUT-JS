#### TP3 - API DOM <!-- omit in toc -->
# D. Formulaires et navigation <!-- omit in toc -->

## Sommaire <!-- omit in toc -->
- [D.1. Mise à jour de la liste](#d1-mise-à-jour-de-la-liste)
- [D.2. Formulaire d'ingrédients](#d2-formulaire-dingrédients)

## D.1. Mise à jour de la liste
Lorsque l'utilisateur soumet le formulaire (et à condition que l'utilisateur n'ait pas fait d'erreur de saisie), faites en sorte que l'on retourne sur la `HomePage` avec la liste des pizzas mise à jour.

## D.2. Formulaire d'ingrédients
**Ajoutez dans le formulaire `AddPizzaPage` un lien "ajouter un ingrédient".**

Au clic sur ce lien, il faut :
1. **Afficher un nouveau formulaire à la place de la AddPizzaPage**. Ce formulaire contient uniquement un champ "nom" (obligatoire) et un bouton "submit". (*Vous pouvez vous inspirer vous du code HTML fourni à l'exercice [C.3. Le formulaire d'ajout de pizza](./C-formulaires.md#c3-le-formulaire-dajout-de-pizza)*)
2. Lors de la soumission du formulaire (si pas d'erreur), **ré-afficher la `AddPizzaPage` avec la liste des ingrédients mise à jour** avec le nouvel ingrédient saisi par l'utilisateur.
3. Faire en sorte que les champs du formulaire `AddPizzaPage` soient pré-remplies avec les valeurs précédentes :<br>
	Si l'utilisateur avait par exemple déjà renseigné un nom pour sa pizza avant de cliquer sur le lien "ajouter un ingrédient", lorsqu'il a terminé d'ajouter son ingrédient et qu'il retourne sur la `AddPizzaPage`, le formulaire doit se ré-afficher avec le nom de pizza qu'il avait précédemment saisi.

