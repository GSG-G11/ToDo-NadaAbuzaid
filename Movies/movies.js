 // Font Awesome script
 function fontAwesome() {
     var css = document.createElement("link");
     css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
     css.rel = "stylesheet";
     css.type = "text/css";
     document.getElementsByTagName("head")[0].appendChild(css);
 }
 fontAwesome();


 // **** Toggle button function ****

 var toggle = document.getElementById("container");
 var toggleContainer = document.getElementById("toggle-container");
 var toggleNumber = false;

 toggle.addEventListener("click", function() {
     toggleNumber = !toggleNumber;
     let allScr = document.querySelectorAll("#all-screen");
     let doneScr = document.querySelectorAll("#done-screen");

     if (toggleNumber) {
         toggleContainer.style.clipPath = "inset(0 0 0 50%)";
         toggleContainer.style.backgroundColor = "#4E50FB";

         allScr[0].classList.toggle("hide");
         doneScr[0].classList.toggle("hide");
     } else {
         toggleContainer.style.clipPath = "inset(0 50% 0 0)";
         toggleContainer.style.backgroundColor = "#4E50FB";

         doneScr[0].classList.toggle("hide");
         allScr[0].classList.toggle("hide");
     }
     console.log(toggleNumber ? "done" : "all");
 });