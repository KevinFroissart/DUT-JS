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


const data = [{
	nom: 'Regina',
	base: 'tomate',
	prix_petite: 6.5,
	prix_grande: 9.95,
	image: 'https://images.unsplash.com/photo-1532246420286-127bcd803104?fit=crop&w=500&h=300'
},
{
	nom: 'Napolitaine',
	base: 'tomate',
	prix_petite: 6.5,
	prix_grande: 8.95,
	image: 'https://images.unsplash.com/photo-1562707666-0ef112b353e0?&fit=crop&w=500&h=300'
},
{
	nom: 'Spicy',
	base: 'crème',
	prix_petite: 5.5,
	prix_grande: 8,
	image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?fit=crop&w=500&h=300',
}];

let html = "";

data.forEach(function(item){ 
    html += `<article class="media">
	<a href="${item.image}">
		<img src="${item.image}" />
		<section class="infos">
			<h4>${item.nom}</h4>
			<ul>
				<li>Prix petit format : ${item.prix_petite} €</li>
				<li>Prix grand format : ${item.prix_grande} €</li>
			</ul>
		</section>
	</a>
</article>`
});

document.querySelector('.pizzasContainer').innerHTML = html;