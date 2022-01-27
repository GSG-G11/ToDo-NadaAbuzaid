 // Font Awesome script
 function fontAwesome() {
     var css = document.createElement("link");
     css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
     css.rel = "stylesheet";
     css.type = "text/css";
     document.getElementsByTagName("head")[0].appendChild(css);
 }
 fontAwesome();


 // Toggle button function

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


 // **** open and close modal box ****
 let modal = document.getElementById("modal");
 let modalEdit = document.getElementById("edit-modal");
 let overlay = document.getElementById("overlay");

 // open

 let openAdd = document.getElementsByClassName("add-btn")[0];

 openAdd.addEventListener("click", openFun);

 function openFun() {
     modal.style.display = "block";
     overlay.style.opacity = 1;
 }

 // close

 let closeAdd = document.getElementsByClassName("close-btn")[0];
 let closeUpdate = document.getElementsByClassName("close-btn")[1];

 closeAdd.addEventListener("click", closeFun);
 closeUpdate.addEventListener("click", closeFun);

 function closeFun() {
     modal.style.display = "none";
     modalEdit.style.display = "none";
     overlay.style.opacity = 0;
 }

 // edit 
 let edit = document.getElementsByClassName("fa-edit")[0];

 edit.addEventListener("click", openFunEdit);

 function openFunEdit() {
     modalEdit.style.display = "block";
     overlay.style.opacity = 1;
 }