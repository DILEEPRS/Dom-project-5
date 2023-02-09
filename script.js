let button=document.createElement("a");

button.innerHTML="<a href='index.html' class='btn' > Pro Subscription </a>";



let target = document.querySelector('.nav-center').children[2];

target.appendChild(button);

console.log(target);


let img = document.createElement('img');
img.src="https://theyummydelights.com/wp-content/uploads/2020/02/gobi-manchurian-8.jpg";
img.classList = "recipe-img";

let h5 = document.createElement('h5');
h5.textContent='Gobi Manchurian';
h5.classList = "recipe-name";

let p = document.createElement('p');
p.textContent="Prep : 20min | Cook : 45min";
p.classList="recipe-disp";

let a = document.createElement('a');
a.classList="recipe-text";
a.appendChild(img);
a.appendChild(h5);
a.appendChild(p);

let div = document.createElement('div');
div.classList="card";

div.appendChild(a);


target2 = document.querySelector('.recipe-gallery');

target2.appendChild(div)


let name = document.querySelector('.page-footer p a');
name.textContent ="Dileep R S";
console.log(name);
