const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
   document.querySelector(".style-switcher").classList.toggle("open")
})

window.addEventListener("scroll", () => {
   if(document.querySelector(".style-switcher").classList.contains("open")) {
      document.querySelector(".style-switcher").classList.remove("open")
   }
})

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
   alternateStyle.forEach((style) => {
      if(color === style.getAttribute("title")) {
         style.removeAttribute("disabled");
      } else {
         style.setAttribute("disabled", "true");
      }
   })
}

const theme = document.querySelector(".day-night");
theme.addEventListener("click", () => {
   theme.querySelector("i").classList.toggle("fa-sun");
   theme.querySelector("i").classList.toggle("fa-moon");
   document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
   if(document.body.classList.contains("dark")) {
      theme.querySelector("i").classList.add("fa-sun");
   } else {
      theme.querySelector("i").classList.add("fa-moon");
   }
})