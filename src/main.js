// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var tagline1 = document.querySelector('.tagline-1')
var tagline2 = document.querySelector('.tagline-2')
var homeButtonHidden = document.querySelector('.home-button hidden')
var randomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeNewButton = document.querySelector('.make-new-button')


// // We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;


// Add your event listeners here 👇
randomCoverButton.addEventListener('click', makeRandomCover)


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeRandomCover() {
  var randomCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  coverImage.src = randomCover.cover
  coverTitle.innerText = randomCover.title
  tagline1.innerText = randomCover.tagline1
  tagline2.innerText = randomCover.tagline2
  console.log(randomCover)
}

//use classList for hidden/non hidden toggle function
