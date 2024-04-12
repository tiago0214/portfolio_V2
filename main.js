// let projetos = [{
//     imagem: "../assets/projects img/fokus.png",
//     descricao: "The project consists of a productivity app developed with HTML, CSS, and JavaScript, featuring a focus timer, task list management, and task persistence using localStorage. It includes different timer modes (focus, short break, and long break), task addition, removal, and editing functionalities. The app's interface dynamically updates based on user interactions, providing a seamless experience for managing tasks and productivity.",
//     tecnologias: [
//         "HTML",
//         "CSS",
//         "JavaScript"
//     ],
//     sites: [
//         "https://github.com/tiago0214/desenvolve-boticario/tree/main/Fokus-projeto",
//         "https://fokus-one-flame.vercel.app/"
//     ]
// }]

let projetos = [];

fetch("../projetos.json")
    .then(response => response.json())
    .then(json => {
        projetos = json
        projetos.forEach(projeto => {
            listaParaColocarOsElementos.appendChild(retornaElemento(projeto))
        })
    });

const btnSkill = document.querySelector('#skill');
const btnContact = document.querySelector('#contact');
const listaParaColocarOsElementos = document.querySelector('.main__projects');


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