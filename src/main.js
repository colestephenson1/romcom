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
var viewHomeImage = document.querySelector('.main-cover');
var savedView = document.querySelector('.saved-view')
var savedCoverSection = document.querySelector('.saved-covers-section')
// // We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;


// Add your event listeners here 👇
randomCoverButton.addEventListener('click', makeRandomCover);

makeNewButton.addEventListener('click', goToMakeCover);

viewSavedButton.addEventListener('click', goToSaved);

saveCoverButton.addEventListener('click', saveCover);

homeButton.addEventListener('click', goToHome);

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  coverImage.src = randomCover.cover;
  coverTitle.innerText = randomCover.title;
  tagline1.innerText = randomCover.tagline1;
  tagline2.innerText = randomCover.tagline2;
}

function goToMakeCover() {
  viewHomeImage.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  saveCoverButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
  makeNewButton.classList.remove('hidden');
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

function goToSaved() {
  savedCoverSection.innerText = savedCovers
  viewHomeImage.classList.add('hidden')
  formView.classList.add('hidden')
  savedView.classList.remove('hidden')
  viewSavedButton.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}

function saveCover() {

}

//use classList for hidden/non hidden toggle function
