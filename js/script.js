var typed = new Typed(".typing", {
   strings: ["Java Developer", "Web Developer", "Instructor"],
   typeSpeed: 300,
   backSpeed: 100,
   loop: true
});

const navItems = document.querySelectorAll(".nav a");
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

for(let i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", () => {

      for(let j = 0; j < navItems.length; j++) {
         if(navItems[j] == navItems[i]) {
            navItems[j].classList.add("active");
         } else {
            navItems[j].classList.remove("active");
         }
      }

      if(window.innerWidth <= 1199) {
         aside.style.left = "-270px";
         navToggler.style.left = "10px"
      }

   })
}


if(window.innerWidth <= 1199) {
   navToggler.addEventListener("click", () => {
      
      if(!aside.style.left) {
         aside.style.left = "-270px";
      }

      if(aside.style.left == "-270px") {
         aside.style.left = "0";
         navToggler.style.left = "200px";
      } else {
         aside.style.left = "-270px";
         navToggler.style.left = "10px";
      }
   })
   window.addEventListener("resize", () => {
      if(window.innerWidth > 1199) {
         aside.style.left = null;
      }
   })
}

(function() {
   'use strict';
 
   var section = document.querySelectorAll(".section");
   var sections = {};
   var i = 0;
 
   Array.prototype.forEach.call(section, function(e) {
     sections[e.id] = e.offsetTop;
   });
 
   window.onscroll = function() {
     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
 
     for (i in sections) {
       if (sections[i] <= scrollPosition) {
         document.querySelector('.active').setAttribute('class', ' ');
         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
       }
     }
   };
 })();