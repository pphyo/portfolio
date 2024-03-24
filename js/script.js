const serviceId = "service_geus3x9";
const templateId = "template_97lse4q";

(function(){
   emailjs.init({
     publicKey: "bvm9GAi_F7nhHw2_B",
   });
})();

const contactForm = document.querySelector("form");

const submitForm = (e) => {
   e.preventDefault();
   const errors = []
   
   let name = document.querySelector("input[name='name']");
   if(!name.value) {
      errors.push("Name required!");
   }

   let email = document.querySelector("input[name='email']");
   if(!email.value) {
      errors.push("Email required!");
   }

   let subject = document.querySelector("input[name='subject']");
   if(!subject.value) {
      errors.push("Subject required!");
   }

   let message = document.querySelector("textarea[name='message']");
   if(!message.value) {
      errors.push("Message required!");
   }
   if(errors.length > 0) {
      let info = ""
      for(let i = 0; i < errors.length; i++) {
         info += errors[i];
         if(i != errors.length - 1) {
            info += "\n";
         }
      }
      window.alert(info);
   } else {
      let confirm = window.confirm("Are you sure to send?");
      if(confirm) {
         const params = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
         }

         emailjs.send(serviceId, templateId, params).then(
            (response) => {
              window.alert('SUCCESSFULLY SEND!');
              console.log(response.status, response.text);
            },
            (error) => {
              window.alert('FAILED...')
              console.log(error);
            },
         );

         contactForm.reset()
      }

   }
}

contactForm.addEventListener("submit", submitForm);


var typed = new Typed(".typing", {
   strings: ["Java Developer", "Web Developer", "Instructor"],
   typeSpeed: 300,
   backSpeed: 100,
   loop: true
});

const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

(function() {
   'use strict';

   const navItems = document.querySelectorAll(".nav a");
   
   for(let i = 0; i < navItems.length; i++) {
      navItems[i].addEventListener("click", () => {
         
         if(window.innerWidth <= 1199) {
            aside.style.left = "-270px";
            navToggler.style.left = "10px"
         }

         for(let j = 0; j < navItems.length; j++) {
            if(navItems[j] == navItems[i]) {
               navItems[j].classList.add("active");
            } else {
               navItems[j].classList.remove("active");
            }
         }

      })
   }
})();


(function() {
   'use strict';

   navToggler.addEventListener("click", () => {
      
      if(window.innerWidth <= 1199) {
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
      }

      window.addEventListener("resize", () => {
         navToggler.style.left = null;
         if(window.innerWidth > 1199) {
            aside.style.left = null;
         }
      })

   })
})();

(function() {
   'use strict';
 
   let section = document.querySelectorAll(".section");
   let sections = {};
 
   Array.prototype.forEach.call(section, function(e) {
     sections[e.id] = e.offsetTop;
   });
 
   window.onscroll = function() {
     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
 
     for (let i in sections) {
       if (sections[i] <= scrollPosition + 50) {
         document.querySelector('.active').setAttribute('class', ' ');
         document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
       }
     }
   };
 })();