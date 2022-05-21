// Create variables targetting the relevant DOM elements here 👇

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');
var formView = document.querySelector('.form-view');
var viewHomeImage = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var savedCoverSection = document.querySelector('.saved-covers-section');
var customCoverInput = document.querySelector('.user-cover');
var customTitleInput  = document.querySelector('.user-title');
var customDescrip1Input  = document.querySelector('.user-desc1');
var customDescrip2Input = document.querySelector('.user-desc2');
var customCoverButton = document.querySelector('.create-new-book-button');
var homeView = document.querySelector('.home-view');

// // We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

// Add your event listeners here 👇

window.addEventListener('load', makeRandomCover);
randomCoverButton.addEventListener('click', makeRandomCover);
makeNewButton.addEventListener('click', goToMakeCover);
viewSavedButton.addEventListener('click', showSavedCoverSection);
saveCoverButton.addEventListener('click', saveCover);
homeButton.addEventListener('click', goToHome);
customCoverButton.addEventListener('click', makeCustomCover);
savedView.addEventListener('dblclick', deleteSavedCover)

// Create your event handlers and other functions here 👇
// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function goToMakeCover() {
  viewHomeImage.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
  savedView.classList.add('hidden');
}

function goToHome() {
  viewHomeImage.classList.remove('hidden');
  formView.classList.add('hidden');
  homeButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
}

function savedCoverImages() {
  savedCoverSection.innerHTML = ""
    for (i = 0; i < savedCovers.length; i++) {
    savedCoverSection.innerHTML += `<section class='mini-cover'>
        <img class= "cover-image" id= "${savedCovers[i].id}" src=${savedCovers[i].cover}>
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>`
      }
}

function showSavedCoverSection() {
  goToSaved();
  savedCoverImages();
}


function goToSaved() {
  viewHomeImage.classList.add('hidden')
  formView.classList.add('hidden')
  savedView.classList.remove('hidden')
  viewSavedButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden')
}

function makeCustomCover(event) {
event.preventDefault();
  covers.push(customCoverInput.value);
  titles.push(customTitleInput.value);
  descriptors.push(customDescrip1Input.value);
  descriptors.push(customDescrip2Input.value);
  currentCover = new Cover(customCoverInput.value, customTitleInput.value, customDescrip1Input.value, customDescrip2Input.value);
    coverImage.src = currentCover.cover;
    coverTitle.innerText = currentCover.title;
    tagline1.innerText = currentCover.tagline1;
    tagline2.innerText = currentCover.tagline2;
    goToHome();
}

function saveCover() {
   if (!savedCovers.includes(currentCover)) {
     savedCovers.push(currentCover);
   }
}

function deleteSavedCover(event) {
 for (i = 0; i < savedCovers.length; i++) {
   if (savedCovers[i].id == event.target.id) {
     savedCovers.splice(i, 1)
   }
 }
 showSavedCoverSection()
}
