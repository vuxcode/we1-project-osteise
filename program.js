// target the mode button element
var modeBtn = document.getElementById("mode");
// set the default text to darkmode
modeBtn.innerText="darkmode";
// create a variable to the program knows what text to output
var darkmodeOn = true;
// target the body 
var element = document.body;

// create a variable to target the scrolling text
var scrollingText = document.getElementById("scrolling");
// create a couple of different functions to output different texts in the scrolling text
function scrollingOne() {
    scrollingText.innerText = "Test your music knowledge! There are 10 different difficulties.";
}
function scrollingTwo() {
    scrollingText.innerText = "Try to beat your highscore! You can see your highscore in the Session Statistics!";
}
function scrollingThree() {
    scrollingText.innerText = "You can only use your lifelines once each game! Use them wisely.";
}
function scrollingFour() {
    scrollingText.innerText = "Set your highscore! You can see your highscore in the Session Statistics!";
}

// create a randomizer function using switch to output a random text
function randomScrolling() {
    // create a variable and set it to random
    var random = Math.floor(Math.random() * 3);
    // run the randomizer and use the different functions
    switch(random) {
        case 0:
            scrollingOne();
            break;
        case 1:
            // create a variable to store the total score in from local storage
            var total = localStorage.getItem("saved_total");
            if (total > 0) {
                scrollingTwo();
                break;
            }
            else {
                scrollingFour();
                break;
            }
        case 2:
            scrollingThree();
            break;
    }
}

// create a variable to store what theme is being used
var modeSet;
// get the variable from the local storage
modeSet = localStorage.getItem("saved_theme");

function defaultTheme() {
// create an if statement to know what theme to load
if (modeSet == "dark") {
    // change the text of the button
    modeBtn.innerText="LIGHT";
    // change the variable to know which theme to load
    darkmodeOn = false;
    // set the theme
    element.classList = "dark-mode";
}
else if (modeSet == "light") {
    // change the text of the button
    modeBtn.innerText="DARK";
    // change the variable to know which theme to load
    darkmodeOn = true;
    // set the theme
    element.classList = "light-mode";
}
}
// run the function to use the current theme upon load
defaultTheme();

// create a function to swap to and from darkmode
function darkmode() {
    // create if statement to toggle dark mode on/off
    // turn darkmode on
    if (darkmodeOn) {
        // set theme to dark
        element.classList = "dark-mode";
        // change the button text
        modeBtn.innerText="LIGHT";
        // set variable to false
        darkmodeOn = false;
        // set the local storage variable
        modeSet = "dark";
        // set it in the local storage
        localStorage.setItem("saved_theme", modeSet);
    }
    // turn lightmode on
    else if (darkmodeOn == false) {
        // set the theme to light
        element.classList = "light-mode";
        // change the button text
        modeBtn.innerText="DARK";
        // set the variable to true
        darkmodeOn = true;
        // set the local storage variable
        modeSet = "light";
        // set it in the local storage
        localStorage.setItem("saved_theme", modeSet);
    }
}