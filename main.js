const btnSkill = document.querySelector('#skill');
const btnContact = document.querySelector('#contact');

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