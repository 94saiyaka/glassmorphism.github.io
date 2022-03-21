const menuBtn = document.querySelector('#hamburger-menu');
const navBar = document.querySelector('.navbar');
const header = document.querySelector('header');
const  Navlink = document.querySelector(' ul li a');
menuBtn.onclick = ()=>{
    menuBtn.classList.toggle("active");
	navBar.classList.toggle("active");

}



window.onscroll = ()=>{
    this.scrollY > 10 ? header.classList.add("sticky") : header.classList.remove("sticky");
  }




const DropBtn = document.querySelector('#dropdownBtn');
const dropMenu = document.querySelector('.drop_down_menu');

DropBtn.onclick = ()=>{
    DropBtn.classList.toggle("active");
	dropMenu.classList.toggle("active");

}
// animated background 

function createBox() {

    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 80;

    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.gradient-background').appendChild(span);

    setTimeout(() =>{
        span.remove();
    },3000)

}

setInterval(createBox, 400);