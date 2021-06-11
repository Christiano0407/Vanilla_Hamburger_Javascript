let menuTog = document.querySelector(`.menu-toggle`); 
let nav = document.querySelector(`.nav`); 
let navLeft = document.querySelector(`.nav-left`);
let navRight = document.querySelector(`.nav-right`); 
let contact = document.querySelector(`.contact`); 
let logo = document.querySelector(`.logo`); 

let navLinks = Array.from(document.querySelectorAll(`.nav-link`)); 

menuTog.addEventListener(`click`, (e) => {
     menuTog.classList.add(`active`); 
     navRight.classList.add(`active`); 
     navLeft.classList.add(`active`); 
     logo.classList.add(`active`); 
     nav.classList.add(`active`); 

     //Remove active class to restart delayed effect

     contact.classList.remove(`active`); 
     navRight.classList.remove(`active`); 

     // Conditional

     if(menuTog.classList.contains(`active`)) {
         setTimeout(() => {
             navRight.classList.add(`active`); 
         },100)

         for(let i = 0; i < navLinks.length; i++) {
             navLinks[i].classList.remove(`active`); 
             setTimeout(() => {
                 navLinks[i].classList.add(`active`)
             }, i * 100)
         }
     }

}); 
