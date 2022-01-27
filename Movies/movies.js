 // Font Awesome script
 function fontAwesome() {
     var css = document.createElement("link");
     css.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
     css.rel = "stylesheet";
     css.type = "text/css";
     document.getElementsByTagName("head")[0].appendChild(css);
 }
 fontAwesome();

 // open and close modal box
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


 function openFunEdit() {
     modalEdit.style.display = "block";
     overlay.style.opacity = 1;
 }


 // **** add new task to localStorage & HTML tree ****

 let submit = document.getElementById("button").addEventListener("click", add);

 function add() {
     // get data from input
     let newMovie = document.getElementById("movie-name-input").value;
     let MovieDesc = document.getElementById("movie-desc-input").value;

     // check if theres nothing saved in the storage
     if (localStorage.getItem("Movies") == null) {
         localStorage.setItem("Movies", "[]");
     }

     // push new data to the array
     let old = JSON.parse(localStorage.getItem("Movies"));
     old.push([newMovie, MovieDesc]);

     // save it to the local storage
     localStorage.setItem("Movies", JSON.stringify(old));

     // add to html tree
     let allMovies = JSON.parse(localStorage.getItem("Movies"));
     let i = allMovies.length - 1;

     let allMoviesScreen = document.getElementById("all-screen");
     let movieSection = document.createElement("section");
     movieSection.setAttribute("class", "card");
     movieSection.setAttribute(`id`, `movie-${i}`);


     let eyeIcon = document.createElement("i");
     eyeIcon.setAttribute("class", "fad fa-eye");
     eyeIcon.setAttribute(`onclick`,
         `check('${allMovies[i][0]}' , 'Movies' , 'movie-${i}') `
     );

     let movieTitle = document.createElement("p");
     movieTitle.setAttribute("class", "movie-title");

     let editIcon = document.createElement("i");
     editIcon.setAttribute("class", "fas fa-edit");

     let trashIcon = document.createElement("i");
     trashIcon.setAttribute("class", "fas fa-trash-alt");
     trashIcon.setAttribute(
         `onclick`,
         `del('${allMovies[i][0]}' , 'Movies' , 'movie-${i}') `
     );

     let movieDescr = document.createElement("p");
     movieDescr.setAttribute("class", "movie-desc");

     allMoviesScreen.appendChild(movieSection);
     movieSection.appendChild(eyeIcon);
     movieSection.appendChild(movieTitle);
     movieTitle.textContent = `${allMovies[i][0]}`;
     movieSection.appendChild(editIcon);
     movieSection.appendChild(trashIcon);
     movieSection.appendChild(movieDescr);
     movieDescr.textContent = `${allMovies[i][1]}`;

     closeFun();

 }

 var toggle = document.getElementById("container");
 var toggleContainer = document.getElementById("toggle-container");
 var toggleNumber = false;
 if (toggleNumber == false) {
     let allMovies = JSON.parse(localStorage.getItem("Movies"));

     for (let i = 0; i < allMovies.length; i++) {
         let allMovies = JSON.parse(localStorage.getItem("Movies"));

         let allMoviesScreen = document.getElementById("all-screen");
         let movieSection = document.createElement("section");
         movieSection.setAttribute("class", "card");
         movieSection.setAttribute(`id`, `movie-${i}`);


         let eyeIcon = document.createElement("i");
         eyeIcon.setAttribute("class", "fad fa-eye");
         eyeIcon.setAttribute(`onclick`,
             `check('${allMovies[i][0]}' , 'Movies' , 'movie-${i}') `
         );

         let movieTitle = document.createElement("p");
         movieTitle.setAttribute("class", "movie-title");

         let editIcon = document.createElement("i");
         editIcon.setAttribute("class", "fas fa-edit");

         let trashIcon = document.createElement("i");
         trashIcon.setAttribute("class", "fas fa-trash-alt");
         trashIcon.setAttribute(
             `onclick`,
             `del('${allMovies[i][0]}' , 'Movies' , 'movie-${i}') `
         );

         let movieDescr = document.createElement("p");
         movieDescr.setAttribute("class", "movie-desc");

         allMoviesScreen.appendChild(movieSection);
         movieSection.appendChild(eyeIcon);
         movieSection.appendChild(movieTitle);
         movieTitle.textContent = `${allMovies[i][0]}`;
         movieSection.appendChild(editIcon);
         movieSection.appendChild(trashIcon);
         movieSection.appendChild(movieDescr);
         movieDescr.textContent = `${allMovies[i][1]}`;

     }
 }

 let watchedMovies = JSON.parse(localStorage.getItem("Watched"));
 if (watchedMovies != null) {
     for (i = 0; i < watchedMovies.length; i++) {

         let watchedMoviesScreen = document.getElementById("watched-screen");
         watchedMoviesScreen.setAttribute("class", "hide")

         let checkedMovie = document.createElement("section");
         checkedMovie.setAttribute("class", "card");
         checkedMovie.setAttribute(`id`, `movie-${i}`);


         let eyeIcon = document.createElement("i");
         eyeIcon.setAttribute("class", "check-eye fad fa-eye");
         eyeIcon.setAttribute(`onclick`,
             `check('${watchedMovies[i][0]}' , 'Watched' , 'movie-${i}') `
         );

         let movieTitle = document.createElement("p");
         movieTitle.setAttribute("class", "movie-title");

         let editIcon = document.createElement("i");
         editIcon.setAttribute("class", "fas fa-edit");

         let trashIcon = document.createElement("i");
         trashIcon.setAttribute("class", "fas fa-trash-alt");
         trashIcon.setAttribute(`onclick`,
             `del('${watchedMovies[i][0]}' , 'Watched' , 'movie-${i}') `
         );

         let movieDescr = document.createElement("p");
         movieDescr.setAttribute("class", "movie-desc");

         watchedMoviesScreen.appendChild(checkedMovie);
         checkedMovie.appendChild(eyeIcon);
         checkedMovie.appendChild(movieTitle);
         movieTitle.textContent = `${watchedMovies[i][0]}`;
         checkedMovie.appendChild(editIcon);
         checkedMovie.appendChild(trashIcon);
         checkedMovie.appendChild(movieDescr);
         movieDescr.textContent = `${watchedMovies[i][1]}`;

         let delP = document.createElement("del");
         delP.textContent = `${watchedMovies[i][0]}`;

         watchedMoviesScreen.appendChild(checkedMovie);
         checkedMovie.style.border = "green solid 3px";
     }
 }

 // Toggle button function
 toggle.addEventListener("click", function() {
     toggleNumber = !toggleNumber;
     let allScr = document.querySelectorAll("#all-screen");
     let watchedScr = document.querySelectorAll("#watched-screen");

     if (toggleNumber) {
         toggleContainer.style.clipPath = "inset(0 0 0 50%)";
         toggleContainer.style.backgroundColor = "#4E50FB";

         allScr[0].classList.toggle("hide");
         watchedScr[0].classList.toggle("hide");
     } else {
         toggleContainer.style.clipPath = "inset(0 50% 0 0)";
         toggleContainer.style.backgroundColor = "#4E50FB";

         watchedScr[0].classList.toggle("hide");
         allScr[0].classList.toggle("hide");
     }
     console.log(toggleNumber ? "done" : "all");
 });


 // Check movies when watched
 function check(value, storageKey, eleId) {
     let storage = JSON.parse(localStorage.getItem(storageKey));
     let index = storage.findIndex((storage) => storage.includes(value));
     let movDesc = storage[index][1];

     // add to the watched list or the opposite
     let key = storageKey == "Movies" ? "Watched" : "Movies";

     // check if theres nothing saved in the storage
     if (localStorage.getItem(key) == null) {
         localStorage.setItem(key, "[]");
     }

     // push new data to the array
     let old = JSON.parse(localStorage.getItem(key));
     old.push([storage[index][0], movDesc]);

     // save it to the local storage
     localStorage.setItem(key, JSON.stringify(old));

     // delete from the current list
     let currentStorage = JSON.parse(localStorage.getItem(storageKey));
     let currentIndex = storage.findIndex((currentStorage) =>
         currentStorage.includes(value)
     );
     let currentElement = document.getElementById(eleId);

     if (currentIndex != null && currentIndex >= 0) {
         currentStorage.splice(currentIndex, 1);
         localStorage.setItem(storageKey, JSON.stringify(currentStorage));
     }

     // Remove Current element

     currentElement.remove();

     // add the element to the other screen

     if (key == "Movies") { // add to html tree
         let allMovies = JSON.parse(localStorage.getItem("Movies"));
         let i = allMovies.length - 1;

         let allMoviesScreen = document.getElementById("all-screen");
         let movieSection = document.createElement("section");
         movieSection.setAttribute("class", "card");
         movieSection.setAttribute(`id`, `movie-${i}`);


         let eyeIcon = document.createElement("i");
         eyeIcon.setAttribute("class", "fad fa-eye");
         eyeIcon.setAttribute(`onclick`,
             `check('${allMovies[i][0]}' , 'Movies' , 'movie-${i}') `
         );

         let movieTitle = document.createElement("p");
         movieTitle.setAttribute("class", "movie-title");

         let editIcon = document.createElement("i");
         editIcon.setAttribute("class", "fas fa-edit");

         let trashIcon = document.createElement("i");
         trashIcon.setAttribute("class", "fas fa-trash-alt");
         trashIcon.setAttribute(
             `onclick`,
             `del('${allMovies[i][0]}' , 'Movies' , 'movie-${i}') `
         );

         let movieDescr = document.createElement("p");
         movieDescr.setAttribute("class", "movie-desc");

         allMoviesScreen.appendChild(movieSection);
         movieSection.appendChild(eyeIcon);
         movieSection.appendChild(movieTitle);
         movieTitle.textContent = `${allMovies[i][0]}`;
         movieSection.appendChild(editIcon);
         movieSection.appendChild(trashIcon);
         movieSection.appendChild(movieDescr);
         movieDescr.textContent = `${allMovies[i][1]}`;
     } else {

         let watchedMovies = JSON.parse(localStorage.getItem("Watched"));
         let i = watchedMovies.length - 1;

         let watchedMoviesScreen = document.getElementById("watched-screen");
         watchedMoviesScreen.setAttribute("class", "hide")

         let checkedMovie = document.createElement("section");
         checkedMovie.setAttribute("class", "card");
         checkedMovie.setAttribute(`id`, `movie-${i}`);

         let eyeIcon = document.createElement("i");
         eyeIcon.setAttribute("class", "check-eye fad fa-eye");
         eyeIcon.setAttribute(`onclick`,
             `check('${watchedMovies[i][0]}' , 'Watched' , 'movie-${i}') `
         );

         let movieTitle = document.createElement("p");
         movieTitle.setAttribute("class", "movie-title");

         let editIcon = document.createElement("i");
         editIcon.setAttribute("class", "fas fa-edit");

         let trashIcon = document.createElement("i");
         trashIcon.setAttribute("class", "fas fa-trash-alt");
         trashIcon.setAttribute(
             `onclick`,
             `del('${watchedMovies[i][0]}' , 'Watched' , 'movie-${i}') `
         );

         let movieDescr = document.createElement("p");
         movieDescr.setAttribute("class", "movie-desc");

         watchedMoviesScreen.appendChild(checkedMovie);
         checkedMovie.appendChild(eyeIcon);
         checkedMovie.appendChild(movieTitle);
         movieTitle.textContent = `${watchedMovies[i][0]}`;
         checkedMovie.appendChild(editIcon);
         checkedMovie.appendChild(trashIcon);
         checkedMovie.appendChild(movieDescr);
         movieDescr.textContent = `${watchedMovies[i][1]}`;

         let delP = document.createElement("del");
         delP.textContent = `${watchedMovies[i][0]}`;

         watchedMoviesScreen.appendChild(checkedMovie);
     }
 }


 // delete specific movie from localStorage & HTML tree 

 function del(value, storageKey, eleId) {
     let storage = JSON.parse(localStorage.getItem(storageKey));
     let index = storage.findIndex((storage) => storage.includes(value));
     let element = document.getElementById(eleId);

     console.log(element);

     if (index != null && index >= 0) {
         storage.splice(index, 1);
         localStorage.setItem(storageKey, JSON.stringify(storage));
     }

     element.remove();
 }