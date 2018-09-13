/*
* TODO:Get the cat to be clickable!
*/

//Get the cat element
var cat = document.querySelector(".catImage");
console.log(`Cat initialized`);

//get the score element so we can change it later
var score = document.querySelector(".scoreValue");


//set the variable for the number of cat clicks
let catClickCount = 0; 

//set an event listener on the cat-div
cat.addEventListener("click", function(){
  console.log("Fluffy was clicked!");
  catClickCount++;
  score.textContent = catClickCount;
  console.log(`score value is: ${score.innerText}.`);
});

//Do the same stuff for whiskers
var whiskers = document.getElementById("whiskersImage");
console.log(`Whiskers initialized`);

var whiskersScoreValue = document.getElementById("whiskersScoreValue");

let whiskersScore = 0;

whiskers.addEventListener("click", function(){
  console.log(`Whiskers was clicked!`);
  whiskersScore++;
  whiskersScoreValue.textContent = whiskersScore; 
  console.log(`score value is: ${whiskersScoreValue.innerText}.`);
});