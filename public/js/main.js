// EXO 1

let inputUn = document.querySelectorAll('input')[0]

inputUn.addEventListener('focus', () => {
    inputUn.style.backgroundColor = "blue";
})

// EXO 2

let inputDeux = document.querySelectorAll('input')[1]

inputDeux.addEventListener('focus', () => {
    inputDeux.style.backgroundColor = "blue";
})

inputDeux.addEventListener('focusout', () => {
    inputDeux.style.backgroundColor = "white";
})

// EXO 3

let p1 = document.getElementsByClassName('premierParagraphe')[0]
let p2 = document.getElementsByClassName('secondParagraphe')[0]
let p3 = document.getElementsByClassName('dernierParagraphe')[0]
let boutonUn = document.getElementsByClassName('buttonExo btn btn-primary')[0]

p1.innerHTML = p2.innerText
p3.innerHTML = p2.innerText

// EXO 4

let inputTrois = document.querySelectorAll('input')[2]
let myText = document.querySelector('#exo4')
let boutonExo4 = document.getElementsByClassName("buttonExo")[1]

boutonExo4.addEventListener('click', () => {
    myText.innerHTML = inputTrois.value;
})

// EXO 5

let boutonExo5 = document.getElementsByClassName('btn btn-primary mb-2')[0]
let image = document.getElementsByClassName('img-responsive')[0]


boutonExo5.addEventListener('click', () => {
    image.src = './src/image/tartine.png';
})

// EXO 6

let tartineUne = document.getElementsByClassName('img-responsive')[1]
let tartineDeux = document.getElementsByClassName('img-responsive')[2]

tartineUne.addEventListener('click', () => {
    copy = tartineUne.getAttribute('src');
})

tartineDeux.addEventListener('click', () => {
    tartineDeux.setAttribute('src', copy);
})

// EXO 7

// DAWID

const divBoxB = document.querySelectorAll("div.box-body")

const txt = divBoxB[6].querySelectorAll('p'); 
const btn = divBoxB[6].querySelector("button"); 

btn.addEventListener("click", () =>{
    txt[1].innerText = [txt[0].innerText , txt[0].innerText  = txt[1].innerText ][0]; 
})

