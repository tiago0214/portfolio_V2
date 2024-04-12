let projetos = [];

const btnSkill = document.querySelector('#skill');
const btnContact = document.querySelector('#contact');
const listaParaColocarOsElementos = document.querySelector('.main__projects');

fetch("../projetos.json")
    .then(response => response.json())
    .then(json => {
        projetos = json
        listaParaColocarOsElementos.innerHTML = '';
        projetos.forEach(projeto => {
            listaParaColocarOsElementos.appendChild(retornaElemento(projeto))
        })
    });

btnSkill.addEventListener('mouseover', function () {
    btnSkill.style.textDecoration = "line-through";
    btnSkill.style.color = "red";
    btnSkill.removeAttribute('href');
});
btnSkill.addEventListener('mouseout', () => {
    btnSkill.style.textDecoration = "none";
    btnSkill.style.color = "#fffffff1";

});

btnContact.addEventListener('mouseover', function () {
    btnContact.style.textDecoration = "line-through";
    btnContact.removeAttribute('href');
    btnContact.style.color = "red";
});
btnContact.addEventListener('mouseout', () => {
    btnContact.style.textDecoration = "none"
    btnContact.style.color = "#fffffff1";
});

function retornaElemento(projeto) {
    const ul = document.createElement('ul');
    ul.classList.add('card');

    const liCard = document.createElement('li');
    liCard.classList.add('card__img');
    ul.appendChild(liCard);

    const img = document.createElement('img');
    img.classList.add('card--img');
    img.setAttribute('src', projeto.imagem)
    liCard.appendChild(img)

    const liDescription = document.createElement('li');
    liDescription.classList.add('card__description');
    ul.appendChild(liDescription);

    const paragrafo = document.createElement('p');
    liDescription.appendChild(paragrafo);

    paragrafo.innerHTML = `${projeto.descricao}`


    const liCardTech = document.createElement('li');
    liCardTech.classList.add('card__tech');
    ul.appendChild(liCardTech)

    const tagDiv = [...projeto.tecnologias];
    for (let i = 0; i < tagDiv.length; i++) {
        liCardTech.innerHTML += `<div class="card__tech--item">${tagDiv[i]}</div>`;
    }

    const liCardLinks = document.createElement('li');
    liCardLinks.classList.add('card__links');

    const tagA = [...projeto.sites];
    for (let i = 0; i < tagA.length; i++) {
        let verificar = i == 0 ? ["logo-github", "GitHub"] : ["link", "Deploy"]
        liCardLinks.innerHTML += `<a href="${tagA[i]}"
        class="card__links--link" target="_blank"><ion-icon name="${verificar[0]}"></ion-icon>
        <p class="card__link--text">${verificar[1]}</p>
        </a>`
    }
    ul.appendChild(liCardLinks);
    return ul
}