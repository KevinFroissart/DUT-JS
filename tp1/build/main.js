"use strict";

/*const data = ["Regina","Napolitaine","Spicy"]

let html = "";
let boucle = "each";

if(boucle == "for"){
    for (let i = 0; i<data.length; i++) {
        const nom = data[i];
        const url = `images/${nom.toLowerCase()}.jpg`;
        html += `<a href="${url}"><img src="${url}"/><h4>${nom}</h4></a>`;   
    }
} else if(boucle == "each"){ 
    data.forEach(function(item){
        const nom = item;
        const url = `images/${nom.toLowerCase()}.jpg`;
        html += `<a href="${url}"><img src="${url}"/><h4>${nom}</h4></a>`;      
    });
} else if(boucle == "map"){
    html += data.map(x => `<a href="images/${x.toLowerCase()}.jpg"><img src="images/${x.toLowerCase()}.jpg"/><h4>${x}</h4></a>`).join('');
} else {
    const reducer = (accumulator, currentValue) => accumulator + `<a href="images/${currentValue.toLowerCase()}.jpg"><img src="images/${currentValue.toLowerCase()}.jpg"/><h4>${currentValue}</h4></a>`;
    html += data.reduce(reducer, "");
}
document.querySelector('.pizzasContainer').innerHTML = html;
*/
var data = [{
  nom: 'Regina',
  base: 'tomate',
  prix_petite: 6.5,
  prix_grande: 9.95,
  image: 'https://images.unsplash.com/photo-1532246420286-127bcd803104?fit=crop&w=500&h=300'
}, {
  nom: 'Napolitaine',
  base: 'tomate',
  prix_petite: 6.5,
  prix_grande: 8.95,
  image: 'https://images.unsplash.com/photo-1562707666-0ef112b353e0?&fit=crop&w=500&h=300'
}, {
  nom: 'Spicy',
  base: 'crème',
  prix_petite: 5.5,
  prix_grande: 8,
  image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?fit=crop&w=500&h=300'
}];

function compareByName(a, b) {
  if(a.nom < b.nom)
    return -1;
  if(a.nom > b.nom)
    return 1;
  return 0;
}

function compateByPetitPrixCroissant(a, b) {
  if(a.prix_petite < b.prix_petite)
    return -1;
  if(a.prix_petite > b.prix_petite)
    return 1;
  return 0;
}

function compateByPetitPrixCroissantEgalite(a, b) {
  if(a.prix_petite < b.prix_petite)
    return -1;
  if(a.prix_petite > b.prix_petite)
    return 1;
  if(a.prix_petite == b.prix_petite){
    if(a.prix_grande < b.prix_grande)
      return -1;
    if(a.prix_grande > b.prix_grande)
      return 1;
    return 0;
  }
  return 0;
}

data.sort(compateByPetitPrixCroissantEgalite);

//data = data.filter(base => base.base == "tomate");
//data = data.filter(prix => prix.prix_petite < 6);
data = data.filter(lettre => (lettre.nom.match(/i/g) || []).length >= 2);


var html = "";
data.forEach(function (item) {
  html += "<article class=\"media\">\n\t<a href=\"".concat(item.image, "\">\n\t\t<img src=\"").concat(item.image, "\" />\n\t\t<section class=\"infos\">\n\t\t\t<h4>").concat(item.nom, "</h4>\n\t\t\t<ul>\n\t\t\t\t<li>Prix petit format : ").concat(item.prix_petite.toFixed(2), " \u20AC</li>\n\t\t\t\t<li>Prix grand format : ").concat(item.prix_grande.toFixed(2), " \u20AC</li>\n\t\t\t</ul>\n\t\t</section>\n\t</a>\n</article>");
});
document.querySelector('.pizzasContainer').innerHTML = html;
//# sourceMappingURL=main.js.map