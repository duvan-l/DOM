//objeto padre en e lnavegador
let win = window;
let dom = document;
let head = dom.head;
let body = dom.body;

const $header = dom.querySelector("header");
const $header_class = dom.querySelector(".header");
const $header_class_all = dom.querySelectorAll(".header");
const $header_id = dom.querySelector(".header");

const id = dom.getElementById("header");
const _class = dom.getElementsByClassName("header");
const $main = dom.querySelector("main")
// const $buscar = dom.querySelectorAll("div.card > ul.list > li.list__item")
const $buscar = dom.querySelectorAll("#propiedad")


console.log(win)
console.log(dom)
console.log(head)
console.log(body)
console.log(dom.title)
console.log(dom.styleSheets)

console.log($header)
console.log($header_class)
console.log($header_class_all)
console.log($header_id)
console.log(id)   
console.log(_class)
console.clear()
console.log(body.childNodes)
console.log($main.childNodes)
$main.childNodes.forEach((nodo) => console.log(nodo));

const arreglodos = [...$main.childNodes];

console.log(Array.from($main.childNodes).filter((nodo) => nodo.nodeType === nodo.TEXT_NODE ? true : false));

console.clear()



console.log($main.children);
console.log($main.parentElement);
console.log($main.previousElementSibling);
console.log($main.nextElementSibling);
console.log($buscar)

console.clear()
const $form = dom.querySelector("#search")
console.log($form);

$form.setAttribute('method', 'GET')
$form.firstElementChild.removeAttribute("placeholder")
$form.firstElementChild.setAttribute("autocomplete", "on")

$form.classList.add("otra_Clase")
console.log($form.classList);
$form.classList.remove("otra_Clase")
console.log($form.classList);
$form.classList.toggle("otra_Clase")
console.log($form.classList);





 
